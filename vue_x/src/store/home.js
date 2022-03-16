export default {
    namespaced: true, // 增加命名空间
    state: {
        homeCount: 222,
        homeName: "Home"
    },
    getters: {
        allCount: function (state, getter, rootState) {
            return state.homeCount + rootState.muCount
        }
    },
    mutations: {
        increment (state, payload) {
            state.homeCount += payload
        }
    },
    actions: {
        incrementAction ({ commit }, payload) {
            commit("increment", payload)
        }
    }
}