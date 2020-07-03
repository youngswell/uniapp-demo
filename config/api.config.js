// import Api from 'uni-app-axios';
import Api from '../common/request.js';
import { request, response } from '@/utils/interceptor.js';

// let api = Api({
// 	url: '/',//默认的接口后缀
// 	method: 'get',//默认的HTTP 请求方法
// 	dataType: 'json',//默认的返回类型
// 	responseType: 'text',
// 	header: {
// 		'content-type': "application/json"
// 	}
// });

let api = new Api({
	baseUrl: "http://gj.jlykj.cn/api/",
	header: {
		
	}
})
api.interceptors.request.use(request.success, request.error);

api.interceptors.response.use(response.success, response.error)

console.log(api)

export default api;