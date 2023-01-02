import { getStreamSetting, getStreamNews } from '../mock/stream'

export default () => ({
  // 直播設定
  getStreamSetting,
  // getStreamSetting: data =>
  //   axios({
  //     url: '/api/Stream/GetStreamSetting',
  //     method: 'POST',
  //     data
  //   }),
  // 直播頁推薦文章
  getStreamNews
  // getStreamNews: () =>
  //   axios({
  //     url: '/api/Stream/GetRecommendNews',
  //     method: 'POST'
  //   })
})
