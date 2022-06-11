import { createApp } from 'vue'
import App from './App.vue'
import routers from './routers'
import './tailwind.css'
import './assets/scss/modules/_icons.scss'
import { store } from './store/store'
import mitt from 'mitt'
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css'
import { mask } from 'vue-the-mask'

const emitter = mitt()

const app = createApp(App)

app.config.globalProperties.emitter = emitter
app.use(store)
app.use(routers)
app.directive('mask', mask)
app.component('v-select', vSelect)
app.mount('#app')