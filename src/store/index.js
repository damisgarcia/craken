import Vue from 'vue'
import Vuex from 'vuex'

import todos from './todos'
import address from './address'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        todos,
        address
    }
})
