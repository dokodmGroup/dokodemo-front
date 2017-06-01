import Vue from 'vue';
import Vuex from 'vuex';
import xhres6 from './../public/js/xhres6.js';

Vue.use(Vuex);

const store = new Vuex.Store({
		state: {
			detail:{}
		},
		getters: {
		
		},
		mutations: {
			setDetail(state, _obj){
				state.detail = _obj;
			}
		},
		actions: {
			
		},
		modules: {
		
		}
})

export default store;