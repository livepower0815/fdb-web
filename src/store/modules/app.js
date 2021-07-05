const state = {
  deviceWidth: 1024
}

const mutations = {
  SET_DEVICE_WIDTH(state, width) {
    state.deviceWidth = width
  }
}

const actions = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
