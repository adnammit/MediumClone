// import store from '@/store';
// import User from '@/models/user'


// export interface AppState {}

// export const appModule = {
// 	namespaced: true,
// 	state: (): User => ({
// 		email: '',
// 		username: '',
// 		password: ''
// 	}),
// 	getters: {
// 		username(state: State) {
// 			return (state.user && state.user.username) || null;
// 		}
// 	},
// 	mutations: {
// 		setUser(state: User, payload: User) {
// 			state.user = payload;
// 		}
// 	},
// 	actions: {
// 		// loginUser: async function ({ commit }, { email, password }) {
// 		// 	clearToken();
// 		// 	try {
// 		// 		const response = await api.post("/users/login", {
// 		// 			user: {
// 		// 				email,
// 		// 				password
// 		// 			}
// 		// 		});
// 		// 		if (response.data.user) {
// 		// 			setToken(response.data.user.token);
// 		// 			commit("setUser", response.data.user);
// 		// 		}
// 		// 	} catch (e) {
// 		// 		console.error(e);
// 		// 		throw e;
// 		// 	}
// 		// }
// 	}
// };

// @Module({ dynamic: true, namespaced: true, store, name: 'AppState' })
// class App extends VuexModule implements AppState {
// 	public isNoData = false;
// 	public isLoading = false;
// 	public isErrored = false;
// 	public currentUser = new oktaUser();
// 	public collection = new Collection();
// 	public selectedItem: Media = new Movie();
// }