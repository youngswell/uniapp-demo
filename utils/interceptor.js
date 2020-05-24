import store from "@/store";

let request = {
	success: (config) => {
		if (store.getters.token) {
			config.header.authorization = store.getters.token
		}
		return config
	},
	error: (error) => {
		return error;
	}
}

let response = {
	success: (config) => {
		return config.data || config
	},
	error: (error) => {
		// Enter the error handling function here
		return error;
	}
}

export { request, response };