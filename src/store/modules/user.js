import { login, getUserInfo } from '@/apis/user'
import { getToken, setToken, removeToken } from '@/utils/auth'

const state = {
  token: getToken() || '',
  userInfo: {}
}

const mutations = {
  SET_USER_INFO(state, data) {
    state.userInfo = data
  },
  SET_TOKEN(state, token) {
    state.token = token
    setToken(token)
  },
  REMOVE_TOKEN(state) {
    state.token = ''
    removeToken()
  }
}

const actions = {
  // user login
  async login({ commit }, loginData) {
    const { account, password, captchaCode } = loginData
    try {
      const res = await login({ account, password, captchaCode })
      const token = `${res.data.access_token}`
      commit('SET_TOKEN', token)
      return 'done'
    } catch (error) {
      return Promise.reject(error)
    }
  },
  // remove token
  async resetToken({ commit }) {
    try {
      commit('REMOVE_TOKEN')
      commit('SET_USER_INFO', {})
      return 'done'
    } catch (error) {
      return Promise.reject(error)
    }
  },
  // get user info
  async getUserInfo({ commit }) {
    try {
      const res = await getUserInfo()
      commit('SET_USER_INFO', res)
      return 'done'
    } catch (error) {
      return Promise.reject(error)
    }
  },
  // user logout
  async logout({ dispatch }) {
    try {
      dispatch('resetToken')
    } catch (error) {
      return Promise.reject(error)
    }
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
