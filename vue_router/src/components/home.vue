<template>
  <div>
    <p class="p1">Home</p>
    <p class="p2">Home</p>
    <h2>{{count}}</h2>
    <button @click="count++">++</button>
    <router-view></router-view>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
name = 'Home'
let count = ref(0)
onMounted(() => {
  console.log('object')
})
</script>

<style   scoped>
.p1 {
  -webkit-text-size-adjust: none;
  font-size: 6px;
  transform: scale(0.6);
}
.p2 {
  font-size: 12px;
}
</style>