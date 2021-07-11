<template>
  <div>
    <div class="personal-function-main">
      <div class="title">基本個人資料</div>
      <div class="sub">為保障各位資訊安全，僅限欄位可以修改</div>

      <div class="personal-edit-info-block">
        <div class="pic-block">
          <img src="@/assets/img/personal/personal-pic.png" alt="" />
          <!-- TODO: 上傳未做 -->
          <a v-if="isEdit" href="javascript:void(0)" class="btn">更改個人圖像</a>
        </div>
        <div class="info-input-block">
          <div class="main">
            <div class="title">使用者名稱</div>
            <input v-if="isEdit" v-model="formData.name" type="text" class="input" />
            <div v-else class="info">{{ formData.name }}</div>
          </div>
          <div class="main">
            <div class="title">使用者信箱</div>
            <div class="info">{{ formData.mail }}</div>
          </div>
          <div class="main">
            <div class="title">行動電話</div>
            <div v-if="isEdit" class="split-input">
              <select v-model="formData.areaCode" class="input" style="width: 80px; margin-right: 8px;">
                <option value="886">+886</option>
                <option value="885">+885</option>
                <option value="884">+884</option>
              </select>
              <input v-model="formData.phone" type="text" class="input" style="flex: 1" placeholder="請輸入行動電話" autocomplete="off" />
            </div>
            <div v-else class="info">{{ formData.areaCode }} {{ formData.phone }}</div>
          </div>
          <div class="main">
            <div class="title">原密碼</div>
            <template v-if="isEdit">
              <input v-model="formData.password" :type="passwordType" class="input" autocomplete="off" />
              <PasswordIcon :pwd-type.sync="passwordType" />
            </template>
            <div v-else class="info">{{ formData.password }}</div>
          </div>
          <div v-if="isEdit" class="main">
            <div class="title">新密碼</div>
            <input v-model="formData.newPassword" :type="newPasswordType" class="input" autocomplete="off" />
            <PasswordIcon :pwd-type.sync="newPasswordType" />
          </div>
          <div v-if="isEdit" class="main">
            <div class="title">再次確認</div>
            <input v-model="formData.doubleCheck" :type="doubleCheckType" class="input" autocomplete="off" />
            <PasswordIcon :pwd-type.sync="doubleCheckType" />
          </div>
        </div>
      </div>
    </div>

    <div class="take-cash-step-btn-block personal-info">
      <a v-if="!isEdit" href="javascript:void(0)" class="next" @click="isEdit = true">編輯內容</a>
      <a v-if="isEdit" href="javascript:void(0)" class="cancel" @click="isEdit = false">取消</a>
      <a v-if="isEdit" href="javascript:void(0)" class="next" @click="saveUserData">儲存</a>
    </div>
  </div>
</template>

<script>
import PasswordIcon from '@/components/common/PasswordIcon'

export default {
  name: 'PersonalEdit',
  components: {
    PasswordIcon
  },
  data() {
    return {
      isEdit: false,
      formData: {
        name: 'Rusalba Ruiz',
        mail: 'Rusalba542002@gmail.com',
        imageUrl: '',
        areaCode: '886',
        phone: '912345678',
        password: '123456ABC',
        newPassword: '',
        doubleCheck: ''
      },
      passwordType: 'password',
      newPasswordType: 'password',
      doubleCheckType: 'password'
    }
  },
  methods: {
    saveUserData() {
      this.isEdit = false
    }
  }
}
</script>

<style lang="scss" scoped>
.split-input {
  float: left;
  display: flex;
  width: 430px;
  .input {
    height: 42px;
    float: left;
    font-size: 16px;
    color: #c4c4c4;
    border: none;
    background: #252c3d;
    box-sizing: border-box;
    border-radius: 8px;
    padding-left: 10px;
  }
}

/*1024*/
@media screen and (min-width: 1000px) and (max-width: 1346px) {
  .split-input {
    width: 100%;
  }
}
/*768*/
@media screen and (min-width: 750px) and (max-width: 999px) {
  .split-input {
    width: 100%;
  }
}
/*540*/
@media screen and (min-width: 540px) and (max-width: 749px) {
  .split-input {
    width: 100%;
  }
}
/*320*/
@media screen and (min-width: 300px) and (max-width: 539px) {
  .split-input {
    width: 100%;
  }
}
</style>
