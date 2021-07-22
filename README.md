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
帳號： markweiwebdesign@gmail.com
密碼： a135246

## TODO List
- 首頁 banner ＲＷＤ & 
- footer ＲＷＤ
- 整理出金申請頁面ＲＷＤ
- 沒有綁定交易所 不要讓她到 dashboard 讓它到 綁定交易所頁面並提示 (交易所綁定驗證需要再開新的API)
### 後端及業主回報區
待回報

已回報

開會討論
- 個人基本資料 三個密碼其中一隻不為空就驗證密碼
- 註冊&編輯個人資料 前端不驗證 使用者名稱
- 出金申請 第二步拔掉 會員密碼 input
- 首頁跑馬燈變更 768以上要包含三步驟 (比例先照1440 然後三步棸貼齊 banner 下緣)
- 首頁768的首頁最新活動是滾動的 最多就三個
- 沒有綁定交易所 不要讓她到 dashboard 讓它到 綁定交易所頁面並提示 (在提供綁定交易所提示文案)
- 手機改成只驗證數字
- 交易明細要顯示無資料狀態
- 出金申請請ＵＩ提供手機版 交易所選擇 畫面 (2.3步驟不能再換交易所)
- 手機版請同步個人資訊的察看及編輯模式
- 會員出金申請手機版沒有交易所選擇區塊

7/22
- 手機版依照RWD 320 電腦版依照 1440 後端ＡＰＩ需要兩張比例的圖檔 (跟學妹要手機背景圖)
- 首頁返多寶可以幫你 ＲＷＤ手機版沒有開始使用箭頭
- 個人頁的 banner 圖再提供
- 推薦人群組 管理群組固定十個欄位設定 (顏色可重複)
- 新增組別判斷最前面第一個的空欄位去做新增
- 佣金明細補上空資料顯示
- 聯絡我們的右下角固定 icon 實作
