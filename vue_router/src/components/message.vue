<template>
  <div>
    message
    <h2>{{count}}</h2>
    <button @click="count--">--</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
name = 'message'
let count = ref(0)
</script>

<style lang="scss" scoped>
</style>