<template>
  <div>
    <hello-world />
    <custom-ref></custom-ref>
  </div>

</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import CustomRef from './components/customRef.vue'
export default {
  name: 'App',
  components: {
    HelloWorld,
    CustomRef,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
