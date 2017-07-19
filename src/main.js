// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import App from './app';
import routes from './routes';
import storeOption from './store';
import {Time,Focus} from './directives';
var Marked = require('marked');
//import {system} from './Config/Config.js';//引入默认配置

import 'mint-ui/lib/style.css'
import './baseCss/index.scss';

Vue.use(Vuex);	
Vue.use(VueRouter);
Vue.directive('marked',{
  //注意，这儿得使用bind钩子函数，因为我们使用此指令主要是为了写文档，
  //文档里不会有变量且一次性生成,而update在自定义指令所在模板变化时就会重新执行，
  //会影响渲染文档的方法，所以不能使用update钩子，也不能使用函数简写
  bind:function(el,binding,vnode){
    el.innerHTML = Marked(el.innerText);
  }
})
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