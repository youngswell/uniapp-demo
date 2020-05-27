import api from "@/config/api.config.js";

export default {
	home(data) {
		return api.get("home", data);
	}
}