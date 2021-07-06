<template>
  <div class="home">
    <!--Banner開始-->
    <div class="banner">
      <div class="banner-title">返多寶-虛擬貨幣返佣先驅</div>
      <div class="banner-sub">致力打造全球最大虛擬貨幣返佣平台，讓交易變得更優惠、更便利。</div>
      <div class="banner-more">
        <div class="banner-button">了解更多</div>
      </div>
      <div class="banner-currencies">
        <img src="@/assets/img/common/currencies.png" alt="currencies" />
      </div>
    </div>
    <!--Banner結束-->

    <!--加入我們 開始-->
    <JoinUs />
    <!--加入我們 結束-->

    <!--介紹 開始-->
    <div v-if="false" class="outline info-outline">
      <div class="outblock">
        <div class="info-main-title">
          <div>
            <div class="title">返多寶可以幫你</div>
            <div class="sub">返多寶會員特色資訊，可以達到有效管理與圖表統計</div>
          </div>
        </div>

        <div class="info-main-pic">
          <img id="unqi-account" src="@/assets/img/index-intro-00.jpg" alt="" />
          <img id="bonues-visual" src="@/assets/img/index-intro-01.jpg" alt="" style="display: none" />
          <img id="perfect-control" src="@/assets/img/index-intro-02.jpg" alt="" style="display: none" />
          <img id="servicr-team" src="@/assets/img/index-intro-03.jpg" alt="" style="display: none" />
          <div class="info-slider">
            <div id="unqi-account-slide" class="active"></div>
            <div id="bonues-visual-slide"></div>
            <div id="perfect-control-slide"></div>
            <div id="servicr-team-slide"></div>
          </div>
        </div>

        <div class="info-main">
          <div class="main">
            <div id="unqi-account-btn" class="active">
              <div class="title">一對多帳號視覺化管理</div>
              <div class="sub">返多寶帳號整合多間交易所<br />輕鬆管理所有返佣資訊</div>
            </div>
            <div id="bonues-visual-btn">
              <div class="title">保證多幣種返佣</div>
              <div class="sub">不限合約類型<br />提供多種貨幣返佣</div>
            </div>
            <div id="perfect-control-btn">
              <div class="title">高安全性返佣</div>
              <div class="sub">返多寶獨立冷錢包<br />人工返佣保障會員安全性</div>
            </div>
            <div id="servicr-team-btn">
              <div class="title">在線客服團隊</div>
              <div class="sub">專業提供24小時客服服務<br />隨時隨地回應您的建議與疑問</div>
            </div>
          </div>
          <a href="javascript:void(0)" class="info-btn">
            開始使用
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11 0.333328L9.12004 2.21333L16.56 9.66666H0.333374V12.3333H16.56L9.12004 19.7867L11 21.6667L21.6667 11L11 0.333328Z"
                fill="#62FFFF"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
    <!--介紹 結束-->

    <!--底版 開始-->
    <div v-if="false" class="outline line-bg">
      <!--介紹 開始-->
      <div class="outline info-outline">
        <div class="outblock">
          <div class="info-main-title">
            <div>
              <div class="title">返多寶可以幫你</div>
              <div class="sub">返多寶會員特色資訊，可以達到有效管理與圖表統計</div>
            </div>
          </div>

          <div class="info-main-pic">
            <img id="unqi-account" src="@/assets/img/index-intro-00.jpg" alt="" />
            <img id="bonues-visual" src="@/assets/img/index-intro-01.jpg" alt="" style="display: none" />
            <img id="perfect-control" src="@/assets/img/index-intro-02.jpg" alt="" style="display: none" />
            <img id="servicr-team" src="@/assets/img/index-intro-03.jpg" alt="" style="display: none" />
            <div class="info-slider">
              <div id="unqi-account-slide" class="active"></div>
              <div id="bonues-visual-slide"></div>
              <div id="perfect-control-slide"></div>
              <div id="servicr-team-slide"></div>
            </div>
          </div>

          <div class="info-main">
            <div class="main">
              <div id="unqi-account-btn" class="active">
                <div class="title">一對多帳號視覺化管理</div>
                <div class="sub">返多寶帳號整合多間交易所<br />輕鬆管理所有返佣資訊</div>
              </div>
              <div id="bonues-visual-btn">
                <div class="title">保證多幣種返佣</div>
                <div class="sub">不限合約類型<br />提供多種貨幣返佣</div>
              </div>
              <div id="perfect-control-btn">
                <div class="title">高安全性返佣</div>
                <div class="sub">返多寶獨立冷錢包<br />人工返佣保障會員安全性</div>
              </div>
              <div id="servicr-team-btn">
                <div class="title">在線客服團隊</div>
                <div class="sub">專業提供24小時客服服務<br />隨時隨地回應您的建議與疑問</div>
              </div>
            </div>
            <a href="javascript:void(0)" class="info-btn">
              開始使用
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11 0.333328L9.12004 2.21333L16.56 9.66666H0.333374V12.3333H16.56L9.12004 19.7867L11 21.6667L21.6667 11L11 0.333328Z"
                  fill="#62FFFF"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <!--介紹 結束-->

      <!--最新消息 開始-->
      <div class="outline news-outline">
        <div class="news-title">最新活動與消息</div>
        <div class="outline scroll">
          <div class="outblock full-news">
            <a href="javascript:void(0)" class="news-main">
              <div class="pic"><img src="@/assets/img/news-pic.jpg" alt="" /></div>
              <div class="sign-block">
                <div>活動</div>
              </div>
              <div class="main">How to make a website<br />look more attractive with illustrations.</div>
              <div class="date">2020.03.01</div>
            </a>
            <a href="javascript:void(0)" class="news-main">
              <div class="pic"><img src="@/assets/img/news-pic.jpg" alt="" /></div>
              <div class="sign-block">
                <div>活動</div>
              </div>
              <div class="main">How to make a website<br />look more attractive with illustrations.</div>
              <div class="date">2020.03.01</div>
            </a>
            <a href="javascript:void(0)" class="news-main">
              <div class="pic"><img src="@/assets/img/news-pic.jpg" alt="" /></div>
              <div class="sign-block">
                <div>活動</div>
              </div>
              <div class="main">How to make a website<br />look more attractive with illustrations.</div>
              <div class="date">2020.03.01</div>
            </a>
          </div>
        </div>
      </div>
      <!--最新消息 結束-->
    </div>
    <!--底版 結束-->
  </div>
</template>

<script>
import JoinUs from './components/JoinUs.vue'

export default {
  name: 'Home',
  components: {
    JoinUs
  },
  mounted() {
    const $ = window.$
    // $('.carousel').flickity({
    //   // options
    //   autoPlay: true,
    //   cellAlign: 'left',
    //   contain: true
    // })
    $('#unqi-account-btn,#unqi-account-slide').click(function() {
      $('#unqi-account-btn,#unqi-account-slide').addClass('active')
      $(
        '#bonues-visual-btn,#perfect-control-btn,#servicr-team-btn,#bonues-visual-slide,#perfect-control-slide,#servicr-team-slide'
      ).removeClass('active')
      $('#bonues-visual').hide()
      $('#perfect-control').hide()
      $('#servicr-team').hide()
      $('#unqi-account').fadeIn()
    })
    $('#bonues-visual-btn,#bonues-visual-slide').click(function() {
      $('#bonues-visual-btn,#bonues-visual-slide').addClass('active')
      $(
        '#unqi-account-btn,#perfect-control-btn,#servicr-team-btn,#unqi-account-slide,#perfect-control-slide,#servicr-team-slide'
      ).removeClass('active')
      $('#unqi-account').hide()
      $('#perfect-control').hide()
      $('#servicr-team').hide()
      $('#bonues-visual').fadeIn()
    })
    $('#perfect-control-btn,#perfect-control-slide').click(function() {
      $('#perfect-control-btn,#perfect-control-slide').addClass('active')
      $('#unqi-account-btn,#bonues-visual-btn,#servicr-team-btn,#unqi-account-slide,#bonues-visual-slide,#servicr-team-slide').removeClass(
        'active'
      )
      $('#bonues-visual').hide()
      $('#unqi-account').hide()
      $('#servicr-team').hide()
      $('#perfect-control').fadeIn()
    })
    $('#servicr-team-btn,#servicr-team-slide').click(function() {
      $('#servicr-team-btn,#servicr-team-slide').addClass('active')
      $(
        '#unqi-account-btn,#unqi-account-slide,#bonues-visual-btn,#bonues-visual-slide,#perfect-control-btn,#perfect-control-slide'
      ).removeClass('active')
      $('#bonues-visual').hide()
      $('#perfect-control').hide()
      $('#unqi-account').hide()
      $('#servicr-team').fadeIn()
    })
  }
}
</script>

<style lang="scss" scoped>
.home {
  height: 280vh;
  background-image: url('../../assets/img/common/globe.png');
  background-position: top;
  background-size: contain;
  background-repeat: no-repeat;
  .banner {
    margin-bottom: 180px;
    &-title {
      margin-top: 5vh;
      margin-bottom: 16px;
      font-size: 48px;
      font-weight: bold;
      text-align: center;
      color: #fff;
    }
    &-sub {
      color: #fff;
      text-align: center;
      font-size: 16px;
    }
    &-more {
      display: flex;
      margin-top: 38px;
      justify-content: center;
      align-items: center;
      .banner-button {
        padding: 10px 48px;
        background: linear-gradient(180deg, #62ffff 9.47%, #3ea9cc 100%);
        border-radius: 8px;
        cursor: pointer;
      }
    }
    &-currencies {
      margin-top: 38px;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 58vw;
      }
    }
  }
}

/*1024*/
@media screen and (min-width: 1000px) and (max-width: 1346px) {
}
/*768*/
@media screen and (min-width: 750px) and (max-width: 999px) {
}
/*540*/
@media screen and (min-width: 540px) and (max-width: 749px) {
}
/*320*/
@media screen and (min-width: 320px) and (max-width: 539px) {
}
</style>
