export default {
    namespaced: true, // 增加命名空间
    state: () => {
        return {
            aboutCount: 333,
            aboutName: "About"
        }
    },
    mutations: {
        increment (state, payload) {
            state.aboutCount += payload
        }
    },
    actions: {
        incrementAction ({ commit }, payload) {
            commit("increment", payload)
        }
    }
}