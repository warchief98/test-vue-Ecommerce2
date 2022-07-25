import { createStore } from 'vuex'


export const store = createStore({
    state: {
        isLogin: false,
        allBuy: []
    },
    getters: {},
    mutations: {
        changeIsLogin(state, payload) {
            state.isLogin = payload
        },
        addToAllBuy(state, payload) {
            state.allBuy = payload
        }
    },
    actions: {},
    modules: {}
})