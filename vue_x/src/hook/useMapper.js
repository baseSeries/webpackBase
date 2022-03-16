import { computed } from "vue"
import { useStore, } from "vuex"
const useMapper = function (type, mapper) {
    const store = useStore()
    let mapStateFns = type(mapper)
    let mapStore = {}
    Object.keys(mapStateFns).forEach(fnKes => {
        let fns = mapStateFns[fnKes].bind({ $store: store })
        mapStore[fnKes] = computed(fns)

    })
    return mapStore
}
export default useMapper
