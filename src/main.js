import { createApp } from 'vue'

import './style.css'
import  router   from './router/routes'
import  Vuelidate   from 'vuelidate'
import App from './App.vue'




createApp(App)
.use(router)
.use(Vuelidate)
.mount('#app')



