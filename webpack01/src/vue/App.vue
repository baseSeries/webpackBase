<template>
  <div>
    <h2>这是VUE渲染出来的</h2>
    <div>{{title}}</div>
  </div>

</template>
<script>
export default {
  data() {
    return {
      title: '我是title',
    }
  },
}
</script>
<style scoped>
h2 {
  color: orange;
}
</style>