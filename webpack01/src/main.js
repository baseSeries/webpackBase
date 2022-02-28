import "./js/index.js"
import "./css/index.scss"
import "./font/iconfont.css"
import { createApp } from "vue/dist/vue.esm-bundler"
import App from "./vue/App.vue"
const arr = [1, '2222', '3']
const arrMap = arr.map((item) => console.log(item))
console.log("object", arrMap);

const app = createApp(App)
app.mount("#app")