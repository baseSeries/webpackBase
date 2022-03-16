
import { mapGetters, createNamespacedHelpers } from "vuex"
import useMapper from "./useMapper"
const useMapGetters = function (name, mapper) {
    let mapGettersFns = mapGetters
    let params = name
    if (typeof name === "string" && name.length > 0) {
        mapGettersFns = createNamespacedHelpers(name).mapGetters
        params = mapper
    }
    return useMapper(mapGettersFns, params)
}
export default useMapGetters 
