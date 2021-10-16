<template>
  <div class="disclaimer">
    <div class="banner">
      <div class="banner-title">{{ $t('disclaimer') }}</div>
    </div>
    <div class="body">
      <div class="content-title">風險聲明</div>
      <div>
        請注意，持有、買賣及/或交易數位貨幣的行為，可能具有高度風險，而且會涉及高度波動性，並非所有的投資者都適合從事持有、買賣或交易數位貨幣的行為。本風險揭露聲明(下稱「本聲明」)僅能簡要說明所可能涉及的部分風險事項，無法窮盡列舉所有在持有、買賣或交易數位貨幣的過程中所會涉及的所有風險及各種相關面向。建議您在持有或交易數位貨幣之前，必須考慮各種相關因素，包含但不限於個人投資目標、投資經驗及風險承受能力等。
      </div>
      <div style="margin-bottom: 5vw;">
        本網站內容可能無法隨時提供當時最正確、完整或最新之資訊，也可能會有若干包括技術失準或其他錯誤。建議您應自行核實，作為您判斷依據之所有訊息，且您根據本網站所載資訊作出的所有決策，均由您自行負責。您在此確認並同意，FUNDOBIT對您所作出的任何決策、本網站上所載的任何信息、內容或服務、任何第三方之資料或任何第三方網站上所載的任何信息、內容或服務，概不負責。
      </div>
      <div class="content-info">
        在投資數位貨幣或以其他方式使用本網站的服務之前，您至少必須注意以下風險：
      </div>
      <div class="content-subtitle">
        1. 市場風險
      </div>
      <div class="content-info">
        請注意，基於市場風險的原因，可能會讓您在數位貨幣上的投資歸零。有時一個或多個數位貨幣的市場價格可能會出現大幅度的上下波動。特定數位貨幣是否會喪失全部或幾近全部的價值，是無法預知的。您在購買、販售、取得、交易或持有數位貨幣時，都必須保持高度謹慎態度。
      </div>
      <div class="content-subtitle">
        2. 流動性與交易風險
      </div>
      <div class="content-info">
        請注意，數位貨幣的市場流動性可能存有很大的差異。
        如果市場交易量稀少，則其波動率可能會增大。現有的數位貨幣交易市場未來可能會繼續存在，也可能停止經營不復存在。另請注意，數位貨幣的價值是波動的，而且其性質上容易發生波動。您有責任對您個人條件情形仔細審視，以避免造成您在數位貨幣上的投資潛在損失。
      </div>
      <div class="content-subtitle">
        3. 法律風險
      </div>
      <div class="content-info">
        在你居住地的管轄法律下，數位貨幣的法律地位可能是不確定的。
        您有責任自行諮詢顧問，以了解持有、投資或交易數位貨幣的法律地位和稅務待遇，並且，對於遵守任何及所有相關法律和稅務要求一事，您應自行負擔全部責任。
      </div>
      <div class="content-subtitle">
        4. 交易對手風險
      </div>
      <div class="content-info">
        將數位貨幣儲存於任何第三方交由其基於保管一事，可能會產生部分風險，包括但不限於安全漏洞、契約違約風險及損失風險。
      </div>
      <div class="content-subtitle">
        5. 網路安全風險
      </div>
      <div class="content-info">
        所有資訊技術系統、個人電腦、行動電話或網站，都可能會基於惡意駭客、病毒、特洛伊木馬、電腦代碼或其他方式，而被入侵或遭未經授權進入。雖本網站會盡力以合理的方式控制風險，但無法保證可以完全減免風險。此外，本網站無法控制您訪問我們網站所使用的電腦、行動電話或終端機的安全性，您對於確保上述電腦、行動電話或終端機應隨時處於安全狀態一事，應自行負擔全部責任。
      </div>
      <div class="red-text">
        本聲明中未定義的詞語，其意義應與本網站使用條款中所具備的意義相同。
      </div>
      <div class="content-bottom"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Disclaimer'
}
</script>

<style lang="scss" scoped>
.disclaimer {
  .banner {
    position: relative;
    height: 30vw;
    background-image: url('../../assets/img/common/policy.png');
    background-size: cover;
    &-title {
      position: absolute;
      top: 35%;
      left: 12%;
      font-size: 80px;
      font-weight: bold;
      color: #ffffff;
      letter-spacing: 0.1em;
    }
  }
  .body {
    padding: 3vw 5vw;
    color: #e5e5e5;
    font-size: 20px;
    line-height: 32px;
    letter-spacing: 0.05em;
    .content-title {
      font-weight: bold;
      font-size: 28px;
      margin-bottom: 20px;
      color: #ffffff;
    }
    .content-subtitle {
      font-weight: bold;
      color: #ffffff;
      line-height: 42px;
    }
    .content-info {
      margin-bottom: 2vw;
    }
    .red-text {
      color: #ca3d57;
    }
    .content-bottom {
      height: 30vw;
    }
  }
}

/*1024*/
@media screen and (min-width: 1000px) and (max-width: 1346px) {
  .disclaimer {
    .banner {
      &-title {
        top: 30%;
      }
    }
  }
}
/*768*/
@media screen and (min-width: 750px) and (max-width: 999px) {
  .disclaimer {
    .banner {
      &-title {
        top: 32%;
        left: 10%;
        font-size: 50px;
      }
    }
    .body {
      .content-info {
        margin-bottom: 5vw;
      }
    }
  }
}
/*540*/
@media screen and (min-width: 500px) and (max-width: 749px) {
  .disclaimer {
    .banner {
      height: 80vw;
      background-position: 58%;
      margin-bottom: 4vw;
      &-title {
        font-size: 60px;
      }
    }
    .body {
      .content-info {
        margin-bottom: 5vw;
      }
    }
  }
}
/*320*/
@media screen and (min-width: 300px) and (max-width: 499px) {
  .disclaimer {
    .banner {
      height: 80vw;
      background-position: 58%;
      margin-bottom: 4vw;
      &-title {
        font-size: 38px;
        top: 40%;
        left: 10%;
      }
    }
    .body {
      .content-info {
        margin-bottom: 5vw;
      }
    }
    .body {
      font-size: 18px;
      .content-title {
        font-size: 24px;
      }
      .content-info {
        margin-bottom: 10vw;
      }
    }
  }
}
</style>
