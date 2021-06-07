/* eslint-disable no-const-assign */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

// 儀錶板圖表ＡＰＩ
query = {
  currencyType: 0, // all = 0  BTC = 1 ETH= 2 XPR= 3 EOS = 4 USDT=5
  startDate: this.dateRange[0],
  endDate: this.dateRange[1],
  pageIndex: 1,
  pageSize: 10
}

response = {
  personValue: randomNumber(4),
  recommenderValue: randomNumber(4),
  withdrawValue: randomNumber(4),
  dates: [
    {
      date: '6/6',
      personValue: randomNumber(3),
      recommenderValue: randomNumber(3),
      withdrawValue: randomNumber(3)
    },
    {
      date: '6/7',
      personValue: randomNumber(3),
      recommenderValue: randomNumber(3),
      withdrawValue: randomNumber(3)
    }
  ]
}

// 交易所資訊
query = {
  exchangeId: 'XXX', // 交易所ＩＤ
  startDate: this.dateRange[0], // 日期資訊跟頁碼這隻ＡＰＩ沒有用看你需要需要
  endDate: this.dateRange[1],
  pageIndex: 1,
  pageSize: 10
}

response = {
  data: [
    {
      currencyType: 0, // BTC = 0 ETH= 1 XPR= 2 EOS = 3 USDT=4
      coinCount: randomNumber(1, 8),
      bindStatus: Math.floor(Math.random() * 2) // 0 未綁定 1 綁定
    },
    {
      currencyType: 4, // BTC = 0 ETH= 1 XPR= 2 EOS = 3 USDT=4
      coinCount: randomNumber(1, 4),
      bindStatus: Math.floor(Math.random() * 2) // 0 未綁定 1 綁定
    },
    {
      currencyType: 1, // BTC = 0 ETH= 1 XPR= 2 EOS = 3 USDT=4
      coinCount: randomNumber(1, 8),
      bindStatus: Math.floor(Math.random() * 2) // 0 未綁定 1 綁定
    },
    {
      currencyType: 2, // BTC = 0 ETH= 1 XPR= 2 EOS = 3 USDT=4
      coinCount: randomNumber(1, 8),
      bindStatus: Math.floor(Math.random() * 2) // 0 未綁定 1 綁定
    },
    {
      currencyType: 3, // BTC = 0 ETH= 1 XPR= 2 EOS = 3 USDT=4
      coinCount: randomNumber(1, 8),
      bindStatus: Math.floor(Math.random() * 2) // 0 未綁定 1 綁定
    }
  ]
}

// 您的佣金異動紀錄
query = {
  startDate: this.dateRange[0],
  endDate: this.dateRange[1],
  pageIndex: 1,
  pageSize: 10
}

response = {
  data: [
    {
      txDate: randomDate(60), // 交易日期
      currency: currencyType, // 交易幣別 BTC = 0 ETH= 1 XPR= 2 EOS = 3 USDT=4
      changeType: '推薦人', // 異動類別
      changeNum: Number(randomNumber(2, 8)), // 異動數量
      restNum: Number(randomNumber(2, 8)) // 剩餘數量
    },
    {
      txDate: randomDate(60), // 交易日期
      currency: currencyType, // 交易幣別 BTC = 0 ETH= 1 XPR= 2 EOS = 3 USDT=4
      changeType: '推薦人', // 異動類別
      changeNum: Number(randomNumber(2, 8)), // 異動數量
      restNum: Number(randomNumber(2, 8)) // 剩餘數量
    }
  ]
}

// 個人返佣資訊
query = {
  startDate: this.dateRange[0],
  endDate: this.dateRange[1],
  pageIndex: 1,
  pageSize: 10
}

response = {
  data: [
    {
      rebateStatus: Math.floor(Math.random() * 2), // 0 未反佣, 1 已反佣
      txDate: randomDate(60), // 交易日期
      currency: currencyType, // 交易幣別
      canRebatePoint: Number(randomNumber(2, 8)), // 可返佣交易量
      canRebatValue: Number(randomNumber(2, 8)) // 可返佣數量
    },
    {
      rebateStatus: Math.floor(Math.random() * 2), // 0 未反佣, 1 已反佣
      txDate: randomDate(60), // 交易日期
      currency: currencyType, // 交易幣別
      canRebatePoint: Number(randomNumber(2, 8)), // 可返佣交易量
      canRebatValue: Number(randomNumber(2, 8)) // 可返佣數量
    }
  ]
}

// 推薦人返佣資訊 (待討論)

// 出金申請紀錄
query = {
  startDate: this.dateRange[0],
  endDate: this.dateRange[1],
  pageIndex: 1,
  pageSize: 10
}

response = {
  data: [
    {
      rebatStatus: Math.floor(Math.random() * 3), // 0 申請中, 1 出金中 2 已完成  申請狀態
      orderNum: 'abcd456789', // 申請單號
      orderDate: randomDate(60), // 申請出金時間
      currency: currencyType, // 交易幣別
      orderValue: Number(randomNumber(2, 8)), // 申請數量
      finishDate: randomDate(60, 60) // 	完成出金日期
    },
    {
      rebatStatus: Math.floor(Math.random() * 3), // 0 申請中, 1 出金中 2 已完成  申請狀態
      orderNum: 'abcd456789', // 申請單號
      orderDate: randomDate(60), // 申請出金時間
      currency: currencyType, // 交易幣別
      orderValue: Number(randomNumber(2, 8)), // 申請數量
      finishDate: randomDate(60, 60) // 	完成出金日期
    }
  ]
}
