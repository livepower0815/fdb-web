# fdb-web

## [demo 網址](https://livepower0815.github.io/fdb-web/dist/)

裝置寬度共六個版型 1920 1440 1024 768 540 320
CSS sample
/*1024*/
@media screen and (max-width: 1370px) {}
/*768*/
@media screen and (max-width: 960px) {}
/*540*/
@media screen and (max-width: 700px) {}
/*320*/
@media screen and (max-width: 500px) {}

### 測試帳號
帳號： markweiwebdesign@gmail.com
密碼： a135246

## TODO List
- 交易明細 篩選 排序 UX
- 個人資訊-推薦人管理 RWD
- 交易明細 手機版
- footer ＲＷＤ
- 聯絡我們的右下角固定 icon 實作
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
- 手機版依照RWD 320 電腦版依照 1440 後端ＡＰＩ需要兩張比例的圖檔
- 首頁返多寶可以幫你 ＲＷＤ手機版沒有開始使用箭頭
- 個人頁的 banner 圖再提供
- 推薦人群組 管理群組固定十個欄位設定 (顏色可重複)
- 新增組別判斷最前面第一個的空欄位去做新增
- 佣金明細補上空資料顯示
- 聯絡我們的右下角固定 icon 實作
- 添加手機區碼

7/29
- 異動紀錄的異動數量要有正負值
- 列表篩選實作方式(預設為全選)，手機版要怎麼呈現(使用下拉select)，全部都是單選包含推薦人。
- 列表排序實作方式(第一次點擊正序，第二次反序)，icon(在 Figma Guideline 裡面)
- 所有列表預設排序是 交易日期 正序，但出金申請紀錄排序是用 申請出金日期 做為預設。
- 個人資訊-推薦人管理 排序篩選沒有ＲＷＤ畫面 (依照交易明細樣式)
- 會員名稱可篩選(使用畫面上的input，不是用漏斗)
- 推薦人管理有需要選擇交易所嗎(需要但先寫死一間就好)
- 交易幣別的icon再麻煩學妹整理標準版的放在 Figma Guideline 裡面(記得連背景那個小正方形一起喔，看要不要連active的樣式也給同步一份)
- 出金申請需要驗證，如果都不能選擇幣別要提示使用者。
- 邀請連結需要到註冊頁面並綁上邀請碼
- 文章內容ＲＷＤ需要討論