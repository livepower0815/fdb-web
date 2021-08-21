# fdb-web

## [demo 網址](https://livepower0815.github.io/fdb-web/dist/)

## CSS sample
裝置寬度共六個版型 1920 1440 1024 768 540 320

``` css
/*1024*/ 
@media screen and (max-width: 1370px) {}
/*768*/
@media screen and (max-width: 960px) {}
/*540*/
@media screen and (max-width: 700px) {}
/*320*/
@media screen and (max-width: 500px) {}
```

## 測試帳號
> 帳號： markweiwebdesign@gmail.com
> 密碼： a135246

## TODO List
- 文章需要可以另開視窗
- 出金申請 幣別未綁定改成導轉到出金地址管理的連結按鈕
## 後端及業主回報區
##### 待回報

##### 已回報


## 額外實作
##### 首頁跑馬實作及ＲＷＤ顯示邏輯
- 首頁跑馬燈變更 768以上要包含三步驟 (比例先照1440 然後三步棸貼齊 banner 下緣) - 3h
- 首頁768的首頁最新活動是滾動的 最多就三個
- 電腦版及手機版顯示比例不同，需ＡＰＩ提供雙接口 - 2h

##### 個人資訊
- 編輯畫面切換  - 1h
- 密碼驗證（未填寫不做驗證）

##### 出金地址綁定
- 編輯畫面切換   - 1h
- 編輯邏輯實作，全部送出，未填寫不驗證。

##### 推薦人管理實作方式＆設定群組ＵＩＵＸ＆ＲＷＤ實踐。
- 選擇會員的小框框作動邏輯擬定
- 編輯組別及管理組別彈窗畫面&操作邏輯制定，包含ＲＷＤ彈窗呈現方式。  - 4h
- table RWD 顯示方式差異大，每個版型的欄位都不一樣，開合樣式也有所不同。   - 6h

##### 交易明細
- 列表要顯示無資料狀態

##### 出金申請相關驗證邏輯
- 出金幣別、出金數量、下一步 disables 條件
- 無法出金情境的畫面呈現，如果都不能選擇幣別要提示使用者 - 1h

##### 登入註冊相關
- 綁定驗證碼實作 - 1h
- 註冊信箱驗證通知
- 發送重置密碼連結通知
- 邀請連結需要到註冊頁面並綁上邀請碼

##### 路由驗證
- 為綁定交易所導轉至綁定頁面，並提示訊息。  - 2h

##### 聯絡我們
- 聯絡我們的右下角固定 icon 實作，滾動至底部消失。 - 2h

##### 最新消息
- 置頂文章及文章列表顯示規則 - 1h
- 文章滾動載入機制 - 4h
- 查詢關鍵字實作

## 開會討論
#### 7/15
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

#### 7/22
- 手機版依照RWD 320 電腦版依照 1440 後端ＡＰＩ需要兩張比例的圖檔
- 首頁返多寶可以幫你 ＲＷＤ手機版沒有開始使用箭頭
- 個人頁的 banner 圖再提供
- 推薦人群組 管理群組固定十個欄位設定 (顏色可重複)
- 新增組別判斷最前面第一個的空欄位去做新增
- 佣金明細補上空資料顯示
- 聯絡我們的右下角固定 icon 實作
- 添加手機區碼

#### 7/29
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

#### 8/5
- 編輯組別下拉及篩選要有顏色顯示
- 註冊區碼下拉要加上國家名稱文字左數字右
- 最新消息手機版也要置頂，要區分線。
- 最新消息一次12筆需要滾動載入。
- 文章其他相關文章用相同tag的前10篇
- 出金申請紀錄篩選時間，只取申請時間
- 查找日期區間 60 天
- 查找日期區間上限一年。
- PM 批量更新文案

#### 8/12
- 最新消息圖片寬高比例要固定還是滿版
- 置頂拿掉描述

#### 8/19
- 首頁基底背景圖更換或移除 (拿掉不用)
- 最新消息 滾動載入機制 變更 頁籤模式
- 最新消息回上一頁 history 行為錯誤
- 文章需要可以另開視窗
- 出金申請 幣別未綁定改成導轉到出金地址管理的連結按鈕