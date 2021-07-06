<template>
  <div>
    <div class="personal-function-main">
      <div class="title">基本個人資料</div>
      <div class="sub">為保障各位資訊安全，僅限欄位可以修改</div>

      <div class="personal-edit-info-block">
        <div class="pic-block">
          <img src="@/assets/img/personal/personal-pic.png" alt="" />
          <a href="javascript:void(0)" class="btn">更改個人圖像</a>
        </div>
        <div class="info-input-block">
          <div class="main">
            <div class="title">使用者名稱</div>
            <input type="text" class="input" value="Rusalba Ruiz" />
          </div>
          <div class="main">
            <div class="title">使用者信箱</div>
            <div class="info">Rusalba542002@gmail.com<span>（尚未驗證）</span></div>
          </div>
          <div class="main">
            <div class="title">行動電話</div>
            <input type="text" class="input" placeholder="請輸入行動電話" />
          </div>
          <div class="main">
            <div class="title">原密碼</div>
            <input type="text" class="input" value="**********" />
          </div>
          <div class="main">
            <div class="title">新密碼</div>
            <input type="text" class="input" value="**********" />
          </div>
          <div class="main">
            <div class="title">再次確認</div>
            <input type="text" class="input" value="**********" />
          </div>
        </div>
      </div>
    </div>

    <div class="take-cash-step-btn-block personal-info">
      <a href="javascript:void(0)" class="cancel">取消</a>
      <a href="javascript:void(0)" class="next" id="step-third-btn">綁定</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PersonalEdit'
}
</script>

<style scoped></style>
