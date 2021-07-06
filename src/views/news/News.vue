<template>
  <div class="outline">
    <!--Banner開始-->
    <div class="banner-block news">
      <div class="outblock">
        <div class="news-banner-title">返多寶社群</div>
        <div class="news-banner-sub">發展獨立的虛擬貨幣自媒體、<br />帶領投資人深度了解虛擬貨幣</div>
      </div>
    </div>
    <!--Banner結束-->

    <!--內容 開始-->
    <div class="outline news-outline">
      <div class="outblock">
        <!--Menu開始-->
        <div class="news-pagging-menu-block">
          <a class="active" href="javascript:void(0)" id="all-btn">全部</a>
          <a href="javascript:void(0)" id="chat-btn">論壇</a>
          <a href="javascript:void(0)" id="announced-btn">公告</a>
          <a href="javascript:void(0)" id="activity-btn">活動</a>
        </div>
        <!--Menu結束-->

        <!--全部 開始-->
        <div id="all">
          <!--總攬 開始-->
          <div class="news-all-sum-block">
            <router-link to="/news-info" class="news-all-sum-main-block">
              <div class="pic"><img src="@/assets/img/news/news-announced-pic.jpg" alt="" /></div>
              <div class="sign-block">
                <div>公告</div>
              </div>
              <div class="title">How to make a website look more attractive with illustrations.</div>
              <div class="main">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</div>
              <div class="date">2020.03.01</div>
            </router-link>
            <div class="news-all-sum-sub-block">
              <router-link to="/news-info" class="news-all-sum-sub-main">
                <div class="main">
                  <div class="sign-block">
                    <div>論壇</div>
                  </div>
                  <div class="title">How to make a website look more attractive with illustrations.</div>
                  <div class="date">2020.03.01</div>
                </div>
                <div class="pic"><img src="@/assets/img/news/news-chat-pic.jpg" alt="" /></div>
              </router-link>
              <router-link to="/news-info" class="news-all-sum-sub-main">
                <div class="main">
                  <div class="sign-block">
                    <div>論壇</div>
                  </div>
                  <div class="title">How to make a website look more attractive with illustrations.</div>
                  <div class="date">2020.03.01</div>
                </div>
                <div class="pic"><img src="@/assets/img/news/news-chat-pic.jpg" alt="" /></div>
              </router-link>
              <router-link to="/news-info" class="news-all-sum-sub-main">
                <div class="main">
                  <div class="sign-block">
                    <div>論壇</div>
                  </div>
                  <div class="title">How to make a website look more attractive with illustrations.</div>
                  <div class="date">2020.03.01</div>
                </div>
                <div class="pic"><img src="@/assets/img/news/news-chat-pic.jpg" alt="" /></div>
              </router-link>
            </div>
          </div>
          <!--總攬 結束-->

          <!--消息 開始-->
          <div class="outline news-outline">
            <div class="outline">
              <div class="outblock">
                <router-link to="/news-info" class="news-main activity">
                  <div class="pic"><img src="@/assets/img/news/news-pic.jpg" alt="" /></div>
                  <div class="sign-block">
                    <div>活動</div>
                  </div>
                  <div class="main">How to make a website<br />look more attractive with illustrations.</div>
                  <div class="date">2020.03.01</div>
                </router-link>
                <router-link to="/news-info" class="news-main activity">
                  <div class="pic"><img src="@/assets/img/news/news-pic.jpg" alt="" /></div>
                  <div class="sign-block">
                    <div>活動</div>
                  </div>
                  <div class="main">How to make a website<br />look more attractive with illustrations.</div>
                  <div class="date">2020.03.01</div>
                </router-link>
                <router-link to="/news-info" class="news-main activity">
                  <div class="pic"><img src="@/assets/img/news/news-pic.jpg" alt="" /></div>
                  <div class="sign-block">
                    <div>活動</div>
                  </div>
                  <div class="main">How to make a website<br />look more attractive with illustrations.</div>
                  <div class="date">2020.03.01</div>
                </router-link>

                <router-link to="/news-info" class="news-main activity">
                  <div class="pic"><img src="@/assets/img/news/news-pic.jpg" alt="" /></div>
                  <div class="sign-block">
                    <div>活動</div>
                  </div>
                  <div class="main">How to make a website<br />look more attractive with illustrations.</div>
                  <div class="date">2020.03.01</div>
                </router-link>
              </div>
            </div>
          </div>
          <!--消息 結束-->
        </div>
        <!--全部 結束-->

        <!--活動 開始-->
        <div class="outline news-outline" id="activity">
          <div class="outline">
            <div class="outblock">
              <router-link to="/news-info" class="news-main activity">
                <div class="pic"><img src="@/assets/img/news/news-pic.jpg" alt="" /></div>
                <div class="sign-block">
                  <div>活動</div>
                </div>
                <div class="main">How to make a website<br />look more attractive with illustrations.</div>
                <div class="date">2020.03.01</div>
              </router-link>
              <router-link to="/news-info" class="news-main activity">
                <div class="pic"><img src="@/assets/img/news/news-pic.jpg" alt="" /></div>
                <div class="sign-block">
                  <div>活動</div>
                </div>
                <div class="main">How to make a website<br />look more attractive with illustrations.</div>
                <div class="date">2020.03.01</div>
              </router-link>
              <router-link to="/news-info" class="news-main activity">
                <div class="pic"><img src="@/assets/img/news/news-pic.jpg" alt="" /></div>
                <div class="sign-block">
                  <div>活動</div>
                </div>
                <div class="main">How to make a website<br />look more attractive with illustrations.</div>
                <div class="date">2020.03.01</div>
              </router-link>
              <router-link to="/news-info" class="news-main activity">
                <div class="pic"><img src="@/assets/img/news/news-pic.jpg" alt="" /></div>
                <div class="sign-block">
                  <div>活動</div>
                </div>
                <div class="main">How to make a website<br />look more attractive with illustrations.</div>
                <div class="date">2020.03.01</div>
              </router-link>
            </div>
          </div>
        </div>
        <!--活動 結束-->
      </div>
    </div>
    <!--內容 結束-->
  </div>
</template>

<script>
export default {
  name: 'News',
  mounted() {
    // const $ = window.$
  }
}
</script>
