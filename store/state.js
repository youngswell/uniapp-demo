let token = uni.getStorageSync('token');
let user = uni.getStorageSync('user');
export default { //全局state
	token: token,
	user: user,
}