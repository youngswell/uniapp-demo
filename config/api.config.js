import Api from 'uni-app-axios';
import { request, response } from '@/utils/interceptor.js';

let api = Api({
	url: '/',//默认的接口后缀
	method: 'get',//默认的HTTP 请求方法
	dataType: 'json',//默认的返回类型
	responseType: 'text',
	header: {
		'content-type': "application/json"
	}
});
api.interceptors.request.use(request.success, request.error);

api.interceptors.response.use(response.success, response.error)

export default api;