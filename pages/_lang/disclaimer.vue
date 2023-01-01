<template>
  <div class="disclaimer">
    <div class="banner">
      <div class="banner-title">{{ $t('disclaimer') }}</div>
    </div>
    <!-- 目前就中文及英文兩個版本 -->
    <LocaleDisclaimerTW v-show="showLang === 'TW'" />
    <LocaleDisclaimerEN v-show="showLang === 'EN'" />
  </div>
</template>

<script>
export default {
  name: 'Disclaimer',
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
