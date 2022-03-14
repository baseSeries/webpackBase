<template>
  <div>
    About
    <h2>{{count}}</h2>
    <button @click="count--">--</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
name = 'About'
let count = ref(0)
</script>

<style lang="scss" scoped>
</style>