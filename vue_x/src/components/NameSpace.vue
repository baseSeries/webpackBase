<template>
  <div>
    module

    <h3>Root:{{muCount}}</h3>
    <h3>Home:{{homeCount}}</h3>
    <h3>allCount:{{allCount}}</h3>
    <h3>About:{{aboutCount}}</h3>
    <button @click="homeCommit">homeCommit</button>
    <button @click="increment(10)">homeMu</button>
    <button @click="handlerAction">homeAc</button>
    <button @click="handlerDisAction(100)">homeDisAc</button>
    <hr>
  </div>
</template>

 
<script >
import { useMapState, useMapGetters } from '../hook/index'
import { useStore, mapMutations, mapActions } from 'vuex'
export default {
  setup() {
    const store = useStore()
    let { muCount } = useMapState(['muCount'])
    let { homeCount } = useMapState('home', ['homeCount'])
    let { aboutCount } = useMapState('about', ['aboutCount'])
    let { allCount } = useMapGetters('home', ['allCount'])
    const mapMutation = mapMutations('home', ['increment'])
    const mapAction = mapActions('home', {
      handlerDisAction: 'incrementAction',
    })
    const homeCommit = () => {
      store.commit('home/increment', 100)
    }
    const handlerAction = () => {
      store.dispatch('home/incrementAction', 100)
    }
    return {
      muCount,
      homeCount,
      aboutCount,
      allCount,
      ...mapMutation,
      ...mapAction,
      homeCommit,
      handlerAction,
    }
  },
}
</script>

<style lang="scss" scoped>
</style>