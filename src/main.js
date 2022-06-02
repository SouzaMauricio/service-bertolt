import { createApp } from 'vue'
import App from './App.vue'
import routers from './routers'
import './tailwind.css'
import './assets/scss/modules/_icons.scss'
import { store } from './store/store'

const app = createApp(App)

app.use(store)
app.use(routers)
app.mount('#app')