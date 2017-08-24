<template>
  <section class="cntr-p-m">
    <ul class="test-wrap">
      <li class="item">
        <a>keikd kdjfie kdjfie kd jifej sk iejfskd f</a>
      </li>
    </ul>
  </section>
</template>

<script>
  import * as gear from '@/assets/js/gear.js'
  
  export default {
    data () {
      return {
        count:0
      }
    },
    components:{
      
    },
    computed:{
      getUserAgent(){
        return navigator.userAgent
      }
    },
    mounted(){
      
    },
    methods:{
      btnAction(){
        // this.$rahttp.get('')
        // .then((res)=>{
          
        // })
      },
      
    }
  }
</script>

<style scoped>
  .test-wrap{
    width:100px;
    overflow:auto;
    background-color:#eef1f6;
  }
  .item{
    display: block;
    white-space: nowrap;
  }
  .item:hover{
    background-color:aqua;
  }
</style>
