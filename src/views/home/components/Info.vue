<template>
  <div class="info">
    <div class="info-pic">
      <transition name="fade-transform" mode="out-in">
        <img v-if="infoSelected === 'unqi-account'" src="@/assets/img/index-intro-00.jpg" alt="unqi-account" key="unqi-account" />
        <img v-if="infoSelected === 'bonues-visual'" src="@/assets/img/index-intro-02.jpg" alt="bonues-visual" key="bonues-visual" />
        <img v-if="infoSelected === 'perfect-control'" src="@/assets/img/index-intro-03.jpg" alt="perfect-control" key="perfect-control" />
        <img v-if="infoSelected === 'servicr-team'" src="@/assets/img/index-intro-01.jpg" alt="servicr-team" key="servicr-team" />
      </transition>
      <div class="info-pic-slider">
        <div @click="infoSelected = 'unqi-account'" :class="{ actived: infoSelected === 'unqi-account' }"></div>
        <div @click="infoSelected = 'bonues-visual'" :class="{ actived: infoSelected === 'bonues-visual' }"></div>
        <div @click="infoSelected = 'perfect-control'" :class="{ actived: infoSelected === 'perfect-control' }"></div>
        <div @click="infoSelected = 'servicr-team'" :class="{ actived: infoSelected === 'servicr-team' }"></div>
      </div>
    </div>

    <div class="info-mainer">
      <div class="info-mainer-title">
        <div class="title">返多寶可以幫你</div>
        <div class="sub">返多寶會員特色資訊，可以達到有效管理與圖表統計</div>
      </div>
      <div class="info-mainer-body">
        <div class="info-mainer-body__list">
          <div class="list-item" @click="infoSelected = 'unqi-account'" :class="{ actived: infoSelected === 'unqi-account' }">
            <div class="title">獨立的帳號綁定</div>
            <div class="sub">平台之間獨立帳號驗證，確保資料的安全信任度</div>
          </div>
          <div class="list-item" @click="infoSelected = 'bonues-visual'" :class="{ actived: infoSelected === 'bonues-visual' }">
            <div class="title">佣金收入視覺化</div>
            <div class="sub">清楚分類返佣種類與金額，幫助會員快速檢視返佣狀態</div>
          </div>
          <div class="list-item" @click="infoSelected = 'perfect-control'" :class="{ actived: infoSelected === 'perfect-control' }">
            <div class="title">完善資訊管理</div>
            <div class="sub">多個交易所與貨幣地址統一管理，便於會員控管資料</div>
          </div>
          <div class="list-item" @click="infoSelected = 'servicr-team'" :class="{ actived: infoSelected === 'servicr-team' }">
            <div class="title">在線客服團隊</div>
            <div class="sub">為您提供24小時溝通服務，無時不刻回應您的建議及疑問</div>
          </div>
        </div>
        <a href="javascript:void(0)" class="info-btn">
          開始使用
          <img src="@/assets/img/home/array-right.png" alt="" style="width: auto; margin-left: 10px;" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      infoSelected: 'unqi-account'
    }
  }
}
</script>

<style lang="scss" scoped>
.info {
  display: flex;
  padding: 0 5%;
  &-pic {
    padding: 0 3%;
    flex: 1;
    position: relative;
    width: 100%;
    height: 560px;
    display: flex;
    justify-content: center;
    img {
      width: 90%;
    }
    &-slider {
      position: absolute;
      bottom: 20px;
      right: 0;
      left: 0;
      display: flex;
      justify-content: center;
      > div {
        width: 34px;
        margin: 0 4px;
        background: #cccccc80;
        height: 9px;
        border-radius: 100px;
        cursor: pointer;
        &.actived,
        &:hover {
          background: #62ffff;
        }
      }
    }
  }
  &-mainer {
    flex: 1;
    width: 100%;
    padding: 0 3%;
    &-title {
      margin-bottom: 24px;
      .title {
        font-weight: bold;
        font-size: 48px;
        line-height: 64px;
      }
      .sub {
        font-size: 16px;
        line-height: 24px;
      }
    }
    &-body {
      &__list {
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 24px;
        .list-item {
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: center;
          border-radius: 8px;
          width: calc(50% - 44px);
          margin: 6px;
          height: 180px;
          padding: 0 12px 0 20px;
          cursor: pointer;
          &.actived,
          &:hover {
            background-image: linear-gradient(to left top, #5ad5d5, #3ea9cc);
          }
          &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            border-radius: 8px;
            padding: 2px;
            background: linear-gradient(315deg, #5ad5d5 0%, #3ea9cc 100%);
            mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            mask-composite: exclude;
            -webkit-mask-composite: destination-out;
          }
          .title {
            font-weight: bold;
            font-size: 24px;
            line-height: 32px;
            margin-bottom: 16px;
          }
          .sub {
            font-size: 16px;
            line-height: 150%;
          }
        }
      }
      .info-btn {
        display: flex;
        align-items: center;
        font-weight: bold;
        font-size: 24px;
        color: #62ffff;
      }
    }
  }
}
</style>
