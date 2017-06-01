<template>
	<div class="cntr-p" >	
		<div class="t-style cntr-ml">
			{{msg}}
		</div>
		<div class="cntr-flex">
			<ul>
				<li v-for="item in listData" @click="itemTap($event, item)" >{{item.name}}</li>
			</ul>
			<ul>
				<li v-for="item in listSelectedData" v-if="item.checked == true">{{item.name}}</li>
			</ul>
		</div>
		<button class="btn btn-info" v-on:click="testApi('PUT')">put</button>
		<button class="btn btn-info" v-on:click="testApi('POST')">post</button>
		<button class="btn btn-info" v-on:click="testApi('DELETE')">delete</button>
		
    </div>
</template>

<script>

// 	import moment from 'moment';
	import xhres6 from '../public/js/xhres6.js';
	
    export default {
    	components:{
    	},
    	data(){
    		return {
    			msg:'hello vue world',
				listData:[
					{name:"item 0", id:1, checked:false},
					{name:"item 1", id:2, checked:false},
					{name:"item 2", id:3, checked:false},
					{name:"item 3", id:4, checked:false},
				],
				listSelectedData:[]
    		}
    	},
    	mounted(){
    		console.log('main page')
    	},
    	computed:{
    		
    	},
    	updated(){

    	},
    	methods:{
			itemTap($event, _item){
				_item.checked = !_item.checked;
				this.listSelectedData=this.listData;
			},
    		testApi(_method){
    			const xhr = new xhres6({
    				method:_method,
					url:'https://api.dokodm.com/portal/Session',
// 					url:'https://api.dokodm.com/index/Index/index',
					sendDataType:'json',
					data:{
						id:'1'
					}
    			});
				
    			
    		}
    		
    	},
    }
</script>

<style scoped>
	.t-style{
		background:#283;
	}
</style>
