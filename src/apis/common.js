import request from '@/utils/request'

// 上傳圖檔轉換 url
export const uploadFile = data =>
  request({
    url: '/api/Common/UploadFile',
    method: 'POST',
    data
  })
