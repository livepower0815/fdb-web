import request from '@/utils/request'

// 讀取 dashboard
export const getDashboardChart = data =>
  request({
    url: '/api/DashBoard/GetDashBoard',
    method: 'POST',
    data
  })

// 交易所 您的盈利
export const getExchangeInfo = data =>
  request({
    url: '/api/DashBoard/GetStoreInfo',
    method: 'POST',
    data
  })
