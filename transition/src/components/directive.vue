<template>
  <div>
    党党 自定义指令--自动获取焦点
    <input type="text"
           v-focus.aaa.bbb="count">

    <div>time format :
      <h3 v-format-time="'YYYY-MM-DD'">1647074408616</h3>
    </div>

    <div>use Obj
      <h3>{{name}}</h3>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, ref, getCurrentInstance, onMounted } from 'vue'

export default {
  directives: {
    focus: {
      mounted(el, bindings, vnode, pvnode) {
        el.focus()
      },
    },
  },
  setup() {
    const state = reactive({
      count: 0,
      name: '',
    })
    onMounted(() => {
      let currentInstance = getCurrentInstance()
      state.name = currentInstance.appContext.config.globalProperties.$name
    })
    return {
      ...toRefs(state),
    }
  },
}
</script>

<style lang="scss" scoped>
</style>