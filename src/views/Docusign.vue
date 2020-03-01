<template>
    <div>
    <v-toolbar color="#1b49a0" flat style="padding: 0px 20px;">
      <img src="../assets/docusign.png" alt="" height='30px'>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn text dark>Help</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <div class="content">
             <div class="site-card">
      <h3 style="letter-spacing:2px;margin-bottom:10px">ACCESS YOUR DOCUMENT</h3>
      <p style="color:#aaaaaa;font-size:12px;">If you received an email asking you to sign or view a document, you can access that document by entering your email address below.</p>
            <v-divider></v-divider>
            <br>
            <form @submit.prevent = "toDoc2">
               <label for="" style="font-size:14px;">Email Address</label>
            <br>
            <input v-model="Email" type="text" class="text-field" required>
            <br>
            <br>
            <Button type="submit" style=" font-size:14px;background:#ffc820;padding:10px 25px;font-weight:bold;">NEXT</Button>  
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
        Email: ''
        }
    },
      computed:{
         ...mapGetters ([
              'getCompanyName',
         ]),
   },
   methods:{
       toDoc2(){
            this.$store.commit('addEmailPending', this.Email)
      this.$router.push("/Docusign/auth/confirm")
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
