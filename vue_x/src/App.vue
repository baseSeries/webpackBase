<template>
  <div>
    <NameSpace></NameSpace>
    <SetMu></SetMu>
    <HelloWorld />
  </div>

</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import SetMu from './components/SetMu.vue'
import NameSpace from './components/NameSpace.vue'
export default {
  name: 'App',
  components: {
    HelloWorld,
    SetMu,
    NameSpace,
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
