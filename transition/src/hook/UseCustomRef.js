import { customRef } from "vue"

export default function (value, delay = 300) {
    let timer
    return customRef((track, triggerRef) => {
        return {
            get () {
                track()
                return value
            },
            set (newValue) {
                clearTimeout(timer)
                timer = setTimeout(() => {
                    triggerRef()
                    value = newValue
                }, delay)

            }
        }
    })
}
