<template>
	<div class="cntr-p" >	
		<receptacle v-bind:loadmoreAction="loadData" v-bind:loading="loading">
			<div slot="vessel">
				<addon-item v-bind:itemClick="addonItemTap" v-for="(item, key) in addonlist">
					<div slot="content" class="addon-item-content">{{item.title}}&nbsp;{{key}}</div>
					<div slot="addOnRight" class="cntr-flex">
						<div class="bg-danger cntr-p cntr-flex aligni-center" v-on:click="addon0">hello</div>
						<div class="bg-success cntr-p cntr-flex aligni-center" v-on:click="addon1">goodbye</div>
					</div>
				</addon-item>
			</div>
		</receptacle>
		
<!-- 		<vmodel v-model="vvalue">v model test</vmodel> -->
		<p>{{msg}}2222</p>
		<button class="btn btn-info" v-on:click="btnTap">test</button>
		<div v-if="showdate">
			{{detail.msg}}<br/>
			{{detail.productName}}
		</div>
		<div class="cntr-p cntr-relative" style="z-index:1;">
			<div class="tl-label">
				<span class="tll-letter">化</span>
			</div>
			ajsdlfj
		</div>
		
		<input class="form-control" type="date" placeholder="please input something"/>
		<select v-model="sel">
			<option value="def" >请选择</option>
			<option v-for="item in slist" v-bind:value="item.value">{{item.name}}</option>
		</select>
		<div v-text="dataDefault"></div>
		<shutter>
			<p slot="title" class="title">title</p>
			<div slot="content">
				<ul class="list">
					<li class="list-item">list item 0</li>
					<li class="list-item">list item 1</li>
					<li class="list-item">list item 2</li>
				</ul>
			</div>
		</shutter>
		<shutter>
<!-- 			<p slot="title" class="title">title2</p> -->
			<div slot="content">
				<ul class="list">
					<li class="list-item">list item 0</li>
					<li class="list-item">list item 1</li>
				</ul>
			</div>
		</shutter>
		<tip-box v-model="show_tip" ></tip-box>
    </div>
</template>

<script>
	import TipBox from '../components/tipbox.vue';
	import Shutter from '../components/shutter.vue';
	import Vmodel from '../components/vmodel.vue';
	import AddonItem from '../components/addonitem.vue';
	import Receptacle from '../components/receptacle.vue';
	import moment from 'moment';
    export default {
    	components:{
    		Receptacle,
    		Vmodel,
    		TipBox,
    		Shutter,
    		AddonItem
    	},
    	data(){
    		return {
    			vvalue:'testvalue',
    			show_tip:false,
    			showdate:false,
    			msg:'hello work',
    			detail:{
    				msg:'hello detail',
    				productName:'product name'
    			},
    			tips:'hello world',
    			sel:'def',
    			slist:[
    				{value:'aa', name:'aa'},
    				{value:'bb', name:'bb'},
    				{value:'cc', name:'cc'},
    			],
    			addonlist:[
    				{title:'addon item'},
    				{title:'addon item'},
    			],
    			loading:false,
    			refresh:false,
    			loadmore:false,
    			empty:false,
    		}
    	},
    	mounted(){
    		console.log(Math.random());
//     		setTimeout(()=>{
//     			console.log('dynamic add route')
//     			this.$router.addRoutes([{
//     				path:'/vuetodo/home',
//     				name:'home',
//     				component:resolve => require(['./home.vue'], resolve)
//     			}])
//     		},1000)
//     		this.showdate = moment().isBefore(moment('2017-03-04 07:00:00'));
//     			
//     		console.log(this.$store.state.detail.productName);
//     		if(this.$store.state.detail.productName !== undefined){
//     			this.detail = this.$store.state.detail;
//     			this.$store.commit('setDetail', {});
//     		}
//     		this.simPromise();
    	},
    	computed:{
    		dataDefault(){
    			let value = this.tips;
    			if(value){
    				return value
    			}else{
    				return ''
    			}
    		}
    	},
    	updated(){
    		console.log('updated');
    	},
    	methods:{
    		addon0(){
    			console.log(1);
    		},
    		addon1(){
    			console.log(2);
    		},
    		addonItemTap(){
    			console.log('to detail')
    		},
//     		closeTipBox(_rpdata){
//     			alert(_rpdata);
//     		},
    		simPromise(){
    			this.msg = 'loading...'
    			setTimeout(()=>{
    				this.msg = 'load compelete';
    			},2000)
    		},
    		btnTap(){
    			this.show_tip = true;
//     			console.dir(this.datadetail);
//     			this.$store.commit('setDetail', this.detail);
//     			console.dir(this.$store.state.detail);
// //     			return;
//     			this.$router.push({
//     				name:'home'
//     			})
    		},
    		loadData(_pnum){
    			const tmp_array = [
    				{title:'addon item'},
    				{title:'addon item'},
    			];
    			this.loading = true;
    			this.empty = false;
    			this.loadmore = false;
    			this.refresh = false;
    			setTimeout(()=>{
    				this.loading = false;
    				this.addonlist = this.addonlist.concat(tmp_array);
    			},2000)
    		}
    	},
    }
</script>

<style scoped>
	.tl-label{
		position:absolute;
		top:0;
		left:0;
		width:30px;
		height:30px;
		overflow:hidden;
		z-index:2;
		display:block;
	}
	.tl-label:after{
		content:'';
		width:30px;
		height:30px;
		border:15px solid transparent;
		border-top:15px solid red;
		border-left:15px solid red;
		position:absolute;
		top:0;
		left:0;
	}
	.tll-letter{
		position:absolute;
		top:-1px;
		left:1px;
		color:#fff;
		z-index:3;
		font-size:12px;
	}
	
	.bordered{
		border:1px solid #ccc;
		
	}
	.text-box{
		width:80px;
		height:40px;
		background:#345;
		transition:all 300ms;
	}
	.text-box:hover{
		
		width:30px;
	}
	.full-width{
		width:100%;
	}
	
	.title{
		margin-bottom:0;
		border-bottom:2px solid #762;
	}
	.list{
		border:1px solid #087;
	}
	.list-item{
		border-bottom:1px solid #346;
		padding:8px;
	}
	.list-item:last-child{
		border-bottom:0;
	}
	.addon-item-content{
		border-bottom:1px solid #ccc;
		background:#fff;
		padding:3rem 8px;
	}
</style>
