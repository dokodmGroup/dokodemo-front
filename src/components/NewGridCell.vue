<template>
	<div class="wrap cursor-pointer">
    <div class="wrap-cell card-wrap transit-all">
      <div class="image-wrap ">
          <slot name="cover" v-if="$slots.cover"></slot>
          <div v-else class="image-placeholder cntr-shadow"></div>
        </div>
        <div class="assist-wrap cntr-p-sm">
          <slot name="assist"></slot>
        </div>
        <div class="content-wrap cntr-mt-sm cntr-p-sm">
          <slot name="title"></slot>
        </div>
      </div>
      <div class="wrap-belonging transit-all"></div>
    </div>
		
</template>

<script>
  export default {
    name: 'new-grid-cell',
    data () {
      return {
        newsData:this.data
      }
    },
    components:{
      
    },
    props:{
      data:{
        type:Object,
        default:{}
      }
    },
    computed:{
    },
    updated(){
    },
    created(){
    },
    mounted(){
    },
    methods:{
      
    }
  }
</script>

<style scoped>
  .wrap{
    position:relative;
    /*perspective:550;*/
    padding:.5rem;
    z-index: 10;
	}
  .wrap-belonging{
    position: absolute;
    left: 5%;
    bottom: 10%;
    width: 90%;
    height: 15px;
    border-radius: 50%;
    box-shadow: 0 20px 15px;
    z-index: 9;
    background: transparent;
    opacity:0;
  }
  .wrap-cell{
    position:relative;
    display:grid;
    z-index:10;
    border-radius:4px;
    grid-template-columns:0fr 1fr;
    grid-template-areas: 
    "cover assist"
    "title title";
  }
  .wrap:hover .wrap-cell{
    background:#fff;
    /*transform: rotateY(5deg);*/
  }
  .wrap:hover .wrap-belonging{
    opacity:1;
    /*transform: rotateY(5deg);*/
  }
  .cover{
    width:200px;
  }
	.image-wrap{
		position:relative;
		z-index: 3;
    min-width:100px;
    min-height:100px;
    /*margin-top: -.8rem;*/
    /*margin-left: -.8rem;*/
    /*margin-right: .5rem;*/
    grid-area:cover;
    
	}
  .assist-wrap{
    grid-area:assist;
    /*margin-right:-.5rem;*/
    /*border: 2px solid #82c9ff;*/
    border-radius: 4px;
  }
  .content-wrap{
    position: relative;
    z-index: 2;

    /*border:2px solid #82c9ff;*/
    /*margin-left:-.8rem;
    margin-right:-.8rem;*/
    border-radius:3px;
    grid-area:title;
  }
  .image-placeholder{
    position:relative;
    background:#ccc;
    overflow:hidden;
    border-radius:3px;
    width:100px;
    height:100px;
    border-top: 50px solid #59d259;
    border-right: 50px solid #f97272;
    border-left: 50px solid #daecf9;
    border-bottom: 50px solid #daecf9;
  }
  /*.image-placeholder:before{
    position:absolute;
    content:'';
    top:0;
    left:0;
    border-top:50% solid #000;
  }*/
</style>
