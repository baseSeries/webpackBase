import { watch, computed, ref } from "vue"

export default function () {

    let counter = ref(0)
    let dbCounter = computed(() => counter.value * 2)

    const add = () => { counter.value += 1 }
    const del = () => { counter.value -= 1 }
    return { counter, dbCounter, add, del }

}