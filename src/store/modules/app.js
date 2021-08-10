import { getCoinStoreGroup } from '@/apis/user'

const state = {
  // 裝置寬度
  deviceWidth: 1024,
  // 滾動距離底部距離
  scrollBottom: 110,
  // 交易所清單 coin store group list
  csgList: [],
  csgMap: {},
  globalLoading: false
}

const mutations = {
  SET_DEVICE_WIDTH(state, width) {
    state.deviceWidth = width
  },
  SET_SCROLL_BOTTOM(state, distance) {
    state.scrollBottom = distance
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

const getters = {
  widthSize: state => {
    if (state.deviceWidth < 500) return 'S' // 320
    if (state.deviceWidth < 700) return 'M' // 540
    if (state.deviceWidth < 960) return 'L' // 768
    if (state.deviceWidth < 1370) return 'XL' // 1024
    if (state.deviceWidth < 1800) return 'XXL' // 1440
    return 'MAX'
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
  getters,
  mutations,
  actions
}
