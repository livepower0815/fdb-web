import { login, getUserInfo, getBindCoinStores } from '@/apis/user'
import { getToken, setToken, removeToken } from '@/utils/auth'

const state = {
  token: getToken() || '',
  userInfo: {},
  bindStores: []
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
  },
  SET_BIND_STORES(state, stores) {
    state.bindStores = stores
  }
}

const actions = {
  // user login
  async login({ commit }, loginData) {
    const { account, password, captchaCode } = loginData
    try {
      const res = await login({ account, password, captchaCode })
      const token = res.data
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
  },
  // 取得已綁定交易所清單(需登入)
  async getBindStores({ commit }) {
    try {
      const res = await getBindCoinStores()
      commit('SET_BIND_STORES', res.data)
      return res.data
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
