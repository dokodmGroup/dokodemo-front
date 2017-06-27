<template>
  <div class="memo-wrap" :style="wrapStyle">
    <div class="memo-content text-white cntr-shadow cursor-pointer cntr-flex justify-between aligni-center" :class="`bg-${type}`" :style="contentStyle">
      <slot v-if="$slots.default"></slot>
      <div v-else class="cntr-pr-sm">{{content}}</div>
      <i class="iconfont icon-remove font-size-lg" @click.stop.prevent="closeTap"></i>
    </div>
  </div>
</template>
<script>
export default {
  name: 'memo',
  data () {
    return {
      wrapStyle:null,
      contentStyle:null,
      closeAction:()=>{}
    }
  },
  props:{
    type:{
      type:String,
      default:'info'
    },
    content:{
      type:String,
      default:''
    }
  },
  methods:{
    closeTap($event){
      this.$emit('close', true)
      this.closeAction();
    }
  }
  // render(createElement){
  //   return createElement('div',{
  //       class:`msg-wrap bg-${this.type}`
  //     },
  //     [
  //       createElement('div',{
  //           class:'msg-content cntr-shadow cursor-pointer cntr-flex justify-between aligni-center'
  //         },
  //         [
  //           createElement('div',
  //             this.$slots.default
  //           ),
  //           createElement('i',{
  //             class:'iconfont icon-remove font-size-lg'
  //           })
  //         ]
  //       )
  //     ]
  //   )
  // },
}
</script>

<style scoped>
  /*.memo-wrap{
    position:absolute;
    top:.5rem;
    right:.5rem;
  }*/
  .memo-content{
    /*min-width:100px;
    max-width:200px;*/
    border-radius:3px;
    /*border:1px solid #ccc;*/
    /*box-shadow:0 0 2px -1px #000;*/
    padding:.4rem .5rem;
    margin-bottom:.5rem;
  }
</style>
