<template>
	<div>
		<NavBar />
		<router-view />
		<Footer />
	</div>
</template>
<script lang="ts">
import { RouterView } from 'vue-router'
import { oktaAuth } from '@/auth'
import { store } from '@/store'
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'

export default {
	name: 'App',
	components: {
		NavBar,
		Footer
	},
	watch: {
		authState: async function() {
			try {
				const isAuthed = await oktaAuth.isAuthenticated()
				if (isAuthed) {
					const user = await oktaAuth.getUser()
					store.commit('setUser', user)
				}
				// add case to reset user if not authed?
			} catch (e) {
				console.error(e)
			}
		}
	}
}
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
