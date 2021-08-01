import request from '@/utils/request'

// 上傳圖檔轉換 url
export const uploadFile = data =>
  request({
    url: '/api/Common/UploadFile',
    method: 'POST',
    data
  })

// 首頁資訊
export const getHomePageInfo = params =>
  request({
    url: '/api/Index/GetIndexPageInfo',
    method: 'GET',
    params
  })
