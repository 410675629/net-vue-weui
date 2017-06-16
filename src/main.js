// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import App from './app';
import routes from './routes';
import storeOption from './store';

import {Time,Focus} from './directives';

//import {system} from './Config/Config.js';//引入默认配置

import 'mint-ui/lib/style.css'

Vue.use(Vuex);	
Vue.use(VueRouter);
/*Vue.use(ElementUI)
*/

// 注册一个全局自定义指令 v-focus
Vue.directive('focus',Focus())
Vue.directive('time',Time())


// 创建一个路由对象用于管理页面的路由
const router = new VueRouter({
  mode: 'history',
  routes: routes
});


// 创建一个 store 对象用于管理应用状态
const store = new Vuex.Store(storeOption);

window.__lendApp__ = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});