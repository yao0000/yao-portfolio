//import './style.css'
import './assets/main.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import { createApp } from 'vue'

const app = createApp(App)
app.use(router)
app.use(createPinia())
app.mount('#app')
