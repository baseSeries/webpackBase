import { ref, watch } from "vue"

export default function (key, value) {
    const data = ref(value)
    if (value) {
        localStorage.setItem(key, JSON.stringify(value))
    } else {
        data.value = JSON.parse(localStorage.getItem(key))
    }
    watch(() => data.value, (newValue) => {
        localStorage.setItem(key, JSON.stringify(newValue))
    })
    return data
}