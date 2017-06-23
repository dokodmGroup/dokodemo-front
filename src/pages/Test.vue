<template>
  <section>
    test page
    <button class="btn btn-info" @click.stop.prevent="btnAction">test api</button>
    
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
  mounted(){
    this.$memo({
      type:'sueccess'
    })
  },
  methods:{
    btnAction(){
        this.$rahttp.get('')
        .then((res)=>{
          
        })
    },
  }
}
</script>

<style scoped>
</style>
