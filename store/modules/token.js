// 存储模块
const token = uni.getStorageSync("token")

export default {
    state: {
        token: token
    },
    getters: {
		token: state => state.token
    },
    mutations: {
		token: (state, token) => {
			state.token;
			uni.setStorage({
				key: "token",
				data: token
			})
		}
    },
    actions: {

    }
}