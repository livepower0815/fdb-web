<template>
  <div id="g-login-button" class="fdb-google-btn"></div>
</template>

<script>
import googleTool from '@/utils/googleTool'

export default {
  name: 'GoogleBtn',
  props: {
    config: {
      type: Object,
      default: () => ({})
    }
  },
  mounted() {
    this.initGoogleAccount()
  },
  methods: {
    async initGoogleAccount() {
      // 初始化
      await googleTool.initialize(this.handleCredentialResponse)

      // 渲染按鈕
      googleTool.renderButton({
        locale: this.$route.params.lang,
        ...this.config
      })
    },
    // google 驗證成功
    handleCredentialResponse(response) {
      if (response.error) {
        return console.error(response.error)
      }
      this.$emit('success', response)
    }
  }
}
</script>

<style lang="scss" scoped>
.fdb-google-btn {
  padding: 2px;
  background-color: #1b73e8;
  border-radius: 100px;
}
</style>
