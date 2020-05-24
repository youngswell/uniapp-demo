export default {
	login: ({ commit }, data) => {
	    return new Promise((resolve, reject) => {
			commit("user", data.user);
			resolve(true);
		});
	},
	loginOut: ({ commit }) => {
	    return new Promise((resolve, reject) => {
			commit("token", "");
			commit("user", "");
			resolve(true);
		});
	}
}
