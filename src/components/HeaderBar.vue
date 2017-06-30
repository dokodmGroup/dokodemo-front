<template>
	<div class="header-bar cntr-flex aligni-center justify-between cntr-shadow">
		<div class="cntr-pr-sm">
			<router-link class="cntr-flex aligni-center" :to="{name:'playground'}">
				<img src="../assets/logo.png" class="img-logo" alt="DOKODM"/>
				<div class="cntr-pl font-size-xlg web-title">
					<strong>DOKODM</strong>
				</div>
			</router-link>
		</div>
		<div class="search-wrap">
			<input type="search" class="form-control search-feild" placeholder="search something"/>
		</div>
		<div class="cntr-pl-sm">
			<router-link class="text-black" :to="{name:'login'}">login</router-link>&nbsp;/&nbsp;<router-link class="text-black" :to="{name:'signup'}">signup</router-link>
		</div>
	</div>
</template>
<script>
export default {
  data () {
    return {
      
    }
  },
  props:{
  },
  mounted(){
  },
  methods:{
  }
}
</script>

<style scoped>
	.header-bar{
		padding:.8rem 2rem;
		
		background-color:rgb(196, 218, 245);
		border-bottom:1px solid #ccc;
		position:relative;
		z-index:20;
		/*box-shadow:0 2px 10px -2px #000;*/
	}
	.search-wrap{
		flex-grow:1
	}
	.search-feild{
		max-width:30rem;
		margin:0 auto;
	}
	.img-logo{
		width:2rem;
		height:2rem;
	}
	.search{
		position:relative;
		z-index:1;
	}
	.search:after{
		display:block;
		width:20px;
		height:20px;
		content:'&#xe646';
		position:absolute;
		top:0;
		right:0;
		z-index:10;
	}

	@media all and (max-width:768px){
		.header-bar{
			padding:.8rem .5rem;
		}
		.web-title{
			display:none;
		}
	}
</style>
