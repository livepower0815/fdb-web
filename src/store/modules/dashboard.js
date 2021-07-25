import { getExchangeInfo } from '@/apis/dashboard.js'

const state = {
  storeList: []
}

const mutations = {
  SET_STORE_LIST(state, list) {
    state.storeList = list
  }
}

const actions = {
  // 取得交易所幣種存量
  async getExchangeInfo({ commit }) {
    try {
      const queryData = {
        // exchangeId: '', // 目前寫死不傳
        currencyType: 0,
        startDate: '',
        endDate: '',
        pageIndex: 0,
        pageSize: 0,
        sortKey: '',
        order: ''
      }
      const res = await getExchangeInfo(queryData)
      commit('SET_STORE_LIST', res)
      return res
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
