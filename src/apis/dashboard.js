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

// 您的佣金異動紀錄
export const getCommissionTransaction = data =>
  request({
    url: '/api/DashBoard/GetYourPointChangeLog',
    method: 'POST',
    data
  })

// 個人反佣
export const getPersonalFeedback = data =>
  request({
    url: '/api/DashBoard/GetPersonRebatLog',
    method: 'POST',
    data
  })

// 推薦人反佣
export const getRecommender = data =>
  request({
    url: '/api/DashBoard/GetReferrerRebatLog',
    method: 'POST',
    data
  })

// 出金
export const getWithdrawal = data =>
  request({
    url: '/api/DashBoard/GetWithdrawal',
    method: 'POST',
    data
  })

// 出金申請
export const withdrawalOrder = data =>
  request({
    url: '/api/DashBoard/WithdrawalOrder',
    method: 'POST',
    data
  })
