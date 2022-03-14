<template>
  <div>
    <h2>user</h2>
    <p>{{$route.params.username}}</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
let route = useRoute()
console.log(route, 'route')
</script>

<style   scoped>
</style>