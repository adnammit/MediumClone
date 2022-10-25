import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import { store, key } from '@/store'
import OktaVue from '@okta/okta-vue'
import { oktaAuth } from '@/auth'
import '@/assets/main.css'

const app = createApp(App)
app.use(store, key)
app.use(router)
app.use(OktaVue, { oktaAuth })
app.mount('#app')
