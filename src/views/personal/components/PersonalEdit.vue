<template>
  <div v-loading="isLoading" element-loading-background="rgba(0, 0, 0, 0.5)" style="float: left;">
    <div class="personal-function-main">
      <div class="title">基本個人資料</div>
      <div class="sub">為保障各位資訊安全，僅限欄位可以修改</div>

      <div class="personal-edit-info-block">
        <div class="pic-block">
          <img :src="formData.imageUrl" alt="personal-pic" style="border-radius: 50%;" />
          <a v-if="isEdit" href="javascript:void(0)" class="btn" @click="changeImage">更改個人圖像</a>
          <input v-show="false" ref="upload" type="file" />
        </div>
        <div class="info-input-block">
          <div class="main">
            <div class="title">使用者名稱</div>
            <input v-if="isEdit" v-model="formData.name" type="text" class="input" />
            <div v-else class="info">{{ formData.name }}</div>
          </div>
          <div class="main">
            <div class="title">使用者信箱</div>
            <div class="info">{{ formData.email }}</div>
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
          <div v-if="isEdit" class="main">
            <div class="title">原密碼</div>
            <input v-model="formData.password" :type="passwordType" class="input" autocomplete="off" />
            <PasswordIcon :pwd-type.sync="passwordType" />
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
      <a v-if="isEdit" href="javascript:void(0)" class="cancel" @click="cancelEdit">取消</a>
      <a v-if="isEdit" href="javascript:void(0)" class="next" @click="saveUserData">儲存</a>
    </div>
  </div>
</template>

<script>
import PasswordIcon from '@/components/common/PasswordIcon'
import { uploadFile } from '@/apis/common.js'
import { updateUserData } from '@/apis/user.js'

export default {
  name: 'PersonalEdit',
  components: {
    PasswordIcon
  },
  data() {
    return {
      isLoading: false,
      isEdit: false,
      formData: {
        name: '',
        email: '',
        imageUrl: '',
        areaCode: '',
        phone: '',
        password: '',
        newPassword: '',
        doubleCheck: ''
      },
      passwordType: 'password',
      newPasswordType: 'password',
      doubleCheckType: 'password'
    }
  },
  computed: {
    userInfo() {
      return this.$store.state.user.userInfo
    }
  },
  mounted() {
    this.init()
    this.$refs.upload.addEventListener('change', this.handleFiles, false)
  },
  beforeDestroy() {
    this.$refs.upload.removeEventListener('change', this.handleFiles)
  },
  methods: {
    init() {
      this.formData.name = this.userInfo.name
      this.formData.email = this.userInfo.email
      this.formData.imageUrl = this.userInfo.imageUrl
      this.formData.areaCode = this.userInfo.areaCode
      this.formData.phone = this.userInfo.phone
      this.formData.password = ''
      this.formData.newPassword = ''
      this.formData.doubleCheck = ''
    },
    changeImage() {
      this.$refs.upload.click()
    },
    async handleFiles() {
      this.isLoading = true
      try {
        const query = new FormData()
        query.append('file', this.$refs.upload.files[0])
        const res = await uploadFile(query)
        this.formData.imageUrl = res.data
        this.$refs.upload.value = null
      } catch (error) {
        this.$message.error('圖片上傳失敗')
        console.error(error)
      }
      this.isLoading = false
    },
    async saveUserData() {
      this.isLoading = true
      try {
        await this.validate()
        const reqData = {
          name: this.formData.name,
          areaCode: this.formData.areaCode,
          phone: this.formData.phone,
          password: this.formData.password,
          newPassword: this.formData.newPassword,
          imageUrl: this.formData.imageUrl
        }
        await updateUserData(reqData)
        this.$message.success('個人資料更新成功')
        this.$store.dispatch('user/getUserInfo')
        this.isEdit = false
      } catch (error) {
        if (error.isHttpError) {
          this.$message.error(error.response?.data?.resultMsg || '更新失敗')
        } else {
          this.$message.error(error.message)
        }
        console.error(error)
      }
      this.isLoading = false
    },
    async validate() {
      // 使用者名稱：僅限英文字母
      // if (!/^[a-zA-Z]{1,}$/.test(this.formData.name)) {
      //   return Promise.reject(new Error('使用者名稱：僅限英文字母'))
      // }
      // 行動電話：僅限數字不含特殊符號
      if (!/^\d+$/.test(this.formData.phone)) {
        return Promise.reject(new Error('行動電話：僅限數字不含特殊符號'))
      }

      // 三個密碼其中一隻不為空就驗證密碼
      if (this.formData.password || this.formData.newPassword || this.formData.doubleCheck) {
        // 密碼：6位數以上，含英數字，不含特殊符號
        if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(this.formData.password)) {
          return Promise.reject(new Error('密碼：6位數以上，含英數字，不含特殊符號'))
        }
        // 新密碼：6位數以上，含英數字，不含特殊符號
        if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(this.formData.newPassword)) {
          return Promise.reject(new Error('密碼：6位數以上，含英數字，不含特殊符號'))
        }
        // 確認密碼：密碼要與新密碼一致
        if (this.formData.newPassword !== this.formData.doubleCheck) {
          return Promise.reject(new Error('確認密碼：密碼要與新密碼一致'))
        }
      }
      return 'done'
    },
    formatPassword(password) {
      return password.replace(/./g, '*')
    },
    cancelEdit() {
      this.init()
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
