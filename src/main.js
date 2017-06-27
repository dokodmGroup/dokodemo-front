// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import '@/assets/style/bootstrap-common-24-0.css'
import '@/assets/iconfont/iconfont.css'
import '@/assets/style/ajinit.css'
import '@/assets/style/style.css'

// import xhres6 from '@/assets/js/xhres6.js'

import Vue from 'vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.config.devtools = false

import axios from 'axios'
import VueAxios from 'vue-axios'

window.localStorage.token = '235'

axios.interceptors.request.use((config)=>{
  // Do something before request is sent
  if (window.localStorage.token) {
      config.headers['X-Token'] = `Token ${window.localStorage.token}`;
  }
  return config;
},(error)=>{
  // Do something with request error
  return Promise.reject(error);
});

Vue.use(VueAxios, axios)

// import MemoComponent from '@/components/Memo'
// Vue.component(MemoComponent.name, MemoComponent)

import Memo from '@/plugins/Memo'
Vue.use(Memo)

import resangel from '@/plugins/vue-resangel'
Vue.use(resangel)

Vue.resangleConfig((_options)=>{
  if (window.localStorage.token) {
      _options.headers['X-Token'] = `Token ${window.localStorage.token}`;
  }
  _options.headers['Accept'] = 'application/json;version=0.0.1';
  _options.host = 'https://api.dokodm.com/portal';
  return _options;
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store
})
