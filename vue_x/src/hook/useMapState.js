import { mapState, createNamespacedHelpers } from "vuex"
import useMapper from "./useMapper"
export default function useMapState (name, mapper) {
    let mapStateFn = mapState
    let params = name
    if (typeof name === "string" && name.length > 0) {
        mapStateFn = createNamespacedHelpers(name).mapState
        params = mapper
    }

    return useMapper(mapStateFn, params)
}

