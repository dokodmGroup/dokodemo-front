<template>
  <section>
    <div class="cntr-flex full-width full-height cntr-absolute justify-center aligni-center">
        <div class="login-wrap cntr-p-m cntr-shadow sash ">
            <transition>
            <div class="account-wrap" v-if="isAccount" >
              <div class="cntr-mb-sm">
                <img src="../assets/logo.png" class="logo"/>&nbsp;Dokodm
              </div>
              <p>取回账号</p>
              <div class="cntr-mb-sm">
                  <input type="text" placeholder="请输入邮箱" class="form-control"/>
              </div>
              <div class="cntr-flex">
                <button class="btn btn-info" @click.stop.prevent="checkNameAction" :disabled="checkNameLoading">申请</button>
              </div>
            </div>
            <div class="password-wrap" v-else > 
                <div></div>
            </div>
            </transition>
        </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      isAccount:true,
      checkNameLoading:false,
    }
  },
  methods:{
    checkNameAction(){
      axios.get('https://api.dokodm.com/portal/Hello')
      .then((response)=>{
        console.log(response);
      })
      .catch((error)=>{
        console.log(error);
      });
    },
  }
}
</script>

<style scoped>
  .login-wrap{
    
  }
  .logo{
    
    width:40px;
  }
</style>
