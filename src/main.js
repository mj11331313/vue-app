// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/reset.css'
import './assets/js/rem.js'
import store from '@/vuex/store'
// vue-touch：vuejs下的移动端事件判断插件
import VueTouch from 'vue-touch'

// 只有将vue-touch重命名为v-touch后才可利用v-touch标签来使用vue-touch插件：
Vue.use( VueTouch,{ name:'v-touch'})

Vue.config.productionTip = false;
// 代理地址：
global.API_PROXY = 'https://bird.ioliu.cn/v1/?url=';
global.API_PROXY2 = 'https://bird.ioliu.cn/netease/';
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,  // 配置store,此处不配置将不能使用$store
  template: '<App/>',
  components: { App }
})
