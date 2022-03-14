 

<script  >
import { ref } from 'vue'
export default {
  setup() {
    let counter = ref(1)
    return { counter }
  },
  render() {
    return <h2>HelloWorld{this.counter}</h2>
  },
}
</script>

<style lang="scss" scoped>
</style>