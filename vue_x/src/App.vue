<template>
  <div>
    <SetMu></SetMu>
    <HelloWorld />

  </div>

</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import SetMu from './components/SetMu.vue'
export default {
  name: 'App',
  components: {
    HelloWorld,
    SetMu,
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
