<template>
  <div>
    <h4>useCustomRef</h4>
    <input type="text"
           @input="inputValue"
           v-model="value">
    <h4>{{value}}</h4>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import UseCustomRef from '../hook/UseCustomRef'
let value = UseCustomRef('')
const inputValue = () => {}
</script>

<style lang="scss" scoped>
</style>