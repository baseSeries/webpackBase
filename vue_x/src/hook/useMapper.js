import { computed } from "vue"
import { useStore, mapState, mapGetters } from "vuex"
// const types = { "MAPSTATE": mapState, "MAPGETTER": mapGetters }

export const useMapper = function (type, mapper) {
    console.log(mapGetters);
    const store = useStore()
    let mapStateFns
    if (type == 'MAPSTATE') {
        mapStateFns = mapState(mapper)
    } else {
        mapStateFns = mapGetters(mapper)
    }
    let mapStore = {}
    Object.keys(mapStateFns).forEach(fnKes => {
        let fns = mapStateFns[fnKes].bind({ $store: store })
        mapStore[fnKes] = computed(fns)

    })
    return mapStore
} 
