<template>
  <div>
    <h3>count:{{$store.state.count}}</h3>
    <h3>sCount:{{sCount}}</h3>
    <h3>name:{{name}}</h3>
    <h3>age:{{age}}</h3>
    <h3>sex:{{sex}}</h3>
    <button @click="add">++</button>

    <hr>
    <h3>maxName:{{maxPriceObj.name}}</h3>
    <h3>maxPrice:{{maxPriceObj.price}}</h3>

    <hr>
    <h3>--price:{{$store.getters.allPrice(20)}}</h3>
    <h3>--50price:{{allPrice}}</h3>

    <hr>
    <h3>mapGetterName:{{maxPrice[0].name}}</h3>
    <h3>mapGetterPrice:{{maxPrice[0].price}}</h3>

    <hr>

  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useMapState, useMapGetters } from '../hook/index'

let store = useStore()
let sCount = computed(() => store.state.count)
let { name, age, sex } = useMapState({
  name: (state) => state.name,
  age: (state) => state.age,
  sex: (state) => state.sex,
})

// getters
let maxPriceObj = store.getters.maxPrice[0]
let allPrice = computed(() => store.getters.allPrice(50))
// let { maxPrice } = useMapperGet('MAPGETTER', ['maxPrice'])
let { maxPrice } = useMapGetters(['maxPrice'])
const add = () => {
  store.commit('setCount')
}
</script>

<style lang="scss" scoped>
</style>