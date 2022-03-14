 

<script  >
import { ref } from 'vue'
import childJsxVue from './childJsx.vue'
export default {
  setup() {
    let counter = ref(10)

    const del = () => {
      counter.value -= 1
    }
    return { counter, del }
  },
  render() {
    const add = () => {
      this.counter += 1
    }
    return (
      <div>
        <button onClick={add}>++</button>
        <button onClick={this.del}>--</button>
        <h3>{this.counter}</h3>
        <childJsxVue>
          {{
            default: (props) => (
              <button onClick={add}>插槽按钮-作用域参数{props}</button>
            ),
          }}
        </childJsxVue>
      </div>
    )
  },
}
</script>

<style lang="scss" scoped>
</style>