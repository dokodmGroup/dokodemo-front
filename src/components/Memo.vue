<template>
  <div class="msg-wrap" :class="`bg-${type}`">
    <div class="msg-content cntr-shadow cursor-pointer cntr-flex justify-between aligni-center">
      <slot v-if="$slots.default"></slot>
      <div v-else >{{content}}</div>
      <i class="iconfont icon-remove font-size-lg"></i>
    </div>
  </div>
</template>
<script>
export default {
  name: 'memo',
  data () {
    return {
      
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
  mounted(){
    console.log(this.$slots);
  },
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
  .msg-content{
    border-radius:3px;
    border:1px solid #ccc;
    /*box-shadow:0 0 2px -1px #000;*/
    padding:.4rem .5rem;
    margin-bottom:.5rem;
  }
</style>
