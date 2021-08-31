import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 0
}

const mutations = {
  add(state, n) {
    return (state.count += n)
  },
  des(state, n) {
    return (state.count -= n)
  }
}

const actions = {
  actionAdd(context, n) {
    return context.commit('add', n)
  },
  actionDes({commit},n) {
    commit('des', n)
  }
}
export default new Vuex.Store({
  state,
  mutations,
  actions
})
