import api from "@/config/api.config.js";

export default {
	login(data) {
		return api.post("login", data);
	}
}