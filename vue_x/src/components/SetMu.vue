<template>
  <div>
    <h3>mapMutations</h3>
    <h3>{{muCount}}</h3>
    <button @click="increment(10)">++</button>
    <button @click="increment_n(10)">++</button>
    <button @click="decrement(10)">--</button>
    <hr>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { useMapState } from '../hook/index'
import { INCREMENT_N } from '../store/mutationType'
export default {
  setup() {
    let { muCount } = useMapState(['muCount'])
    // 不要结构
    let mapMutation = mapMutations(['increment', 'decrement', INCREMENT_N])
    // let mapMutation = mapMutations({
    //   increment: 'increment',
    //   decrement: 'decrement',
    // })
    return {
      muCount,
      ...mapMutation,
    }
  },
}
</script>

<style lang="scss" scoped>
</style>