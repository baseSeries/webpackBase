import { createStore } from "vuex"

const store = createStore({
    state () {
        return {
            count: 100,
            name: "dang",
            age: 19,
            sex: "男",
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
            ]
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
        }
    }
})

export { store }