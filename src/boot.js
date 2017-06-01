require('./public/style/bootstrap-common-24-0.css')
require('./public/style/ajinit.css')
require('./public/style/style.css')

import xhres6 from './public/js/xhres6.js'
import Vue from 'vue';

Vue.config.devtools = false;
Vue.config.productionTip = false;

import router from './config/router.js';
import store from './config/store.js';

const app = new Vue({
	el:'#app',
	router,
	store,
});
