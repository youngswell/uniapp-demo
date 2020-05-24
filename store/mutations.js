import state from "./state.js"
export default {
	token: (state, token) => {
		uni.setStorage({
			key: 'token',
			data: token,
			success: function() {
				console.log('setStorage(token) success');
			}
		});
		state.token = token
	},
	user: (state, user) => {
		uni.setStorage({
			key: 'user',
			data: user,
			success: function(data) {
				console.log('setStorage(user) success');
			}
		});
		state.user = user
	}
}
