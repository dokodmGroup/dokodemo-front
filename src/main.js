// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import '@/assets/style/bootstrap-common-24-0.css'
import '@/assets/style/ajinit.css'
import '@/assets/style/style.css'

// import xhres6 from '@/assets/js/xhres6.js'

import Vue from 'vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.config.devtools = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store
})
