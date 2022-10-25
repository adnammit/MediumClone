import type { InjectionKey } from 'vue'
import { createStore, Store, useStore as baseUseStore } from 'vuex'

interface User {
	email: string,
	username: string,
	fullName: string
}

const UserModule = {
	namespaced: true,
	state: (): User => ({
		email: '',
		username: '',
		fullName: ''
	})
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
	mutations: {
		setUser(state: State, payload: any) {
			const user = {
				email: payload.email,
				username: payload.preferred_username,
				fullName: payload.name
			} as User
			state.user = user;
		}
	},
	getters: {
		username(state: State) {
			return (state.user && state.user.username) || null
		},
		fullName(state: State) {
			return (state.user && state.user.fullName) || null
		},
		isUserAuthenticated(state: State) {
			return !!state.user && state.user.username
		}
	}
})

// define a useStore function to use across the app
export function useStore() {
	return baseUseStore(key)
}