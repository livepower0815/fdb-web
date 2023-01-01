export default axios => ({
  // 直播設定
  getStreamSetting: data =>
    axios({
      url: '/api/Stream/GetStreamSetting',
      method: 'POST',
      data
    }),
  // 直播頁推薦文章
  getStreamNews: () =>
    axios({
      url: '/api/Stream/GetRecommendNews',
      method: 'POST'
    })
})
