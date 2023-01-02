import {
  logout,
  login,
  register,
  googleRegister,
  getCaptchaImage,
  bindCoinStoreData,
  withdrawalDataUpdate,
  validWithdrawalData,
  getUserInfo,
  reSendCheckMail,
  updateUserData,
  getCoinStoreGroup,
  setNewPassword,
  resetPassword,
  getBindCoinStores,
  getAllWithdrawalAddress,
  googleLogin
} from '../mock/user'

export default () => ({
  // 會員登入
  login,
  // login: data =>
  //   axios({
  //     url: '/api/User/Login',
  //     method: 'POST',
  //     data
  //   }),
  // Google 會員登入
  googleLogin,
  // googleLogin: data =>
  //   axios({
  //     url: '/api/User/GoogleLogin',
  //     method: 'POST',
  //     data
  //   }),
  // 會員登出
  logout,
  // logout: () =>
  //   axios({
  //     url: '/api/User/Logout',
  //     method: 'POST'
  //   }),
  // 補發驗證信
  reSendCheckMail,
  // reSendCheckMail: data =>
  //   axios({
  //     url: '/api/User/ReSendCheckMail',
  //     method: 'POST',
  //     data
  //   }),
  // 會員註冊
  register,
  // register: data =>
  //   axios({
  //     url: '/api/User/Register',
  //     method: 'POST',
  //     data
  //   }),
  // Google 會員註冊
  googleRegister,
  // googleRegister: data =>
  //   axios({
  //     url: '/api/User/GoogleRegister',
  //     method: 'POST',
  //     data
  //   }),
  // 取得使用者資訊
  getUserInfo,
  // getUserInfo: () =>
  //   axios({
  //     url: '/api/User/GetUsers',
  //     method: 'GET'
  //   }),
  // 取得圖形驗證碼
  getCaptchaImage,
  // getCaptchaImage: () =>
  //   axios({
  //     url: '/api/User/GetCaptchaImage',
  //     method: 'GET'
  //   }),
  // 編輯基本個人資料
  updateUserData,
  // updateUserData: data =>
  //   axios({
  //     url: '/api/User/UpdateUserData',
  //     method: 'POST',
  //     data
  //   }),
  // 重置密碼
  resetPassword,
  // resetPassword: data =>
  //   axios({
  //     url: '/api/User/ForgetPassword',
  //     method: 'POST',
  //     data
  //   }),
  // 設定新密碼
  setNewPassword,
  // setNewPassword: data =>
  //   axios({
  //     url: '/api/User/SetNewPassword',
  //     method: 'POST',
  //     data
  //   }),
  // 取得交易所清單-不需登入
  getCoinStoreGroup,
  // getCoinStoreGroup: () =>
  //   axios({
  //     url: '/api/User/GetFDB_CoinStoreGroup',
  //     method: 'GET'
  //   }),
  // 綁定交易所資訊
  bindCoinStoreData,
  // bindCoinStoreData: data =>
  //   axios({
  //     url: '/api/User/BindCoinStoreData',
  //     method: 'POST',
  //     data
  //   }),
  // 取得已綁定交易所清單(需登入)
  getBindCoinStores,
  // getBindCoinStores: () =>
  //   axios({
  //     url: '/api/User/GetCoinStores',
  //     method: 'GET'
  //   }),
  // 取得出金地址資訊
  getAllWithdrawalAddress,
  // getAllWithdrawalAddress: () =>
  //   axios({
  //     url: '/api/User/GetAllWithdrawalAddressData',
  //     method: 'GET'
  //   }),
  // 更新出金地址資訊-發驗證信
  withdrawalDataUpdate,
  // withdrawalDataUpdate: data =>
  //   axios({
  //     url: '/api/User/WithdrawalDataUpdate',
  //     method: 'POST',
  //     data
  //   }),
  // 驗證並且更新出金地址資訊
  validWithdrawalData
  // validWithdrawalData: data =>
  //   axios({
  //     url: '/api/User/ValidWithdrawalData',
  //     method: 'POST',
  //     data
  //   })
})
