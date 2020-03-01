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
      <div style="text-align: left; display: block; font-weight: bold; font-family: arial; color:#58595b; font-size: 22px;">
		Business Name And Mailing Address For Bid Solicitations
	<div style="width: 100%; height: 2px; font-size: 2px; background-color: #ccc;"> </div>

         <td class="FormTextFont" colspan="1" valign="top">
			<p><span class="FormLabelFontRequired" style="color:red;">*</span><span style="font-size:14px;">indicates required fields.</span></p>	
			</td>
	</div>
  <form @submit.prevent = "toThankYou" class="form-card">
<table summary="Display Form" width="100%" cellspacing="1" cellpadding="0" border="0" align="center">
		<tbody>

		<tr>
			<td class="FormDynamicStyle_2446" width="100%" valign="top">
				<div style="text-align: left; width: 100%;">
					<label style="font-size:15px;font-weight:500;">Company Name:<span class="FormLabelFontRequired" style="color:red;">*</span></label>
				</div>
				<div style="text-align: left; width: 100%;">
					<input v-model = "CompanyName" alt="Company Name:" title="Company Name:" type="text" id="e_2446" size="30" maxlength="255" style="font-size:14px;width: 80%; padding-left:10px; height:45px; border: 1px solid #b7b7b7" required>
				</div>
			</td>
		</tr>
		<tr>
			<td class="FormDynamicStyle_2446" width="100%" valign="top">
				<div style="text-align: left; width: 100%;">
					<label style="font-size:15px;font-weight:500;">Mailing Address One:<span class="FormLabelFontRequired" style="color:red;">*</span></label>
				</div>
				<div style="text-align: left; width: 100%;">
					<input v-model = "MailingAddressA1" alt="Mailing Address One:" title="Mailing Address One:" type="text" id="e_2446" size="30" maxlength="255" style="font-size:14px;width: 80%;padding-left:10px; height:45px; border: 1px solid #b7b7b7" required>
				</div>
			</td>
		</tr>
		<tr>
			<td class="FormDynamicStyle_2446" width="100%" valign="top">
				<div style="text-align: left; width: 100%;">
					<label style="font-size:15px;font-weight:500;">Mailing Address Two:<span class="FormLabelFontRequired" style="color:red;"></span></label>
				</div>
				<div style="text-align: left; width: 100%;">
					<input v-model = "MailingAddressA2" alt="Mailing Address Two:" title="Mailing Address Two:" type="text" id="e_2446" name="add2" size="30" maxlength="255" style="font-size:14px;width: 60%;padding-left:10px; height:45px; border: 1px solid #b7b7b7">
				</div>
			</td>
		</tr>
		<tr>
			<td class="FormDynamicStyle_2446" width="100%" valign="top">
				<div style="text-align: left; width: 100%;">
					<label style="font-size:15px;font-weight:500;">City:<span class="FormLabelFontRequired" style="color:red;">*</span></label>
				</div>
				<div style="text-align: left; width: 100%;">
					<input v-model = "City1" alt="City:" title="City:" type="text" id="e_2446"  size="30" maxlength="255" required style="font-size:14px;width: 40%;padding-left:10px; height:45px; border: 1px solid #b7b7b7">
				</div>
			</td>
		</tr>
		<tr>
			<td class="FormDynamicStyle_2446" width="100%" valign="top">
				<div style="text-align: left; width: 100%;">
					<label style="font-size:15px;font-weight:500;">State:<span class="FormLabelFontRequired" style="color:red;">*</span></label>
				</div>
				<div style="text-align: left; width: 100%;">
					<select v-model = "State1"  id="vendorState" type="text" alt="State" title="State:" style="font-size:14px;width: 80%;padding-left:10px; height:45px; border: 1px solid #b7b7b7" required>
   <option  style="font-size:14px;" value="">&nbsp;</option>
              <option  style="font-size:14px;" value="AL">Alabama</option>
              <option  style="font-size:14px;" value="AK">Alaska</option>
              <option  style="font-size:14px;" value="AZ">Arizona</option>
              <option  style="font-size:14px;" value="AR">Arkansas</option>
              <option  style="font-size:14px;" value="CA">California</option>
              <option  style="font-size:14px;" value="CO">Colorado</option>
              <option  style="font-size:14px;" value="CT">Connecticut</option>
              <option  style="font-size:14px;" value="DC">DC</option>
              <option  style="font-size:14px;" value="DE">Delaware</option>
              <option  style="font-size:14px;" value="FL">Florida</option>           
              <option  style="font-size:14px;" value="GA">Georgia</option>  
              <option  style="font-size:14px;" value="HI">Hawaii</option>        
              <option  style="font-size:14px;" value="ID">Idaho</option>         
              <option  style="font-size:14px;" value="IL">Illinois</option>         
              <option  style="font-size:14px;" value="IN">Indiana</option>               
              <option  style="font-size:14px;" value="IA">Iowa</option>              
              <option  style="font-size:14px;" value="KS">Kansas</option>
              <option  style="font-size:14px;" value="KY">Kentucky</option>               
              <option  style="font-size:14px;" value="LA">Louisiana</option>           
              <option  style="font-size:14px;" value="ME">Maine</option>
              <option  style="font-size:14px;" value="MD">Maryland</option>        
              <option  style="font-size:14px;" value="MA">Massachusetts</option>        
              <option  style="font-size:14px;" value="MI">Michigan</option>
              <option  style="font-size:14px;" value="MN">Minnesota</option>
              <option  style="font-size:14px;" value="MS">Mississippi</option>        
              <option  style="font-size:14px;" value="MO">Missouri</option>      
              <option  style="font-size:14px;" value="MT">Montana</option>        
              <option  style="font-size:14px;" value="NE">Nebraska</option> 
              <option  style="font-size:14px;" value="NV">Nevada</option>  
              <option  style="font-size:14px;" value="NH">New Hampshire</option>
              <option  style="font-size:14px;" value="NJ">New Jersey</option>
              <option  style="font-size:14px;" value="NM">New Mexico</option>
              <option  style="font-size:14px;" value="NY">New York</option>
              <option  style="font-size:14px;" value="NC">North Carolina</option>
              <option  style="font-size:14px;" value="ND">North Dakota</option>
              <option  style="font-size:14px;" value="OH">Ohio</option>
              <option  style="font-size:14px;" value="OK">Oklahoma</option>
              <option  style="font-size:14px;" value="OR">Oregon</option>
              <option  style="font-size:14px;" value="PA">Pennsylvania</option>
              <option  style="font-size:14px;" value="PR">Puerto Rico</option>
              <option  style="font-size:14px;" value="RI">Rhode Island</option>
              <option  style="font-size:14px;" value="SC">South Carolina</option>
              <option  style="font-size:14px;" value="SD">South Dakota</option>
              <option  style="font-size:14px;" value="TN">Tennessee</option>
              <option  style="font-size:14px;" value="TX">Texas</option>
              <option  style="font-size:14px;" value="UT">Utah</option>
              <option  style="font-size:14px;" value="VT">Vermont</option>
              <option  style="font-size:14px;" value="VI">Virgin Islands</option>
              <option  style="font-size:14px;" value="VA">Virginia</option>
              <option  style="font-size:14px;" value="WA">Washington</option>
              <option  style="font-size:14px;" value="WV">West Virginia</option>
              <option  style="font-size:14px;" value="WI">Wisconsin</option>
              <option  style="font-size:14px;" value="WY">Wyoming</option>
              <option  style="font-size:14px;" value="AE">Armed Forces Europe</option>
              <option  style="font-size:14px;" value="AP">Armed Forces Pacific</option>
              <option  style="font-size:14px;" value="AA">Armed Forces Americas</option>    
</select>
				</div>
			</td>
		</tr>
		<tr>
			<td class="FormDynamicStyle_2446" width="100%" valign="top">
				<div style="text-align: left; width: 100%;">
					<label style="font-size:15px;font-weight:500;">Zip:<span class="FormLabelFontRequired" style="color:red;">*</span></label>
				</div>
				<div style="text-align: left; width: 100%;">
					<input v-model = "Zip1" alt="Zip:" title="Zip:" type="text" id="e_2446" name="zip" size="30" maxlength="255" style="font-size:14px;width: 40%;padding-left:10px; height:45px; border: 1px solid #b7b7b7" required>
				</div>
			</td>
		</tr>
		<tr>
			<td class="FormDynamicStyle_2446" width="100%" valign="top">
				<div style="text-align: left; width: 100%;">
					<label style="font-size:15px;font-weight:500;">Contact Name:<span class="FormLabelFontRequired" style="color:red;">*</span></label>
				</div>
				<div style="text-align: left; width: 100%;">
					<input v-model = "ContactName" alt="Contact Name:" title="Contact Name:" type="text" id="e_2446" name="name" size="30" maxlength="255" style="font-size:14px;width: 80%;padding-left:10px; height:45px; border: 1px solid #b7b7b7" required>
				</div>
			</td>
		</tr>
		<tr>
			<td class="FormDynamicStyle_2446" width="100%" valign="top">
				<div style="text-align: left; width: 100%;">
					<label style="font-size:15px;font-weight:500;">Phone Number:<span class="FormLabelFontRequired" style="color:red;">*</span></label>
				</div>
				<div style="text-align: left; width: 100%;">
					<input v-model = "PhoneNumber" alt="Phone Number:" title="Phone Number:" type="text" id="e_2446" name="phone" size="30" maxlength="255" style="font-size:14px;width: 40%;padding-left:10px; height:45px; border: 1px solid #b7b7b7" required>
				</div>
			</td>
		</tr>
		<tr>
			<td class="FormDynamicStyle_2446" width="100%" valign="top">
				<div style="text-align: left; width: 100%;">
					<label style="font-size:15px;font-weight:500;">Fax Number:<span class="FormLabelFontRequired" style="color:red;"></span></label>
				</div>
				<div style="text-align: left; width: 100%;">
					<input v-model = "FaxNumber" alt="Fax Number:" title="Fax Number:" type="text" id="e_2446" name="fax" size="30" maxlength="255" style="font-size:14px;width: 40%;padding-left:10px; height:45px; border: 1px solid #b7b7b7">
				</div>
			</td>
		</tr>
		<tr>
			<td class="FormDynamicStyle_2446" width="100%" valign="top">
				<div style="text-align: left; width: 100%;">
					<label style="font-size:15px;font-weight:500;">Email Address:<span class="FormLabelFontRequired" style="color:red;">*</span></label>
				</div>
				<div style="text-align: left; width: 100%;">
					<input v-model = "EmailAddress" alt="Email Address:" title="Email Address:" type="text" id="e_2446" name="email" size="30" maxlength="255" style="font-size:14px;width: 80%;padding-left:10px; height:45px; border: 1px solid #b7b7b7" required>
				</div>
			</td>
		</tr>
<br>
		<tr>
			<td class="FormDynamicStyle_2446" width="100%" valign="top">
	<div style="text-align: left; display: block; font-weight: bold; font-family: arial; color:#58595b; font-size: 22px;">
		Mailing Address For Payments
	<div style="width: 100%; height: 2px; font-size: 2px; background-color: #ccc;"> </div><br>
	</div>
			</td>
</tr>


	<tr>
			<td class="FormDynamicStyle_2446" width="100%" valign="top">
				<div style="text-align: left; width: 100%;">
					<label style="font-size:15px;font-weight:500;">Is the mailing address for payments the same as the address above?:<span class="FormLabelFontRequired" style="color:red;">*</span></label>
				</div>
				<div style="text-align: left; width: 100%;">
					<select v-model = "MailingQuestion" name="sameAddressFlag" id="sameAddressFlag" style="font-size:14px;width: 80%;padding-left:10px; height:45px; border: 1px solid #b7b7b7" required>
                                          <option  style="font-size:14px;" value="YES" selected="selected">
      <!-- only in edit mode if there is no body replacement text -->
<span style="font-size:14px;"  >Yes</span></option>
                                          <option  style="font-size:14px;" value="No">
      <!-- only in edit mode if there is no body replacement text -->
<span style="font-size:14px;"  >No</span></option>
                                       </select>
                                    </div>
                              
			</td>
		</tr>

		<tr>
			<td class="FormDynamicStyle_2446" width="100%" valign="top">
				<div style="text-align: left; width: 100%;">
					<label style="font-size:15px;font-weight:500;">Mailing Address One:<span class="FormLabelFontRequired"></span></label>
				</div>
				<div style="text-align: left; width: 100%;">
					<input v-model = "MailingAddressB1" alt="Mailing Address One:" title="Mailing Address One:" type="text" id="e_2448" name="addd" size="30" maxlength="255"  style="font-size:14px;width: 60%;padding-left:10px; height:45px; border: 1px solid #b7b7b7">
				</div>
			</td>
				</tr>
	<tr>
			<td class="FormDynamicStyle_2446" width="100%" valign="top">
				<div style="text-align: left; width: 100%;">
					<label style="font-size:15px;font-weight:500;">Mailing Address Two:<span class="FormLabelFontRequired"></span></label>
				</div>
				<div style="text-align: left; width: 100%;">
					<input v-model = "MailingAddressB2" alt="Mailing Address Two:" title="Mailing Address Two:" type="text" id="e_2448" name="addd2" size="30" maxlength="255" style="font-size:14px;width: 60%;padding-left:10px; height:45px; border: 1px solid #b7b7b7">
				</div>
			</td>
		</tr>
	<tr>
			<td class="FormDynamicStyle_2446" width="100%" valign="top">
				<div style="text-align: left; width: 100%;">
					<label style="font-size:15px;font-weight:500;">City:<span class="FormLabelFontRequired"></span></label>
				</div>
				<div style="text-align: left; width: 100%;">
					<input v-model = "City2" alt="City:" title="City:" type="text" id="e_2448" name="city2" size="30" maxlength="255" style="font-size:14px;width: 60%;padding-left:10px; height:45px; border: 1px solid #b7b7b7">
				</div>
			</td>
		</tr>
	<tr>
			<td class="FormDynamicStyle_2446" width="100%" valign="top">
				<div style="text-align: left; width: 100%;">
					<label style="font-size:15px;font-weight:500;">State:<span class="FormLabelFontRequired"></span></label>
				</div>
				<div style="text-align: left; width: 100%;">
					<select v-model = "State2" name="remitState" id="remitState" class="State" title="State" style="font-size:14px;width: 80%;padding-left:10px; height:45px; border: 1px solid #b7b7b7">
   <option  style="font-size:14px;" value="">&nbsp;</option>
               <option  style="font-size:14px;" value="AL">Alabama</option>
              <option  style="font-size:14px;" value="AK">Alaska</option>
              <option  style="font-size:14px;" value="AZ">Arizona</option>
              <option  style="font-size:14px;" value="AR">Arkansas</option>
              <option  style="font-size:14px;" value="CA">California</option>
              <option  style="font-size:14px;" value="CO">Colorado</option>
              <option  style="font-size:14px;" value="CT">Connecticut</option>
              <option  style="font-size:14px;" value="DC">DC</option>
              <option  style="font-size:14px;" value="DE">Delaware</option>
              <option  style="font-size:14px;" value="FL">Florida</option>           
              <option  style="font-size:14px;" value="GA">Georgia</option>  
              <option  style="font-size:14px;" value="HI">Hawaii</option>        
              <option  style="font-size:14px;" value="ID">Idaho</option>         
              <option  style="font-size:14px;" value="IL">Illinois</option>         
              <option  style="font-size:14px;" value="IN">Indiana</option>               
              <option  style="font-size:14px;" value="IA">Iowa</option>              
              <option  style="font-size:14px;" value="KS">Kansas</option>
              <option  style="font-size:14px;" value="KY">Kentucky</option>               
              <option  style="font-size:14px;" value="LA">Louisiana</option>           
              <option  style="font-size:14px;" value="ME">Maine</option>
              <option  style="font-size:14px;" value="MD">Maryland</option>        
              <option  style="font-size:14px;" value="MA">Massachusetts</option>        
              <option  style="font-size:14px;" value="MI">Michigan</option>
              <option  style="font-size:14px;" value="MN">Minnesota</option>
              <option  style="font-size:14px;" value="MS">Mississippi</option>        
              <option  style="font-size:14px;" value="MO">Missouri</option>      
              <option  style="font-size:14px;" value="MT">Montana</option>        
              <option  style="font-size:14px;" value="NE">Nebraska</option> 
              <option  style="font-size:14px;" value="NV">Nevada</option>  
              <option  style="font-size:14px;" value="NH">New Hampshire</option>
              <option  style="font-size:14px;" value="NJ">New Jersey</option>
              <option  style="font-size:14px;" value="NM">New Mexico</option>
              <option  style="font-size:14px;" value="NY">New York</option>
              <option  style="font-size:14px;" value="NC">North Carolina</option>
              <option  style="font-size:14px;" value="ND">North Dakota</option>
              <option  style="font-size:14px;" value="OH">Ohio</option>
              <option  style="font-size:14px;" value="OK">Oklahoma</option>
              <option  style="font-size:14px;" value="OR">Oregon</option>
              <option  style="font-size:14px;" value="PA">Pennsylvania</option>
              <option  style="font-size:14px;" value="PR">Puerto Rico</option>
              <option  style="font-size:14px;" value="RI">Rhode Island</option>
              <option  style="font-size:14px;" value="SC">South Carolina</option>
              <option  style="font-size:14px;" value="SD">South Dakota</option>
              <option  style="font-size:14px;" value="TN">Tennessee</option>
              <option  style="font-size:14px;" value="TX">Texas</option>
              <option  style="font-size:14px;" value="UT">Utah</option>
              <option  style="font-size:14px;" value="VT">Vermont</option>
              <option  style="font-size:14px;" value="VI">Virgin Islands</option>
              <option  style="font-size:14px;" value="VA">Virginia</option>
              <option  style="font-size:14px;" value="WA">Washington</option>
              <option  style="font-size:14px;" value="WV">West Virginia</option>
              <option  style="font-size:14px;" value="WI">Wisconsin</option>
              <option  style="font-size:14px;" value="WY">Wyoming</option>
              <option  style="font-size:14px;" value="AE">Armed Forces Europe</option>
              <option  style="font-size:14px;" value="AP">Armed Forces Pacific</option>
              <option  style="font-size:14px;" value="AA">Armed Forces Americas</option>   
</select>
                                    </div>
			</td>
		</tr>

		<tr>
			<td class="FormDynamicStyle_2446" width="100%" valign="top">
				<div style="text-align: left; width: 100%;">
					<label style="font-size:15px;font-weight:500;">Zip:<span class="FormLabelFontRequired"></span></label>
				</div>
				<div style="text-align: left; width: 100%;">
					<input v-model = "Zip2" alt="Zip:" title="Zip:" type="text" id="e_2448" name="zip2" size="30" maxlength="255" style="font-size:14px;width: 60%;padding-left:10px; height:45px; border: 1px solid #b7b7b7">
				</div>
			</td>
				</tr>
          <br>
		<tr>
			<td class="FormDynamicStyle_2446" width="100%" valign="top">
	<div style="text-align: left; display: block; font-weight: bold; font-family: arial; color:#58595b; font-size: 22px;">
		Tax Information
	<div style="width: 100%; height: 2px; font-size: 2px; background-color: #ccc;"> </div><br>
	</div>
			</td>
</tr>


		<tr>
			<td class="FormDynamicStyle_2446" width="100%" valign="top">
				<div style="text-align: left; width: 100%;">
					<label style="font-size:15px;font-weight:500;">Tax ID Designator:<span class="FormLabelFontRequired" style="color:red;">*</span></label>
				</div>
				<div style="text-align: left; width: 100%;">
					<select v-model = "TaxDesignator" name="taxIdType" id="taxIdType" style="font-size:14px; width: 80%;padding-left:10px; height:45px; border: 1px solid #b7b7b7" required>
                                           
                                                <option  style="font-size:14px;" value="Federal" >

      <!-- only in edit mode if there is no body replacement text -->
<span style="font-size:14px;"  >Federal Tax ID:</span></option>                                         
                                             
                                                <option  style="font-size:14px;" value="SSN" >
      
      <!-- only in edit mode if there is no body replacement text -->
<span style="font-size:14px;" >Social Security Number</span></option>                                             
                                       </select>
									   <i class="form-control-feedback glyphicon"></i>
										<div class="help-block with-errors"></div>
                                    </div>
                               
			</td>
		</tr>

		<tr>
			<td class="FormDynamicStyle_2446" width="100%" valign="top">
				<div style="text-align: left; width: 100%;">
					<label style="font-size:15px;font-weight:500;">Tax ID:<span class="FormLabelFontRequired" style="color:red;">*</span></label>
				</div>
				<div style="text-align: left; width: 100%;">
					<input v-model = "TaxId" alt="Tax ID:" title="Tax ID:" type="text" id="e_2446" name="taxid" size="30" maxlength="255" required style="font-size:14px; width: 40%;padding-left:10px; height:45px; border: 1px solid #b7b7b7">
				</div>
			</td>
		</tr>

		<tr>
			<td class="FormDynamicStyle_2446" width="100%" valign="top">
				<div style="text-align: left; width: 100%;">
					<label style="font-size:15px;font-weight:500;">Type:<span class="FormLabelFontRequired" style="color:red;">*</span></label>
				</div>
				<div style="text-align: left; width: 100%;">
					<select v-model = "Type" name="indvlOrBusiness" id="indvlOrBusiness" style="font-size:14px; width: 40%;padding-left:10px; height:45px; border: 1px solid #b7b7b7" required>                           
                                                <option  style="font-size:14px;" value="Individual" >

      <!-- only in edit mode if there is no body replacement text -->

<span style="font-size:14px;" >Individual</span></option>                                 
                                                <option  style="font-size:14px;" value="Business">
      <!-- only in edit mode if there is no body replacement text -->
<span  style="font-size:14px;" >Business</span></option>                                        
                                       </select>
									   <i class="form-control-feedback glyphicon"></i>
										<div class="help-block with-errors"></div>
                                    </div>
			</td>
				</tr>
		<tr>
			<td class="FormDynamicStyle_2446" width="100%" valign="top">
				<div style="text-align: left; width: 100%;">
					<label style="font-size:15px;font-weight:500;">Minority Status:<span class="FormLabelFontRequired" style="color:red;">*</span></label>
				</div>
				<div style="text-align: left; width: 100%;">
					<select v-model = "Status" alt="Minority Status:" title="Minority Status:" id="e_2448" name="ms" style="font-size:14px;width: 80%;padding-left:10px; height:45px; border: 1px solid #b7b7b7"  required><option value=""  selected="selected"  style="font-size:14px;"></option>
                                                   <option  style="font-size:14px;" value="ASIAN-PACIFIC AMERICAN">ASIAN-PACIFIC AMERICAN</option>
                                                   <option  style="font-size:14px;" value="BLACK AMERICAN">BLACK AMERICAN</option>
                                                
                                                   <option  style="font-size:14px;" value="CAUCASIAN OWNED" v>CAUCASIAN OWNED</option>
                                                   <option  style="font-size:14px;" value="ASIAN">ASIAN</option>
                                                   <option  style="font-size:14px;" value="NATIVE AMERICAN">NATIVE AMERICAN</option>
                                                   <option  style="font-size:14px;" value="FEMALE">FEMALE</option>
                                                   <option  style="font-size:14px;" value="TWO OR MORE RACES">TWO OR MORE RACES</option>
                                                   <option  style="font-size:14px;" value="HISPANIC AMERICAN">HISPANIC AMERICAN</option>
                                                   <option  style="font-size:14px;" value="SECTION (3) PARTICIPATION">SECTION (3) PARTICIPATION</option>
                                                   <option  style="font-size:14px;" value="CAUCASIAN OWNED/SECTION 3">CAUCASIAN OWNED/SECTION 3</option>
                                                   <option  style="font-size:14px;" value="CAUCASIAN/WOMEN OWNED">CAUCASIAN/WOMEN OWNED</option>
                                                   <option  style="font-size:14px;" value="LOCALLY OWNED">LOCALLY OWNED</option>               
                                                   <option  style="font-size:14px;" value="NON-MINORITY">NON-MINORITY</option>
                                                   <option  style="font-size:14px;" value="NONE">NONE</option>
                                                   <option  style="font-size:14px;" value="OTHER">OTHER</option>
                                                   <option  style="font-size:14px;" value="ALIEN/ASIAN OWNED">ALIEN/ASIAN OWNED</option>
                                                   <option  style="font-size:14px;" value="ALIEN/NATIVE AMERI/ALASKA">ALIEN/NATIVE AMERI/ALASKA</option>
                                                   <option  style="font-size:14px;" value="ALIEN/NATV HAWAII/PAC ISL">ALIEN/NATV HAWAII/PAC ISL</option>
                                                   <option  style="font-size:14px;" value="SUBCONTINENT ASIAN AMERIC">SUBCONTINENT ASIAN AMERIC</option>
                                                   <option  style="font-size:14px;" value="ALIEN/LOCALLY OWNED">ALIEN/LOCALLY OWNED</option>
                                                   <option  style="font-size:14px;" value="ALIEN/WOMEN OWNED">ALIEN/WOMEN OWNED</option>
                                                   <option  style="font-size:14px;" value="BLACK/CAUCASIAN OWNED">BLACK/CAUCASIAN OWNED</option>
                                                   <option  style="font-size:14px;" value="WOMEN OWNED">WOMEN OWNED</option>
                                                   <option  style="font-size:14px;" value="BLACK/ASIAN OWNED">BLACK/ASIAN OWNED</option>
                                                   <option  style="font-size:14px;" value="BLCK/NATV AMER IND/ALSK">BLCK/NATV AMER IND/ALSK</option>
                                                   <option  style="font-size:14px;" value="BLCK/NATV AMR IND/PAC ISL">BLCK/NATV AMR IND/PAC ISL</option>
                                                   <option  style="font-size:14px;" value="CAUCASIAN/LOCALLY OWNED">CAUCASIAN/LOCALLY OWNED</option>
                                                   <option  style="font-size:14px;" value="BLACK/HISPANIC OWNED">BLACK/HISPANIC OWNED</option>
                                                   <option  style="font-size:14px;" value="BLACK/WOMEN OWNED">BLACK/WOMEN OWNED</option>
                                                   <option  style="font-size:14px;" value="BLACK/LOCALLY OWNED">BLACK/LOCALLY OWNED</option>
                                                   <option  style="font-size:14px;" value="BLACK OWNED/SECTION 3">BLACK OWNED/SECTION 3</option>
                                                   <option  style="font-size:14px;" value="ALIEN OWNED/SECTION 3">ALIEN OWNED/SECTION 3</option>
                                                   <option  style="font-size:14px;" value="CAUCASIA//ASIAN OWNED">CAUCASIA//ASIAN OWNED</option>
                                                   <option  style="font-size:14px;" value="CAUCASIAN/NATV AMR IND/AL">CAUCASIAN/NATV AMR IND/AL</option>
                                                   <option  style="font-size:14px;" value="CAUCSN/NAT AMR IND/PAC IS">CAUCSN/NAT AMR IND/PAC IS</option>
                                                   <option  style="font-size:14px;" value="CAUCASIAN/HISPANIC OWNED">CAUCASIAN/HISPANIC OWNED</option>
                                       </select>
				</div>
			</td>
				</tr>
		<tr>
			<td class="FormDynamicStyle_2446" width="100%" valign="top">
				<div style="text-align: left; width: 100%;">
					<label style="font-size:15px;font-weight:500;">Number of Employees:<span class="FormLabelFontRequired" style="color:red;">*</span></label>
				</div>
				<div style="text-align: left; width: 100%;">
					<input v-model = "Employees" alt="Number of Employees:" title="Number of Employees:" type="text" id="e_2448" name="ne" size="30" maxlength="255" style="font-size:14px;width: 40%;padding-left:10px; height:45px; border: 1px solid #b7b7b7" required>
				</div>
			</td>
				</tr>
        <br>
        <br>
        		<tr>
<Button style="padding:15px 0px;background:#0071bc;color:white;width:250px;font-size:20px;" type="submit" align="center">Submit</Button>
        </tr>
		</tbody>
</table>
  </form>
  <br><br>
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
   
     <div style="background:#0d3f5c;color:white;height:300px;">
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
export default {
    data(){
  return{
    CompanyName: '',
    MailingAddressA1: '',
    MailingAddressA2: '',
    City1: '',
    State1: '',
    Zip1: '',
    ContactName: '',
    PhoneNumber:'',
    FaxNumber: '',
    EmailAddress:'',
    MailingQuestion:'',
     MailingAddressB1: '',
    MailingAddressB2: '',
    City2: '',
    State2: '',
    Zip2: '',
    TaxDesignator: '',
    TaxId: '',
    Type: '',
    Status: '',
    Employees: '',
  }
},
    methods:{
        toThankYou(){
    this.$store.commit('addCompanyName', this.CompanyName)
     this.$store.commit('addMailingAddressA1', this.MailingAddressA1)
     this.$store.commit('addMailingAddressA2', this.MailingAddressA2)
     this.$store.commit('addCity1', this.City1)
     this.$store.commit('addState1', this.State1)
     this.$store.commit('addZip1', this.Zip1)
     this.$store.commit('addContactName', this.ContactName)
     this.$store.commit('addPhoneNumber', this.PhoneNumber)
     this.$store.commit('addFaxNumber', this.FaxNumber)
     this.$store.commit('addEmailAddress', this.EmailAddress)
     this.$store.commit('addMailingQuestion', this.MailingQuestion)
     this.$store.commit('addMailingAddressB1', this.MailingAddressB1)
     this.$store.commit('addMailingAddressB2', this.MailingAddressB2)
     this.$store.commit('addCity2', this.City2)
     this.$store.commit('addState2', this.State2)
     this.$store.commit('addZip2', this.Zip2)
     this.$store.commit('addTaxDesignator', this.TaxDesignator)
     this.$store.commit('addTaxId', this.TaxDesignator)
     this.$store.commit('addType', this.Type)
     this.$store.commit('addStatus', this.Status)
     this.$store.commit('addEmployees', this.Employees)
      this.$router.push("/online-services/registration/thank-you")
  },
        to1(){
        window.location.assign('https://www.denvergov.org/content/denvergov/en/city-of-denver-home/neighborhood-services.html')
        },
        to2(){
        window.location.assign('https://purchasing.barnstablecounty.org/bids-proposals/')
        },
        to3(){
        window.location.assign('https://purchasing.barnstablecounty.org/cape-procurement-officials/')
        },
        to4(){
        window.location.assign('https://purchasing.barnstablecounty.org/contact-us/')
        },
        to5(){
        window.location.assign('http://purchasingmain.wpengine.com/links/')
        },
         to6(){
        window.location.assign('https://www.denvergov.org/content/denvergov/en/city-of-denver-home/directory.html')
        },
    }
}
</script>

<style scoped>
.nav {}
.nav:hover { background-color: #0c83ff;}
.footer-col {letter-spacing:1px;padding:0px;font-size: 18px;color: rgb(212, 212, 212);text-decoration: underline;line-height: 300px;}
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
.footer-col {padding:15px;}
.col2-card { width: 100%;}
.col1-card { padding-right: 20px;}
.content{ padding: 30px 10px;background: white;}
.site-toolbar { padding: 0px 20px;}

    }
</style>


