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
				<!-- <li class="nav-item">
					<button v-if='authState && authState.isAuthenticated' v-on:click='logout' id='logout-button'> Logout </button>
					<button v-else v-on:click='login' id='login-button'> Login </button>
				</li> -->

				<li v-if="username == null" class="nav-item">
					<router-link class="nav-link" to="/register"> Register </router-link>
				</li>
				<li v-if="username" class="nav-item">
					<router-link class="nav-link" :to="`/@${username}`">
						{{ username }}
					</router-link>
				</li>
			</ul>
		</div>
	</nav>
</template>
<script lang="ts">

// import { useAuth } from '@okta/okta-vue';

// const auth = useAuth();

// const login = async () => {
// 	await auth.signInWithRedirect()
// }

// const logout = async () => {
// 	await auth.signOut()
// }


export default {
	computed: {
		username() {
			return this.$store.getters["users/username"];
		}
	},
};
</script>