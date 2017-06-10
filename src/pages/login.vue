<template>
	<div class="login-wrap" >	
		<div class="login-cell">
			<!--<transition name="fade-inout">-->
			<div class="lc-account" v-if="!hasAccount">
				<div>
					<input type="email" ref="accountField" v-model.trim="account" class="form-control" @keyup="accountEnter"/>
				</div>
				<div>
					<button @click="loginAction">login</button>
				</div>
			</div>
			<div class="lc-passwd" v-else>
				<div>
					<input type="email" ref="accountField" v-model.trim="account" class="form-control" @keyup="accountEnter"/>
				</div>
				<div>
					<button @click="loginAction">login</button>
				</div>
			</div>
			<!--</transition>-->
		</div>
    </div>
</template>

<style scoped>
	.login-wrap{
		position:fixed;
		top:0;
		left:0;
		width:100%;
		height:100%;
		overflow:hidden;
		background:rgba(0,0,0,.6);
	}
</style>

<script>
// 	import moment from 'moment';
    export default {
    	components:{
    	},
    	data(){
    		return {
    			account:'',
				hasAccount:false
    		}
    	},
    	mounted(){
//     		console.log('login page')
    	},
    	computed:{
    		
    	},
    	updated(){

    	},
    	methods:{
    		accountEnter($event){
				if($event.keyCode === 13){
					this.loginAction();
				}
			},
			loginAction($event){
				if(this.account==''){
					this.$refs.accountField.focus();

				}
			}
    	},
    }
</script>


