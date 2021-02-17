import Vue from 'vue'
import App from './App'
//挂载封装异步请求
import request from "./util/request";
//挂载到全局上
Vue.prototype.request = request;
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()