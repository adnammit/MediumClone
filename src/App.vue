<template>
  <div>
    <NavBar />
    <button v-if='authState && authState.isAuthenticated' @click='logout' id='logout-button'> Logout </button>
    <button v-else @click='login' id='login-button'> Login </button>
    <router-view />
    <Footer />
  </div>
</template>
<script lang="ts">
import { defineComponent, getCurrentInstance } from 'vue'
import { RouterLink, RouterView, useRouter } from 'vue-router'
import type { OktaAuth } from '@okta/okta-auth-js'
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'

export default defineComponent({
  name: 'app',
  components: {
    NavBar,
    Footer
  },
  setup() {
    // const router = useRouter()
    const oktaAuth = getCurrentInstance()!!.appContext.app.config.globalProperties.$auth as OktaAuth
    const login = () => oktaAuth.signInWithRedirect()
    const logout = () => oktaAuth.signOut()
    return { login, logout }
  }
})
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

</style>
