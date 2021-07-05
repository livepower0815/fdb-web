// import { login, logout, getInfo } from '@/api/user'
// import { getToken, setToken, removeToken } from '@/utils/auth'

const state = {
  // token: getToken() || '',
  userInfo: {}
}

const mutations = {
  SET_USER_INFO(state, data) {
    state.userInfo = data
  }
}

const actions = {
  // user login
  // login({ commit, dispatch }, userInfo) {
  //   const { username, password } = userInfo
  //   return new Promise((resolve, reject) => {
  //     login({ username: username.trim(), password })
  //       .then(response => {
  //         const token = `${response.data.access_token}`
  //         commit('SET_TOKEN', token)
  //         setToken(token)
  //         resolve()
  //       })
  //       .catch(error => {
  //         reject(error)
  //       })
  //   })
  // },
  // get user info
  // getInfo({ commit, state }, token) {
  //   return new Promise((resolve, reject) => {
  //     getInfo({ access_token: token })
  //       .then(response => {
  //         commit('SET_USER_INFO', response.data)
  //         resolve()
  //       })
  //       .catch(error => {
  //         reject(error)
  //       })
  //   })
  // },
  // user logout
  // logout({ commit, state, dispatch }) {
  //   return new Promise((resolve, reject) => {
  //     logout(state.token)
  //       .then(() => {
  //         commit('SET_TOKEN', '')
  //         dispatch('chat/resetChat')
  //         removeToken()
  //         resetRouter()
  //         commit('permission/RESET_ROUTERS', {}, { root: true })
  //         resolve()
  //       })
  //       .catch(error => {
  //         reject(error)
  //       })
  //   })
  // },
  // remove token
  // resetToken({ commit, dispatch }) {
  //   return new Promise(resolve => {
  //     commit('SET_TOKEN', '')
  //     commit('SET_USER_INFO', {})
  //     removeToken()
  //     resetRouter()
  //     commit('permission/RESET_ROUTERS', {}, { root: true })
  //     resolve()
  //   })
  // }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
