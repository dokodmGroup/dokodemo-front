<template>
    <div class="toast-wrap" v-if="dataList.length>0">
      <div class="toast-content">
        <Memo :data="item" :index="key" @close="closeItem" :key="key" @click.native.stop.prevent="itemClick(item, key)" v-for="(item, key) in dataList">{{item.title}}</Memo>
      </div>
    </div>
</template>

<script>
import Memo from '@/components/Memo'
export default {
  name: 'toast-list',
  data () {
    return {
      countDownHandler:null
    }
  },
  components:{
    Memo
  },
  props:{
    dataList:{
        type:Array,
        default:[]
    }
  },
  updated(){
    // console.log('updated');
    
  },
  created(){
    // console.log('created');
    // this.countDownClose();
  },
  mounted(){
    // console.log('mounted');
  },
  methods:{
    closeItem(_key){
      this.dataList.splice(_key, 1);
    },
    itemClick($event, _item, _key){
      this.dataList.splice(_key, 1);
      console.log(this.$store.state.msgList);
    }
  }
}
</script>

<style scoped>
  .toast-wrap{
    position:fixed;
    top: .8rem;
    right: .8rem;
    display:inline-block;
    z-index:10;
  }
  .msg-content{
    border-radius:3px;
    border:1px solid #ccc;
    /*box-shadow:0 0 2px -1px #000;*/
    padding:.4rem .5rem;
    margin-bottom:.5rem;
  }
</style>
