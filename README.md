# fdb-web

## [demo 網址](https://livepower0815.github.io/fdb-web/dist/)

裝置寬度共六個版型 1920 1440 1024 768 540 320
CSS sample
/*1024*/
@media screen and (min-width: 1000px) and (max-width: 1346px) {}
/*768*/
@media screen and (min-width: 750px) and (max-width: 999px) {}
/*540*/
@media screen and (min-width: 500px) and (max-width: 749px) {}
/*320*/
@media screen and (min-width: 300px) and (max-width: 499px) {}

### 測試帳號
帳號：markweiwebdesign@gmail.com
密碼：a135246

## TODO List
- 綁定交易所狀態清單 API 串接
- 可以先用 服務與隱私條款 頁面
### 後端及業主回報區
已回報
- 手機版請同步個人資訊的察看及編輯模式
- 登出登入手機版
- 編輯使用著資料ＡＰＩ少兩個 key newPassword: '',doubleCheck: ''
- API 註冊那邊區碼叫 areaCore 編輯叫 areaCode 看要不要統一

待回報
- 流程: 建議登入後到首頁不要到 dashboard
- UI: 如果沒有好友邀請碼 直接不顯示嗎？
- 基本個人資料改密碼一定要輸入嗎？ 跟使用著資訊綁在一起編輯很奇怪
- 後端：重置密碼及設定新密碼ＡＰＩ文件一堆 core...