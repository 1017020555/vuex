import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 5
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
  actionDes({commit}, n) {
    commit('des', n)
  }
}

const getters = {
  getCount(state) {
    return (state.count)
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
