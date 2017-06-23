<template>
    <div class="msg-wrap">
      <div class="msg-content cntr-shadow cursor-pointer cntr-flex justify-between aligni-center" :class="`bg-${type}`">
        <div><slot></slot></div>
        <i class="iconfont icon-remove"></i>
      </div>
    </div>
</template>

<script>
export default {
  name: 'msg',
  data () {
    return {
      countDownHandler:null,
    }
  },
  props:{
    type:{
      type:String,
      default:'info',
    },
  },
  mounted(){
  },
  methods:{
    wrapClick($event){
      if(this.countDownHandler){
        clearTimeout(this.countDownHandler);
      }
    }
  }
}
</script>

<style scoped>
  .msg-wrap{
    position:absolute;
    top:.5rem;
    right:.5rem;
  }
  .msg-content{
    border-radius:3px;
    border:1px solid #ccc;
    /*box-shadow:0 0 2px -1px #000;*/
    padding:.4rem .5rem;
    margin-bottom:.5rem;
  }
</style>
