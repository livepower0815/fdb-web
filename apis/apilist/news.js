export default axios => ({
  // 取得文章列表
  getNews: data =>
    axios({
      url: '/api/News/GetNews',
      method: 'POST',
      data
    }),
  // 取得置頂文章
  getTopNews: params =>
    axios({
      url: '/api/News/GetTopNews',
      method: 'GET',
      params
    }),
  // 取得最新文章
  getLastNews: params =>
    axios({
      url: '/api/News/GetLastNews',
      method: 'GET',
      params
    }),
  // 查詢TAG ID
  getHashTagID: params =>
    axios({
      url: '/api/News/GetHashTagID',
      method: 'GET',
      params
    }),
  // 取的文章詳細資訊
  getNewsDetail: data =>
    axios({
      url: '/api/News/GetNewsDetail',
      method: 'POST',
      data
    }),
  // 挖掘更多你想看的文章
  getHashTags: data =>
    axios({
      url: '/api/News/GetHashTags',
      method: 'POST',
      data
    }),
  // 消息中心-推薦文章
  getNewsRecommendNews: data =>
    axios({
      url: '/api/News/GetRecommendNews',
      method: 'POST',
      data
    })
})
