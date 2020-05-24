import Vue from 'vue'
import App from './App'

//全局注册api模块
import api from 'api'
Vue.prototype.$api = api

//全局注册store模块
import store from 'store'
Vue.prototype.$store = store

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
