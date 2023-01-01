<template>
  <!--Footer 開始-->
  <div class="footer">
    <div class="footer-top">
      <div class="footer-img">
        <img v-if="deviceWidth > 900" src="@/assets/img/nav/logo.png" alt="nav-icon" />
        <img v-else src="@/assets/img/footer/footer-logo@2x.png" alt="nav-icon" />
      </div>
      <!-- 日文手機版有做特殊排版 -->
      <div class="footer-menu" :class="{ 'is-jp': lang === 'JP' }">
        <NuxtLink :to="{ name: 'lang-partner', params: { lang } }">{{ $t('exchange_platform') }}</NuxtLink>
        <NuxtLink :to="{ name: 'lang-live', params: { lang } }">{{ $t('live_learning') }}</NuxtLink>
        <NuxtLink :to="{ name: 'lang-news', params: { lang } }">{{ $t('info_center') }}</NuxtLink>
        <NuxtLink :to="{ name: 'lang-help', params: { lang } }">{{ $t('help_center') }}</NuxtLink>
      </div>
      <div class="footer-connect">
        <p class="footer-connect__title">{{ $t('contact_us') }}</p>
        <a href="https://t.me/fundobit" target="_blank" rel="noopener noreferrer" class="footer-connect__icon">
          <img src="@/assets/img/footer/telegram.png" alt="connect-icon" class="connect-icon" />
        </a>
        <a href="https://www.instagram.com/cryptocurrency.rebate" target="_blank" rel="noopener noreferrer" class="footer-connect__icon">
          <img src="@/assets/img/common/instagram.png" alt="connect-icon" class="connect-icon" />
        </a>
        <a href="mailto: CS@fundobit.com" target="_blank" rel="noopener noreferrer" class="footer-connect__icon">
          <img src="@/assets/img/common/email.png" alt="connect-icon" class="connect-icon" />
        </a>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="bottom-left">
        <div class="footer-copy-right">Copyright © 2020 FDB.</div>
        <div class="links">
          <NuxtLink :to="{ name: 'lang-disclaimer', params: { lang } }">{{ $t('disclaimer') }}</NuxtLink>
          <div style="width: 0.5px; height: 20px; margin-right: 20px; background-color: #ccc"></div>
          <NuxtLink :to="{ name: 'lang-privacy-policy', params: { lang } }">{{ $t('privacy_policy') }}</NuxtLink>
        </div>
      </div>
      <div class="bottom-right">
        <div class="footer-connect">
          <a href="https://t.me/fundobit" target="_blank" rel="noopener noreferrer" class="footer-connect__icon">
            <img src="@/assets/img/footer/telegram.png" alt="connect-icon" class="connect-icon" />
          </a>
          <a href="https://www.instagram.com/cryptocurrency.rebate" target="_blank" rel="noopener noreferrer" class="footer-connect__icon">
            <img src="@/assets/img/common/instagram.png" alt="connect-icon" class="connect-icon" />
          </a>
          <a href="mailto: CS@fundobit.com" target="_blank" rel="noopener noreferrer" class="footer-connect__icon">
            <img src="@/assets/img/common/email.png" alt="connect-icon" class="connect-icon" />
          </a>
        </div>
      </div>
    </div>
  </div>
  <!--Footer 結束-->
</template>

<script>
export default {
  name: 'FDBFooter',
  computed: {
    deviceWidth() {
      return this.$store.state.app.deviceWidth
    },
    lang() {
      return this.$route.params.lang || 'TW'
    }
  }
}
</script>
