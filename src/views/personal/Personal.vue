<template>
  <div class="outline">
    <!--Banner開始-->
    <div class="outline banner-block personal">
      <div class="outblock">
        <div class="title">
          您的好友邀請碼{{ isMobile ? '' : '：' }}<br v-if="isMobile" />
          <span ref="copy">{{ userInfo.myInviteCore }}</span>
        </div>

        <a href="javascript:void(0)">
          <img src="@/assets/img/personal/bx_bx-link.png" alt="bx_bx-link" />
        </a>

        <a href="javascript:void(0)" @click.prevent="copyInviteCode">
          <img src="@/assets/img/personal/mi_copy.png" alt="mi_copy" />
        </a>
      </div>
    </div>
    <!--Banner結束-->

    <!--內容 開始-->
    <div class="outline">
      <div class="outblock">
        <div class="personal-main-block">
          <div class="block">
            <div class="personal-main-pic">
              <img :src="userInfo.imageUrl" alt="personal-pic" style="border-radius: 50%;" />
              <!-- <img src="@/assets/img/personal/personal-pic.png" alt="personal-pic" style="border-radius: 50%;" /> -->
              <!-- 勾勾是有綁定交易所 目前先拔掉 7/15 -->
              <!-- <div class="personal-sign">
                <img src="@/assets/img/personal/binding.png" alt="binding" style="width: 24px;" />
              </div> -->
            </div>
            <div class="personal-main-name">{{ userInfo.name }}</div>
            <!-- 拔掉 7/15 -->
            <!-- <div class="personal-main-sub">具有邀請碼認證會員</div> -->
            <div class="personal-main-email">{{ userInfo.email }}</div>
            <a href="javascript:void(0)" class="personal-main-btn" @click.prevent="$router.push({ name: 'Dashboard' })">返回返佣數量總覽</a>
          </div>
        </div>

        <div class="personal-function-block">
          <div class="menu-block">
            <a href="" :class="{ active: activedTag === 'exchange-control' }" @click.prevent="switchTag('exchange-control')">交易所管理</a>
            <a href="" :class="{ active: activedTag === 'take-cash-adress' }" @click.prevent="switchTag('take-cash-adress')">
              出金地址管理
            </a>
            <a href="" :class="{ active: activedTag === 'recommend-management' }" @click.prevent="switchTag('recommend-management')">
              推薦人管理
            </a>
            <a href="javascript:vod(0)" :class="{ active: activedTag === 'personal-edit' }" @click.prevent="switchTag('personal-edit')">
              編輯個人檔案
            </a>
          </div>
          <transition name="fade-transform" mode="out-in">
            <!-- 交易所管理 -->
            <ExchangeControl v-if="activedTag === 'exchange-control'" />

            <!-- 出金地址管理 -->
            <TakeCashAdress v-if="activedTag === 'take-cash-adress'" />

            <!-- 推薦人管理 -->
            <Recommend v-if="activedTag === 'recommend-management'" />

            <!-- 編輯個人檔案 -->
            <PersonalEdit v-if="activedTag === 'personal-edit'" />
          </transition>
        </div>
      </div>
    </div>
    <!--內容 結束-->
  </div>
</template>

<script>
import ExchangeControl from './components/ExchangeControl.vue'
import TakeCashAdress from './components/TakeCashAdress.vue'
import Recommend from './components/Recommend.vue'
import PersonalEdit from './components/PersonalEdit.vue'

export default {
  name: 'Personal',
  components: {
    ExchangeControl,
    TakeCashAdress,
    Recommend,
    PersonalEdit
  },
  data() {
    return {
      activedTag: 'recommend-management' // TODO: exchange-control
    }
  },
  computed: {
    userInfo() {
      return this.$store.state.user.userInfo
    },
    deviceWidth() {
      return this.$store.state.app.deviceWidth
    },
    isMobile() {
      return this.deviceWidth < 701
    }
  },
  methods: {
    switchTag(tagKey) {
      this.activedTag = tagKey
    },
    copyInviteCode() {
      const sel = window.getSelection()
      const range = document.createRange()
      range.selectNodeContents(this.$refs.copy)
      sel.removeAllRanges()
      sel.addRange(range)
      document.execCommand('copy')
      sel.removeAllRanges()
      this.$message.success('複製成功')
    }
  }
}
</script>
