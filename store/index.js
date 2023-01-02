export const getters = {
  deviceWidth: state => state.app.deviceWidth,
  hasInfo: state => Object.keys(state.user.userInfo).length > 0,
  isGoogleAccount: state => state.user.userInfo.accountType === 'Google' // FDB 跟 Google
}

export const actions = {
  // async nuxtServerInit({ dispatch }) {
  //   try {
  //     // 取得交易所清單
  //     // await dispatch('app/getCoinStoreGroup')
  //   } catch (error) {
  //     return console.error(error)
  //   }
  // }
}
