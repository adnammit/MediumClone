import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import Settings from '@/views/Settings.vue'
import { navigationGuard, LoginCallback } from '@okta/okta-vue'
import type { OktaVueOptions } from '@okta/okta-vue'
import { OktaAuth } from '@okta/okta-auth-js'
import config from '@/config.json';

// import { LoginCallback } from '@okta/okta-vue'

// const router = createRouter({
//   ...
//   history: createWebHistory(process.env.BASE_URL),
//   routes: [
//     { path: '/login/callback', component: LoginCallback },
//     ...
//   ]
// })

// const oktaAuth = new OktaAuth({
//   issuer: config.authClient,
//   clientId: config.clientId,
//   redirectUri: config.redirectUrl,
//   scopes: ['openid', 'profile', 'email'],
// })
// Vue.use(oktaAuth)
// const options: OktaVueOptions = {
//   oktaAuth
// }

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/Login.vue')
    // },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login/callback',
      component: LoginCallback,
    }
  ]
})

router.beforeEach(navigationGuard);

export default router
