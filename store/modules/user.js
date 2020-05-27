// 存储模块
const user = uni.getStorageSync("user")

export default {
    state: {
        user: user
    },
    getters: {
		user: state => state.user
    },
    mutations: {
		user: (state, user) => {
			state.user;
			uni.setStorage({
				key: "user",
				data: user
			})
		}
    },
    actions: {

    }
}