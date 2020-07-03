const Api = class{
	constructor({ baseUrl, header }) {
		this.baseUrl = !/$\//.test(baseUrl) ? baseUrl : (baseUrl.substring(0,baseUrl.length-2));
		this.get = this.get;
		this.post = this.post;
		this.header = {
			'Content-Type':'application/x-www-form-urlencoded',
			...header
		}
		this.interceptors = {
			request: {
				success(config) {
					return config
				},
				error(error) {
					return error
				},
				use(success,error) {
					if (typeof success === "function") this.success = success
					if (typeof error === "function") this.error = error
				}
			},
			response: {
				success(result) {
					return result
				},
				error(error) {
					return error
				},
				use(success,error) {
					if (typeof success === "function") this.success = success
					if (typeof error === "function") this.error = error
				}
			}
		}
	};
	get(url,pamars) {
		try {
			return new Promise((resolve,reject) => {
				this.interceptors.request.success(
					uni.request({
						url: this.urlDetail(url),
						method: "GET",
						header: this.header,
						data: pamars,
						success: (res) => {
							resolve(this.interceptors.response.success(res))
						},
						fail: (err) => {
							reject(this.interceptors.response.success(err))
						}
					})
				)
			})
		} catch (e) {
			this.interceptors.request.error(e)
		}
	};
	post(url,pamars) {
		try {
			return new Promise((resolve,reject) => {
				this.interceptors.request.success(
					uni.request({
						url: this.urlDetail(url),
						method: "POST",
						header: this.header,
						data: pamars,
						success: (res) => {
							resolve(this.interceptors.response.success(res))
						},
						fail: (err) => {
							reject(this.interceptors.response.success(err))
						}
					})
				)
			})
		} catch (e) {
			this.interceptors.request.error(e)
		}
	};
	urlDetail(url) {
		if (/^\//.test(url)) {
			url = url.substring(1,url.length)
		}
		return this.baseUrl + url
	}
}
export default Api