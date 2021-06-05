import moment from 'moment'

// 生產隨機數字
export const randomNumber = (int = 1, dec = 0) => {
  const numAry = []
  for (let step = 0; step < int; step++) {
    if (int > 1 && step === int - 1) {
      numAry.push(Math.floor(Math.random() * 9) + 1 + '')
    } else {
      numAry.push(Math.floor(Math.random() * 10) + '')
    }
  }
  if (dec > 0) {
    numAry.push('.')
    for (let step = 0; step < dec; step++) {
      numAry.push(Math.floor(Math.random() * 10) + '')
    }
  }
  return numAry.join('')
}

// 產生隨機日期 預設隨機七天相對於今日前
export const randomDate = (rangeDaysByNow = 7, format = 'yyyy-MM-DD HH:mm') => {
  const randomDay = Math.floor(Math.random() * rangeDaysByNow) + 1
  return moment()
    .subtract(randomDay, 'days')
    .format(format)
}

// 隨機產生幣別
const cMap = ['BTC', 'USDT', 'ETH', 'XRP', 'EOS']
export const randomCurrency = () => {
  const randomDay = Math.floor(Math.random() * 5)
  return cMap[randomDay]
}
