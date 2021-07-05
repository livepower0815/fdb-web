<template>
  <!--Footer 開始-->
  <div class="footer">
    <div class="footer-top">
      <div class="footer-img">
        <img src="@/assets/img/nav/logo.png" alt="nav-icon" />
      </div>
      <div v-if="deviceWidth >= 1024" class="footer-menu">
        <router-link to="/">FDB首頁</router-link>
        <router-link to="/about">關於FDB</router-link>
        <router-link to="/partner">合作夥伴</router-link>
        <router-link to="/news">最新消息</router-link>
      </div>
      <div class="footer-connect">
        <div>聯絡我們</div>
        <img src="@/assets/img/footer/telegram.png" alt="connect-icon" class="connect-icon" />
        <img src="@/assets/img/footer/wechat.png" alt="connect-icon" class="connect-icon" />
        <img src="@/assets/img/footer/qq-penguin.png" alt="connect-icon" class="connect-icon" />
      </div>
    </div>
    <div class="footer-bottom">
      <div class="bottom-left">
        <div class="footer-copy-right">Copyright © 2020 FDB.</div>
        <div class="links">
          <router-link to="/">免責聲明</router-link>
          <div style="width: 0.5px;height: 20px;background-color: #ccc;margin-right: 20px;"></div>
          <router-link to="/">隱私條款</router-link>
        </div>
      </div>
      <div class="bottom-right">
        <img src="@/assets/img/footer/bybit.png" alt="bybit" />
      </div>
    </div>
  </div>
  <!--Footer 結束-->
</template>

<script>
export default {
  name: 'Footer',
  computed: {
    deviceWidth() {
      return this.$store.state.app.deviceWidth
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  flex-direction: column;
  padding: 10px 47px 0 47px;
  &-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #fff;
    padding: 20px 0;
    .footer-img {
      flex: 1;
      img {
        width: auto;
      }
    }
    .footer-menu {
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 2;
      a {
        margin-right: 45px;
        color: #ccc;
        &:hover {
          color: #fff;
        }
      }
    }
    .footer-connect {
      flex: 1;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      .connect-icon {
        margin-left: 12px;
        width: 34px;
      }
    }
  }
  &-bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 0;
    .bottom-left {
      display: flex;
      align-items: center;
      .footer-copy-right {
        color: #fff;
      }
      .links {
        margin-left: 34px;
        display: flex;
        align-items: center;
        a {
          margin-right: 20px;
          color: #ccc;
          &:hover {
            color: #fff;
          }
        }
      }
    }
    .bottom-right {
      img {
        width: auto;
      }
    }
  }
}
</style>
