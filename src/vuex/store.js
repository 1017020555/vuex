import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 0
}

const mutations = {
  add (state, n) {
    return (state.count += n)
  },
  des (state, n) {
    return (state.count -= n)
  }
}

export default new Vuex.Store({
  state,
  mutations
})
