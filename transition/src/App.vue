<template>
  <div>
    <!--   <hello-world /> -->
    <!--自定义ref -->
    <!-- <custom-ref></custom-ref> -->

    <!-- <CompositionApi></CompositionApi> -->
    <!-- <lifeCycle></lifeCycle> -->
    <!-- <ReactJsx></ReactJsx> -->
    <Directive></Directive>
  </div>

</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import CustomRef from './components/customRef.vue'
import CompositionApi from './components/CompositionApi.vue'
import LifeCycle from './components/lifeCycle.vue'
import ReactJsx from './components/reactJsx.vue'
import Directive from './components/directive.vue'
import { provide, reactive, readonly } from 'vue'
export default {
  name: 'App',

  components: {
    HelloWorld,
    CustomRef,
    CompositionApi,
    LifeCycle,
    ReactJsx,
    Directive,
  },
  setup() {
    let user = reactive({ age: 18 })
    const changeLocation = () => {
      user.age += 1
    }
    provide('title', readonly(user))
    provide('content', 'body')
    provide('changeLocation', changeLocation)
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
