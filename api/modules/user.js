import api from "@/config/api.config.js";

export default {
	login(data) {
		return api.post("/home/Activity/cp_login", data);
	}
}