import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store, key } from './store'
import OktaVue from '@okta/okta-vue'
import type { OktaVueOptions } from '@okta/okta-vue'
import { OktaAuth } from '@okta/okta-auth-js'

// import { OktaAuth, useAuth } from '@okta/okta-auth-js'
import config from '@/config.json';
import './assets/main.css'

const oktaAuth = new OktaAuth({
	issuer: config.authClient,
	clientId: config.clientId,
	redirectUri: config.redirectUrl,
	scopes: ['openid', 'profile', 'email'],
})



const app = createApp(App)
app.use(store, key)
app.use(router)
app.use(OktaVue, { oktaAuth })
// app.use(OktaVue, {
// 	oktaAuth,
// 	onAuthRequired: () => {
// 		app.onAuthRequired(oktaAuth);
// 	},
// 	onAuthResume: () => {
// 		router.push('/login')
// 	},
// })
app.mount('#app')
