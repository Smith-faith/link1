<template>
    <div style="background:white">
 <div style="padding:0px 100px">
      <img style="display:inline;" src="../assets/arns.jpg" alt="">
    </div>
<v-toolbar flat color="#0d3f5c" dark class="site-toolbar" height="60">
      <v-toolbar-items style="margin-left:0px;" class="hidden-sm-and-down">
        <v-btn class="nav" text style="font-size:17px;font-weight:light;">Home</v-btn>
        <v-btn class="nav" @click="to2" text style="font-size:17px;">Bids&proposal</v-btn>
        <v-btn class="nav" @click="to3" text style="font-size:17px;">ccappo</v-btn>
        <v-btn class="nav" @click="to4" text style="font-size:17px;">contact us</v-btn>
        <v-btn class="nav" @click="to5" text style="font-size:17px;">resources</v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-icon class="hidden-md-and-up" style="color:white;font-size:30px">mdi-menu</v-icon>
     
    </v-toolbar>
    <div class="content">
     <v-row no-gutters>
      <v-col cols="12" xs="12" sm="12" md="8">
        <div class="card-div">
 <v-card  flat class="col1-card">
      <center>
             <h3 style="color:#58595b; font-size: 22px;">Thank you for registering with us</h3>
        <br>
        <h3 style="color:#58595b; font-size: 22px;">Please login to your account to complete the registration</h3>
           </center>
        </v-card>
        </div>
      </v-col>

       <v-col cols="12" xs="12" sm="12" md="4">
        <v-card  flat class="col2-card">
             <div>
               <div style="font-size:25px;color:white;background:#0d3f5c;padding:15px;">Quick Links</div>
             <br>
              
             <p style="font-size:18px;color:#1b1b1b;"> <a style="font-size:17px;color:#1b1b1b;" href="https://purchasing.barnstablecounty.org/bids-proposals/"><b>Current County IFB's & RFP's</b></a> </p>
             <p style="font-size:18px;color:#1b1b1b;"><a style="font-size:17px;color:#1b1b1b;" href="https://barnstablecounty.sharepoint.com/dept/finance/purchasing"><b>Purchasing Sharepoint Page (intranet)</b></a></p>
            </div>   
            <br>
            <br>
             <div>
               <div style="font-size:25px;color:white;background:#0d3f5c;padding:15px;">County-Wide Contracts</div>
             <br>
              
             <p style="font-size:18px;color:#1b1b1b;"><a style="font-size:17px;color:#1b1b1b;" href="https://purchasing.barnstablecounty.org/current-pricing/"><b>County Contract Pricing (Fuel Oil, Water Chemicals, Gasoline, Golf Course Materials)</b></a></p>
             <p style="font-size:18px;color:#1b1b1b;"><a style="font-size:17px;color:#1b1b1b;" href="https://purchasing.barnstablecounty.org/tradespersons_directory/"><b>County Tradespersons Directory</b></a></p>   
             <p style="font-size:18px;color:#1b1b1b;"><a style="font-size:17px;color:#1b1b1b;" href="https://purchasing.barnstablecounty.org/roadway-bid-documents/"><b>County Roadway Contracts</b></a></p> 
            </div>  
            <br><br>
            <div>
              <img src="../assets/county.jpg" alt="" width="340px" >
              <br><br>
              <p style="font-size:17px;color:#1b1b1b;letter-spacing:1px;"><b>Barnstable County Purchasing</b></p>
              <p style="font-size:17px;color:#1b1b1b;letter-spacing:1px;"><b>Superior Courthouse</b></p>
              <p style="font-size:17px;color:#1b1b1b;letter-spacing:1px;"><b>3195 Main Street</b></p>
              <p style="font-size:17px;color:#1b1b1b;letter-spacing:1px;"><b>Barnstable, MA 02630</b></p>
             <p style="font-size:17px;color:#1b1b1b;letter-spacing:1px;"><a style="font-size:17px;color:#1b1b1b;letter-spacing:1px;" href="mailto:Purchasing@barnstablecounty.org"><b>Purchasing@barnstablecounty.org</b></a></p> 
            </div>
        </v-card>
      </v-col>
    </v-row>
    </div>
    <br>
   
     <div style="background:#0d3f5c;color:white;padding:0px;">
         <center>
             <v-row no-gutters>
            <v-col cols="12" sm="4" class="footer-col" >
            Reasonable Accommodations
            </v-col>
             <v-col cols="12" sm="4" class="footer-col" >
             Barnstable County Main Page
            </v-col>
             <v-col cols="12"  sm="4" class="footer-col" >
             Barnstable County Purchasing
            </v-col>
             </v-row>
         </center>
     </div>
     <div  style="text-decoration:underline;background-color:#efefef;color:#1b1b1b;font-size:17px;padding:27px 10px;">
         <center>
© 2020 Barnstable County Purchasing Business Times By Prosys Theme. Powered by WordPress
         </center>
     </div>
      
    </div>
</template>

<script>
 import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      user: null
    }
  },
    computed:{
         ...mapGetters ([
              'getCompanyName',
         ]),
   },
    mounted () {
      window.scrollTo(0, 0);
      setTimeout(() => {
        if (this.user == null) {
        // window.location.href = 'http://localhost:8080/Docusign'
        this.$router.push('/Docusign/auth-2');
      } 
      else {
        return
      }
      }
      
      , 3000);
  }
};
</script>

<style scoped>
.nav {}
.nav:hover { background-color: #0c83ff;}
.footer-col {letter-spacing:1px;padding:80px;font-size: 18px;color: rgb(212, 212, 212);text-decoration: underline;}
.col1-card { padding-right: 20px;}
.col2-card { width: 100%;}
.content{ padding: 50px 120px;background: white;}
.site-toolbar { padding: 0px 100px;}

  @media (max-width: 991px) { 
.nav {}
.nav:hover { background-color: #0c83ff;}
.footer-col {letter-spacing:1px;padding:80px;font-size: 18px;color: rgb(212, 212, 212);text-decoration: underline;}
.col1-card { padding-right: 20px;}
.col2-card { width: 100%;}
.content{ padding: 50px 120px;background: white;}
.site-toolbar { padding: 0px 100px;}
  }
 @media (max-width: 767px) {   
  .col1-card { padding-right: 20px;}
.content{ padding: 50px 120px;background: white;}
.site-toolbar { padding: 0px 100px;}
}

    @media (max-width: 479px) {
.footer-col {border-right:1px solid #0286b9;padding:15px;}
.col2-card { width: 100%;}
.col1-card { padding-right: 20px;}
.content{ padding: 30px 10px;background: white;}
.site-toolbar { padding: 0px 20px;}

    }
</style>


