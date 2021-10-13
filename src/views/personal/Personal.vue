<template>
  <div class="outline">
    <!--Banner開始-->
    <div class="outline banner-block personal">
      <div class="outblock">
        <div class="title">
          {{ $t('friend_invitation_code') }}{{ isMobile ? '' : '：' }}<br v-if="isMobile" />
          <span ref="copy">{{ userInfo.myInviteCore }}</span>
        </div>

        <div ref="copyLink" style="position: absolute;opacity: 0;">
          https://fdb-web-front.azurewebsites.net/dist/#/register?inviteCode={{ userInfo.myInviteCore }}
        </div>
        <a href="javascript:void(0)" @click.prevent="copyInviteCode('copyLink')">
          <img src="@/assets/img/personal/bx_bx-link.png" alt="bx_bx-link" />
        </a>

        <a href="javascript:void(0)" @click.prevent="copyInviteCode('copy')">
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
            <div class="personal-main-pic" :style="`background-image: url('${userInfo.imageUrl}')`">
              <!-- <img :src="userInfo.imageUrl" alt="personal-pic" style="border-radius: 50%; height: 100%;" /> -->
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
            <a
              href="javascript:void(0)"
              class="fdb-btn-primary-hover personal-main-btn"
              @click.prevent="$router.push({ name: 'Dashboard' })"
            >
              {{ $t('return_amount_rebates') }}
            </a>
          </div>
        </div>

        <div class="personal-function-block">
          <div class="menu-block">
            <a href="" :class="{ active: activedTag === 'exchange-control' }" @click.prevent="switchTag('exchange-control')">
              {{ $t('exchange_management') }}
            </a>
            <a href="" :class="{ active: activedTag === 'take-cash-adress' }" @click.prevent="switchTag('take-cash-adress')">
              {{ $t('withdrawal_address_management') }}
            </a>
            <a href="" :class="{ active: activedTag === 'recommend-management' }" @click.prevent="switchTag('recommend-management')">
              {{ $t('referrer_management') }}
            </a>
            <a href="javascript:vod(0)" :class="{ active: activedTag === 'personal-edit' }" @click.prevent="switchTag('personal-edit')">
              {{ $t('edit_profile') }}
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
      activedTag: 'exchange-control',
      inviteLink: ''
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
  created() {
    this.activedTag = this.$route.query.tab || 'exchange-control'
  },
  methods: {
    switchTag(tagKey) {
      this.activedTag = tagKey
    },
    copyInviteCode(refKey) {
      const sel = window.getSelection()
      const range = document.createRange()
      range.selectNodeContents(this.$refs[refKey])
      sel.removeAllRanges()
      sel.addRange(range)
      document.execCommand('copy')
      sel.removeAllRanges()
      this.$message.success(refKey === 'copy' ? this.$t('invite_code_copy') : this.$t('invite_connect_copy'))
    }
  }
}
</script>
