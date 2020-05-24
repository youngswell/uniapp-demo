import api from "@/config/api.config.js";

const $api = {
	login(data) {
		return api.get("login",data)
	}
}
export default $api
