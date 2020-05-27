import Vue from 'vue'
import VueX from 'vuex'
import { state, getters, mutations, actions } from './modules'

Vue.use(VueX)

export default new VueX.Store({
	strict: true,
    state: {
        ...state
    },
    getters: {
        ...getters
    },
    mutations: {
        ...mutations
    },
    actions: {
        ...actions
    },
})
