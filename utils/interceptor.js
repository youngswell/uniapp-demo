import store from "@/store";

let request = {
	success: (config) => {
		if (store.getters.token) {
			config.header.authorization = store.getters.token
		}
		// return Promise.reject("error")
		return config
	},
	error: (error) => {
		console.error(error)
		return error;
	}
}

let response = {
	success: (config) => {
		if (config.data.code !== 200) {
			return Promise.reject(config.data || config)
		}
		return config.data || config
	},
	error: (error) => {
		// Enter the error handling function here
		console.log("错误了")
		return error;
	}
}

export { request, response };