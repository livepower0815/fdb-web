export default axios => ({
  // 上傳圖檔轉換 url
  uploadFile: data =>
    axios({
      url: '/api/Common/UploadFile',
      method: 'POST',
      data
    }),
  // 首頁資訊
  getHomePageInfo: () =>
    axios({
      url: '/api/Index/GetIndexPageInfo',
      method: 'GET'
    }),
  // 市場脈動
  getMarketPulse: data =>
    axios({
      url: '/api/Index/GetMarketPulse',
      method: 'POST',
      data
    }),
  // 貨幣趨勢
  getCoinTrend: () =>
    axios({
      url: '/api/Index/CoinTrend',
      method: 'GET'
    }),
  // 推薦文章
  getHomeRecommendNews: () =>
    axios({
      url: '/api/Index/GetRecommendNews',
      method: 'POST'
    })
})
