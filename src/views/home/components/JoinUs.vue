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
  background: rgba(0, 0, 0, 0.5);
  border-radius: 6px;
  box-shadow: 0 4px 9px rgb(0 0 0 / 30%);
  margin: 0px 3%;
  padding: 43px 45px;
  display: flex;
  align-items: center;
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
</style>
