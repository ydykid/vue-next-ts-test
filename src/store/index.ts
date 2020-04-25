import { createStore } from 'vuex'

export default createStore({
    state: {
        name: ''
    },
    getters: {
        name(state) {
            return state.name
        }
    },
    mutations: {
        setName(state, name: string) {
            state.name = name
        }
    },
    actions: {},
    modules: {}
})