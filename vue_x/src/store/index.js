import { createStore } from "vuex"
import { INCREMENT_N } from "./mutationType.js"
const store = createStore({
    state () {
        return {
            count: 100,
            name: "dang",
            age: 19,
            sex: "男",
            muCount: 111,
            books: [
                {
                    name: "vue", price: 100
                },
                {
                    name: "js", price: 200
                },
                {
                    name: "react", price: 300
                },
            ],

        }
    },
    getters: {
        maxPrice: (state) => {
            return state.books.filter(item => item.price > 200)
        },
        allPrice: (state, getters) => {
            return (desCount) => getters.maxPrice[0].price - desCount
        }
    },
    mutations: {
        setCount: function (state) {
            state.count += 100
        },
        increment: function (state, payload = 10) {
            state.muCount += payload
        },
        [INCREMENT_N] (state, payload = 10) {
            state.muCount += payload
        },
        decrement: function (state, payload) {
            state.muCount -= payload
        }
    }
})

export { store }