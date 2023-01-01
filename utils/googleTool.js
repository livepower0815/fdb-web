// 記得網址不能用 IP ，開發階段要使用 http://localhost:3000
// 初始化
const initialize = async cb => {
  // 等到 google 可使用
  while (!window.google) {
    await new Promise(resolve => {
      window.setTimeout(() => {
        resolve()
      }, 100)
    })
  }

  // 官方按鈕模式
  window.google.accounts.id.initialize({
    client_id: '609031941340-kmrbpj2a3kne1931unv82tr6nlarncn3.apps.googleusercontent.com',
    callback: cb
  })

  // 指令式觸發
  // const client = window.google.accounts.oauth2.initTokenClient({
  //   client_id: '609031941340-kmrbpj2a3kne1931unv82tr6nlarncn3.apps.googleusercontent.com', // 小豪
  //   // client_id: '966482993492-1bmrg2e82919q68ok5cdba4065ikv8to.apps.googleusercontent.com', // Kerry test
  //   // https://developers.google.com/identity/protocols/oauth2/scopes
  //   scope: 'https://www.googleapis.com/auth/calendar.readonly',
  //   callback: cb
  // })
  // return client
}

// google locale 語系
// 中文 (台灣)	zh-TW
// 英文 (美國)	en-US
// 中文 (中華人民共和國)	zh-CN
// 日文	ja
// 韓文	ko
const langMap = {
  TW: 'zh-TW',
  EN: 'en-US',
  CN: 'zh-CN',
  JP: 'ja',
  KR: 'ko'
}

const renderButton = ({ text = 'signup_with', locale = 'EN' }) => {
  // 渲染按鈕點擊開啟 One Tap dialog
  window.google.accounts.id.renderButton(
    document.getElementById('g-login-button'),
    { theme: 'filled_blue', text, shape: 'circle', locale: langMap[locale] || 'en-US' } // customization attributes
  )
  // google text 文案
  // signup_with 註冊
  // signin_with 登入
}

export default {
  initialize,
  renderButton
}
