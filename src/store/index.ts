import type { InjectionKey } from 'vue'
import { createStore, Store, useStore as baseUseStore } from 'vuex'
import { api, setToken, clearToken } from '@/store/api';

interface User {
	email: string,
	username: string,
	password: string
}

const UserModule = {
	namespaced: true,
	state: (): User => ({
		email: '',
		username: '',
		password: ''
	}),
	getters: {
		username(state: State) {
			return (state.user && state.user.username) || null;
		}
	},
	mutations: {
		setUser(state: State, payload: any) {
			state.user = payload;
		}
	},
	actions: {
		async loginUser (commit: any , payload: { email: string, password: string }) {
			clearToken();
			try {
				const email = payload.email;
				const password = payload.password;
				const response = await api.post('/users/login', {
					user: {email, password}
				});

				if (response.data.user) {
					setToken(response.data.user.token);
					commit('setUser', response.data.user);
				}
			} catch(e) {
				console.error(e);
				throw e;
			}
		},
		async getUser(commit: any) {
			const user = await api.get("/user");
			commit("setUser", user);
		}
	}
}

export interface State {
	title: string
	user: User,
	errors: string[]
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
	modules: {
		user: UserModule
	},
	state: { title: 'Hello world!' } as State,
})

// define a useStore function to use across the app
export function useStore() {
	return baseUseStore(key)
}