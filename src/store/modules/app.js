import { getCoinStoreGroup } from '@/apis/user'

const state = {
  deviceWidth: 1024,
  // 交易所清單 coin store group list
  csgList: [],
  csgMap: {},
  globalLoading: false
}

const mutations = {
  SET_DEVICE_WIDTH(state, width) {
    state.deviceWidth = width
  },
  SET_CSG_LIST(state, list) {
    state.csgList = list
    state.csgMap = list.reduce((obj, csg) => {
      obj[csg.csgid] = csg
      return obj
    }, {})
  },
  SET_G_LOADING(state, status) {
    state.globalLoading = status
  }
}

const actions = {
  // 取得交易所清單
  async getCoinStoreGroup({ commit }) {
    try {
      const res = await getCoinStoreGroup()
      commit('SET_CSG_LIST', res.data)
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
