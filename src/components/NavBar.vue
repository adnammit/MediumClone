<template>
	<nav class="navbar navbar-dark bg-inverse">
		<div class="container">
			<a class="navbar-brand" href="index.html">Medium Clone</a>
			<ul class="nav navbar-nav pull-xs-right">
				<li class="nav-item">
					<router-link class="nav-link" :to="{ name: 'home' }">Home</router-link>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="">
						<i class="ion-compose"></i>&nbsp;New Post
					</a>
				</li>
				<li class="nav-item">
					<router-link class="nav-link" :to="{ name: 'settings' }">
						<i class="ion-gear-a"></i>&nbsp;Settings
					</router-link>
				</li>
				<li v-if="isAuthenticated" class="nav-item">
					<router-link class="nav-link" :to="`/@${username}`">
						{{ username }}
					</router-link>
					<div class="nav-link" @click="logout"> Logout </div>
				</li>
				<li v-else class="nav-item">
					<div class="nav-link" @click="login"> Login </div>
				</li>
			</ul>
		</div>
	</nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { oktaAuth } from '@/auth'
import { store } from '@/store'

export default defineComponent({
	name: 'NavBar',
	computed: {
		username: () => store.getters.username,
		isAuthenticated: () => store.getters.isUserAuthenticated
	},
	setup() {
		const login = () => oktaAuth.signInWithRedirect()
		const logout = () => oktaAuth.signOut()
		return { login, logout }
	}
})
</script>
