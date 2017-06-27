<template>
  <section>
    <div class="cntr-flex full-width full-height cntr-absolute justify-center aligni-center">
        <div class="login-wrap x-cntr-p-m cntr-shadow sash">
            <transition>
            <div class="account-wrap" v-if="isAccount" >
              <div class="logo-wrap bg-info cntr-p-m text-white">
                <img src="../assets/logo.png" class="logo"/>&nbsp;Dokodm
              </div>
              <!--<div v-if="resmsg" class="text-danger cntr-p-sm" v-text="resmsg" ></div>-->
              <form name="loginform" class="cntr-p-m">
                <div class="cntr-mb-m">
                    <input v-model.trim="account" ref="account" type="text" required placeholder="请输入账号" class="form-control"/>
                </div>
                <div class="cntr-flex aligni-center justify-between">
                  <router-link :to="{name:'retake-account'}" class="font-size-sm" >忘记账号？</router-link>
                  <button type="submit" class="btn btn-info rm-outline" @click.stop.prevent="checkNameAction" :disabled="checkNameLoading">登录账号</button>
                </div>
              </form>
            </div>
            <div class="password-wrap" v-else > 
              <div class="logo-wrap bg-info cntr-p-m text-white">
                <img src="../assets/logo.png" class="logo"/>&nbsp;Dokodm
              </div>
              <!--<div v-if="resmsg" class="text-danger cntr-p-sm" v-text="resmsg" ></div>-->
              <form name="passwordform" class="cntr-p-m">
              <div class="cntr-mb-m">
                  <input v-model.trim="password" ref="password" type="password" required placeholder="请输入密码" class="form-control"/>
              </div>
              <div class="cntr-flex aligni-center justify-between">
                <router-link :to="{name:'retake-account'}" class="font-size-sm" >忘记密码？</router-link>
                <button type="submit" class="btn btn-info" @click.stop.prevent="checkPasswdAction" :disabled="checkPasswdLoading">验证密码</button>
              </div>
              </form>
            </div>
            </transition>
        </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      isAccount:true,
      resmsg:null,
      account:'',
      password:'',
      userId:null,
      checkNameLoading:false,
      checkPasswdLoading:false,
    }
  },
  methods:{
    // initStatus(){
    //   this.resmsg = null;
    // },
    checkNameAction(){
      // console.log(document.loginform);
      console.log(this.account);
      if(this.account==''){
        // this.resmsg="请填写账号";
        this.$refs.account.focus();
        this.$memo.warning('请填写账号')
        return;
      }

      this.checkNameLoading = true;
      this.$rahttp.post('/Session',{
        data:{
          account:this.account
        }
      }).then((res)=>{
          this.checkNameLoading = false;
          if(res.status == 200){
            this.isAccount = false;
            this.userId = res.body.id;
            // this.resmsg = null;
          }else{
            this.$memo.info(decodeURI(res.headers['x-tips']))
            // this.resmsg = decodeURI(res.headers['x-tips']);
          }
          
        },(error)=>{
          this.$memo.danger(decodeURI(res.headers['x-tips']))
          // this.resmsg = decodeURI(error.info);
          this.checkNameLoading = false;
        })
    },
    checkPasswdAction(){
      if(this.password==''){
        // this.resmsg="请填写密码";
        this.$memo.warning('请填写密码')
        this.$refs.password.focus();
        return;
      }
      this.checkPasswdLoading = true;
      this.$rahttp.put('/Session/'+this.userId,{
        data:{
          id:this.userId,
          password:this.password
        }
      }).then((res)=>{
          this.checkPasswdLoading = false;
          if(res.status == 200){
            this.$router.push({
              name:'playground'
            })
          }else{
            this.$memo.danger(decodeURI(res.headers['x-tips']))
            // this.resmsg = decodeURI(res.headers['x-tips']);
          }
          
        },(error)=>{
          this.$memo.danger(decodeURI(res.headers['x-tips']))
          // this.resmsg = decodeURI(error.info);
          this.checkPasswdLoading = false;
        })
    }
  }
}
</script>

<style scoped>
  .login-wrap{
    min-width:320px;
  }
  .logo-wrap{
    x-margin-bottom:2rem;
  }
  .logo{
    width:40px;
  }
</style>
