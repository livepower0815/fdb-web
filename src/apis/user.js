import request from '@/utils/request'

// 會員登入
export const login = data =>
  request({
    url: '/api/User/Login',
    method: 'POST',
    data
  })

// 會員註冊
export const register = data =>
  request({
    url: '/api/User/Register',
    method: 'POST',
    data
  })

// 取得使用者資訊
export const getUserInfo = () =>
  request({
    url: '/api/User/GetUsers',
    method: 'GET'
  })

// 取得圖形驗證碼
export const getCaptchaImage = () =>
  request({
    url: '/api/User/GetCaptchaImage',
    method: 'GET'
  })

// 編輯基本個人資料
export const updateUserData = data =>
  request({
    url: '/api/User/UpdateUserData',
    method: 'POST',
    data
  })
