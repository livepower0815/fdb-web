<template>
  <div class="privacy">
    <div class="banner">
      <div class="banner-title">{{ $t('privacy_policy') }}</div>
    </div>
    <!-- 目前就中文及英文兩個版本 -->
    <LocalePrivacyPolicyTW v-show="showLang === 'TW'" />
    <LocalePrivacyPolicyEN v-show="showLang === 'EN'" />
  </div>
</template>

<script>
export default {
  name: 'PrivacyPolicy',
  computed: {
    showLang() {
      switch (this.$route.params.lang) {
        case 'TW':
        case 'CN':
          return 'TW'
        case 'EN':
        case 'JP':
        case 'KR':
          return 'EN'
        default:
          return 'EN'
      }
    }
  }
}
</script>
