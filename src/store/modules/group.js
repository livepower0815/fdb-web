import { getRecGroup } from '@/apis/recommender'

const state = {
  groupList: []
}

const mutations = {
  SET_GROUP_LIST(state, list) {
    state.groupList = list
  }
}
const actions = {
  async getRecGroup({ commit }) {
    try {
      const res = await getRecGroup()
      commit('SET_GROUP_LIST', res.data)
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
