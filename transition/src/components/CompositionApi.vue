<template>
  <div>
    <button @click="changeLocation"> changeProvide</button>
    <h4>{{titile2.age}}</h4>
    <h4>{{content}}</h4>
    CompositionApi
    <button @click="change">change</button>
    <button @click="changeDel">del</button>
    <h3>{{value}}</h3>
    <h3>{{dbVal}}</h3>
    <h3>{{thr}}</h3>
    <h3>age:{{age}}</h3>

    <!-- hook -->
    <h3>hook</h3>
    <button @click="add">++</button>
    <button @click="del">--</button>
    <h4>{{counter}}</h4>
    <h4>{{dbCounter}}</h4>
  </div>
</template>

<script setup>
import {
  computed,
  ref,
  reactive,
  toRefs,
  watch,
  watchEffect,
  inject,
} from 'vue'
import UseCounter from '../hook/UseCounter'
let { counter, dbCounter, add, del } = UseCounter()
console.log(counter, add)
let titile2 = inject('title')
let content = inject('content', 'body1')
const changeLocation = inject('changeLocation')
let value = ref(1)
let value2 = ref(2)
let state = reactive({
  age: 15,
  name: 'dang',
  sex: 'man',
})
let { age } = toRefs(state)
let dbVal = computed(() => value.value * 2)
let thr = computed({
  get: function () {
    return value.value * 3
  },
  set: function () {
    value.value -= 1
    if (value.value <= 0) {
      value.value = 0
    }
  },
})
watchEffect(() => {
  thr.value
  console.log('object')
})
watch(
  () => dbVal.value,
  (val) => {
    state.age = val + 1
  }
)
// watch([() => state.age, value2.value], ([new1, new2], [old1, old2]) => {
//   console.log(new1, new2)
//   console.log(old1, old2)
// })
const change = () => {
  value.value++
}

const changeDel = () => {
  thr.value--
}
</script>

<style lang="scss" scoped>
</style>