<template>
  <div class="join">
    <div class="join-title">開始返佣旅程<br />只需要三個步驟</div>
    <div class="join-step">
      <div class="join-step-item">
        <div class="join-number">01</div>
        <div class="join-main">
          <div class="title">加入返多寶</div>
          <div class="info">快速註冊會員</div>
        </div>
      </div>
      <div class="join-step-item">
        <div class="join-number">02</div>
        <div class="join-main">
          <div class="title">綁定交易所</div>
          <div class="info">輸入交易所註冊資訊</div>
        </div>
      </div>
      <div class="join-step-item">
        <div class="join-number">03</div>
        <div class="join-main">
          <div class="title">開始返佣</div>
          <div class="info">你交易，我返佣<br />輸入收幣地址即可享受反佣</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.join {
  position: relative;
  max-width: 1440px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 6px;
  box-shadow: 0 4px 9px rgb(0 0 0 / 30%);
  margin: 0px auto 12vw auto;
  padding: 43px 45px;
  display: flex;
  align-items: center;
  z-index: 10;
  @media screen and (max-width: 1500px) {
    margin: 0px 3% 12vw 3%;
  }
  &-title {
    font-size: 40px;
    font-weight: bold;
    padding: 45px 0;
    margin-right: 53px;
    color: white;
  }
  &-step {
    flex: 1;
    display: flex;
    &-item {
      flex: 1;
      position: relative;
      margin: 0 8px;
      background: #1b212e;
      border-radius: 8px;
      .join-number {
        position: absolute;
        font-family: 'Raleway';
        font-weight: bold;
        left: 30px;
        top: -34px;
        font-size: 50px;
        color: #62ffff;
      }
      .join-main {
        display: flex;
        flex-direction: column;
        height: 166px;
        padding: 0px 30px;
        .title {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding-bottom: 10px;
          font-weight: bold;
          font-size: 24px;
        }
        .info {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          font-size: 16px;
          line-height: 150%;
        }
      }
    }
  }
}
/*1024*/
@media screen and (min-width: 1000px) and (max-width: 1346px) {
  .join {
    padding: 16px;
    &-title {
      font-size: 28px;
      margin-right: 26px;
    }
    &-step {
      &-item {
        .join-number {
          left: 16px;
          top: -17px;
          font-size: 28px;
        }
        .join-main {
          height: 144px;
          padding: 0px 18px;
          // .title {}
          .info {
            font-size: 14px;
          }
        }
      }
    }
  }
}
/*768*/
@media screen and (min-width: 750px) and (max-width: 999px) {
  .join {
    padding: 16px;
    &-title {
      font-size: 20px;
      margin-right: 14px;
    }
    &-step {
      &-item {
        .join-number {
          left: 14px;
          top: -14px;
          font-size: 24px;
        }
        .join-main {
          height: 107px;
          padding-left: 10px;
          padding-right: 4px;
          .title {
            font-size: 18px;
            padding-bottom: 6px;
          }
          .info {
            font-size: 12px;
          }
        }
      }
    }
  }
}
/*540*/
@media screen and (min-width: 500px) and (max-width: 749px) {
  .join {
    padding: 16px;
    flex-direction: column;
    margin: 0px 5% 12vw 5%;
    &-title {
      font-size: 30px;
      margin-right: 0px;
      margin-bottom: 36px;
      padding: 20px 0;
      text-align: center;
    }
    &-step {
      flex-direction: column;
      &-item {
        margin-bottom: 50px;
        .join-number {
          left: 28px;
          top: -28px;
          font-size: 46px;
        }
        .join-main {
          height: 107px;
          padding: 46px;
          height: 106px;
          .title {
            font-size: 30px;
            padding-bottom: 6px;
          }
          .info {
            font-size: 22px;
          }
        }
      }
    }
  }
}
/*320*/
@media screen and (min-width: 300px) and (max-width: 499px) {
  .join {
    padding: 0px;
    flex-direction: column;
    margin: 0px 5% 12vw 5%;
    &-title {
      font-size: 20px;
      margin-right: 0px;
      margin-bottom: 36px;
      padding: 20px 0;
      text-align: center;
    }
    &-step {
      flex-direction: column;
      &-item {
        margin-bottom: 50px;
        .join-number {
          left: 20px;
          top: -28px;
          font-size: 38px;
        }
        .join-main {
          height: 92px;
          padding: 10px 42px 14px 12px;
          .title {
            font-size: 20px;
            padding-bottom: 6px;
          }
          .info {
            font-size: 14px;
          }
        }
      }
    }
  }
}
</style>
