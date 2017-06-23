<template>
  <!--<section>-->
    <div class="toast-wrap cntr-p-m">
      <div class="toast-content">
        <slot></slot>
      </div>
    </div>
  <!--</section>-->
</template>

<script>
export default {
  name: 'toast-wrap',
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
  .toast-wrap{
    position:fixed;
    top: .8rem;
    right: .8rem;
    display:inline-block;
    z-index:10;
  }
</style>
