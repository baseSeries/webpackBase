import { createApp } from 'vue'
import App from './App.vue'
import registerDirectives from './directives/index.js'
import "animate.css"

let app = createApp(App)
registerDirectives(app)
app.mount('#app')


