import { getHomePageInfo, getMarketPulse, getCoinTrend, getHomeRecommendNews } from '../mock/common'

export default () => ({
  // 上傳圖檔轉換 url
  uploadFile: async () => {
    return Promise.reject('error')
  },
  // uploadFile: data =>
  //   axios({
  //     url: '/api/Common/UploadFile',
  //     method: 'POST',
  //     data
  //   }),
  // 首頁資訊
  getHomePageInfo,
  // getHomePageInfo: () =>
  //   axios({
  //     url: '/api/Index/GetIndexPageInfo',
  //     method: 'GET'
  //   }),
  // 市場脈動
  getMarketPulse,
  // getMarketPulse: data =>
  //   axios({
  //     url: '/api/Index/GetMarketPulse',
  //     method: 'POST',
  //     data
  //   }),
  // 貨幣趨勢
  getCoinTrend,
  // getCoinTrend: () =>
  //   axios({
  //     url: '/api/Index/CoinTrend',
  //     method: 'GET'
  //   }),
  // 推薦文章
  getHomeRecommendNews
  // getHomeRecommendNews: () =>
  //   axios({
  //     url: '/api/Index/GetRecommendNews',
  //     method: 'POST'
  //   })
})
