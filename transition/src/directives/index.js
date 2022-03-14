import formatTime from "./formatTime";
import pluginsObj from "../plugins/plugins_obj.js"
import pluginsFun from "../plugins/plugins_fun.js"
export default function (app) {
    // formatTime(app)
    app.use(pluginsObj)
    app.use(formatTime)
}