 

<script  >
import { ref } from 'vue'
export default {
  setup() {
    let num = ref('dang')
    return { num }
  },
  render() {
    return (
      <div>
        <h2>aaa</h2>
        {this.$slots.default ? (
          this.$slots.default(this.num)
        ) : (
          <h2>默认插槽</h2>
        )}
      </div>
    )
  },
}
</script>

<style scoped>
</style>