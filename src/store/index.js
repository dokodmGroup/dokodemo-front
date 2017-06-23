import Vue from 'vue'
import Vuex from 'vuex'
// import xhres6 from '@/assets/js/xhres6.js';

Vue.use(Vuex)

import * as gear from '@/assets/js/gear.js'

export default new Vuex.Store({
  state: {
    msgList:[]
  },
  getters: {
  },
  mutations: {
    setMsgListItem($state, _obj){
        console.log(_obj.title);
        if( typeof(_obj) === "object" && _obj !== null ){
            
            
            // if($state.msgList.length>5){
            //     $state.msgList.pop();
            // }
            // $state.msgList.unshift(tmp_obj);
            console.log(_obj.id);
            $state.msgList.push(_obj)
        }else{
            console.warn('_obj is not an object');
        }
    },
    removeMsgListItem($state, _id){
        $state.msgList.forEach((value, key)=>{
            if(value.id == _id){
                $state.msgList.splice(key, 1);
                return;
            }
        })
    }
  },
  actions: {
        
  },
  modules: {

  }
})