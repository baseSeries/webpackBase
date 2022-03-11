<template>
  <div>
    LifeCycle
    <button @click="change">change</button>
    <h3>{{data}}</h3>
    <h3>{{message}}</h3>

    <h4>{{count}}</h4>
  </div>
</template>

<script setup>
import { onMounted, defineProps, defineEmits, ref } from 'vue'
import { UseLocalStorage } from '../hook/index.js'
import { useTransition, TransitionPresets } from '@vueuse/core'

defineProps({
  message: {
    type: String,
    default: 'aaa',
  },
})
// 生命周期可以多次定义 都会被执行
onMounted(() => {
  console.log('0')
})

let data = UseLocalStorage('info')
const change = () => {
  data.value = 'dangbobo'
}

const count = ref(0)

const output = useTransition(count, {
  duration: 3000,
  transition: TransitionPresets.easeOutExpo,
})

setTimeout(() => {
  count.value = 5000
}, 3000)
onMounted(() => {
  console.log('onMounted1')
})
</script>

<style lang="scss" scoped>
</style>