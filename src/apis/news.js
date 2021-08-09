import request from '@/utils/request'

// 取得最新消息列表
export const getNews = data =>
  request({
    url: '/api/News/GetNews',
    method: 'POST',
    data
  })

// 取得置頂文章
export const getTopNews = () =>
  request({
    url: '/api/News/GetTopNews',
    method: 'GET'
  })

// 取的文章詳細資訊
export const getNewsDetail = data =>
  request({
    url: '/api/News/GetNewsDetail',
    method: 'POST',
    data
  })
