import { getNews, getTopNews, getLastNews, getHashTagID, getNewsDetail, getNewsRecommendNews, getHashTags } from '../mock/news'

export default () => ({
  // 取得文章列表
  getNews,
  // getNews: data =>
  //   axios({
  //     url: '/api/News/GetNews',
  //     method: 'POST',
  //     data
  //   }),
  // 取得置頂文章
  getTopNews,
  // getTopNews: params =>
  //   axios({
  //     url: '/api/News/GetTopNews',
  //     method: 'GET',
  //     params
  //   }),
  // 取得最新文章
  getLastNews,
  // getLastNews: params =>
  //   axios({
  //     url: '/api/News/GetLastNews',
  //     method: 'GET',
  //     params
  //   }),
  // 查詢TAG ID
  getHashTagID,
  // getHashTagID: params =>
  //   axios({
  //     url: '/api/News/GetHashTagID',
  //     method: 'GET',
  //     params
  //   }),
  // 取的文章詳細資訊
  getNewsDetail,
  // getNewsDetail: data =>
  //   axios({
  //     url: '/api/News/GetNewsDetail',
  //     method: 'POST',
  //     data
  //   }),
  // 挖掘更多你想看的文章
  getHashTags,
  // getHashTags: data =>
  //   axios({
  //     url: '/api/News/GetHashTags',
  //     method: 'POST',
  //     data
  //   }),
  // 消息中心-推薦文章
  getNewsRecommendNews
  // getNewsRecommendNews: data =>
  //   axios({
  //     url: '/api/News/GetRecommendNews',
  //     method: 'POST',
  //     data
  //   })
})
