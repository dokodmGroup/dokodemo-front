<template>
	<div>
		i am home page
		<input type="file" ref="files" class="form-control" v-on:change="picOnchange"/>
	</div>
</template>

<script>
    export default {
    	data(){
    		return {
    			
    		}
    	},
    	mounted(){
    		
    	},
    	computed:{
    		
    	},
    	methods:{
    		picOnchange(e){
//     			console.dir(e);
    			const file = e.target.files[0];
    			console.dir(file);
    			this.uploadFile(file);
    		},
			uploadFile(_file){
				const xhr = new xhres6;
				// let p = this;
				xhr.put('http://localhost/portal/Image',{
					headers:{
						'Content-Type':'multipart/form-data;',
					},
					data:_file
				})
				.then((_rpdata)=>{
					console.dir(_rpdata);
					const { headers, body, xhr_status, xhr} = _rpdata;
					// body this is server response data;
					this.$refs.files.value = '';
				});
			}
    	},
    }
</script>

<style scoped>
	
</style>
