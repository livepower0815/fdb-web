const getters = {
  deviceWidth: state => state.app.deviceWidth,
  token: state => state.user.token,
  hasInfo: state => Object.keys(state.user.userInfo).length > 0
}
export default getters
