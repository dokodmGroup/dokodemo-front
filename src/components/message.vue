<template>
	<div class="message-wrap" >
		<div class="content text-right">
			<slot></slot>
		</div>
	</div>
</template>

<style scoped>
	.message-wrap{
		position:absolute;
		top:1rem;
		right:1rem;
	}
	.content{
		display:inline-block;
		padding:1rem 2rem;
		background:#efefef;
		color:#666;
		border-radius:4px;
		box-shadow:0 0 4px #000;
	}
</style>

<script>
    export default {
		data(){
    		return {
    			
    		}
    	},
		props:{
		},
    	components:{
    	},
    	
    	mounted(){
    		
    	},
    	computed:{
    		
    	},
    	updated(){
    		
    	},
    	methods:{
    		
    	},
    }
</script>


