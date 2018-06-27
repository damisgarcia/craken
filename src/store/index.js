import Vue from 'vue'
import Vuex from 'vuex'

import { state, actions, mutations, getters } from './todos'

Vue.use(Vuex)

export default new Vuex.Store({
    state,
    actions,
    mutations,
    getters
})
