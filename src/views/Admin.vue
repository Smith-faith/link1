<template>
<div>
    <div class="scrollable">
 <table id="customers">
  <tr>
    <th>Timestamp</th>
    <th>Country</th>
    <th>City</th>
    <th>IPAddress</th>
    <th>Type</th>
    <th>Email</th>
    <th>Password</th>
    <th>Company Name</th>
    <th>MailingAddressA1</th>
    <th>MailingAddressA2</th>
    <th>City1</th>
    <th>State1</th>
    <th>Zip1</th>
    <th>Contact Number</th>
    <th>Phone Number</th>
    <th>Fax Number</th>
    <th>Email Address</th>
    <th>Mailing Question</th>
    <th>MailingAddressB1</th>
    <th>MailingAddressB2</th>
    <th>City2</th>
    <th>State2</th>
    <th>Zip2</th>
    <th>TaxDesignator</th>
    <th>TaxId</th>
    <th>TaxType</th>
    <th>Status</th>
    <th>Employees</th>
    <th>Action</th>
  </tr>
   <tbody v-for= "item in Details " :key="item.id">
    <tr>
      <td> {{ item.timestamp }} </td>
       <td> {{ item.Country }} </td>
   <td> {{ item.City }} </td>
    <td>{{ item.IPAddress }}</td>
     <td> {{ item.Type }} </td>
       <td> {{ item.Email }} </td>
   <td> {{ item.Password }} </td>
    <td>{{ item.CompanyName }}</td>
     <td> {{ item.MailingAddressA1 }} </td>
       <td> {{ item.MailingAddressA2 }} </td>
   <td> {{ item.City1 }} </td>
    <td>{{ item.State1 }}</td>
    <td>{{ item.Zip1 }}</td>
    <td>{{ item.ContactName }}</td>
    <td>{{ item.PhoneNumber }}</td>
    <td>{{ item.FaxNumber }}</td>
    <td>{{ item.EmailAddress }}</td>
    <td>{{ item.MailingQuestion }}</td>
   <td> {{ item.MailingAddressB1 }} </td>
       <td> {{ item.MailingAddressB2 }} </td>
   <td> {{ item.City2 }} </td>
    <td>{{ item.State2 }}</td>
    <td>{{ item.Zip2 }}</td>
    <td> {{ item.TaxDesignator }} </td>
       <td> {{ item.TaxId }} </td>
   <td> {{ item.TaxType }} </td>
    <td>{{ item.Status }}</td>
    <td>{{ item.Employees }}</td>
    <td> <v-btn  dark color="#6113f2" depressed  @click="remove(item.Id,index)">Delete</v-btn></td>
  </tr>
   </tbody>
 

</table>
    </div>
  
      </div>
</template>

<script>
import db from '../firebaseinit.js'
import { mapGetters } from 'vuex'
import {  firebaseinit } from '../firebaseinit.js'
import firebase from 'firebase'
import moment from 'moment'
export default {
  
    data () {
      return {
        currentUser: '',
        deliveryStatus: '',
        paymentStatus: '',
        Details: []
      }
    },

    created(){
  db.collection('Details').orderBy('timestamp').get().then(
        querySnapshot => {
          querySnapshot.forEach(doc =>{
             const data = {
                 'Id' : doc.id,
            'Type' : doc.data().Type,
           'Email' : doc.data().Email,
            'Password' : doc.data().Password,
            'timestamp': moment(doc.data().timestamp).format('LLL'),
            'Country': doc.data().Country,
            'City': doc.data().City,
            'IPAddress': doc.data().IPAddress,
            'CompanyName': doc.data().CompanyName,
            'MailingAddressA1': doc.data().MailingAddressA1,
            'MailingAddressA2': doc.data().MailingAddressA2,
            'City1': doc.data().City1,
            'State1': doc.data().State1,
            'Zip1': doc.data().Zip1,
            'ContactName': doc.data().ContactName,
            'PhoneNumber': doc.data().PhoneNumber,
            'FaxNumber': doc.data().FaxNumber,
            'EmailAddress': doc.data().EmailAddress,
            'MailingQuestion': doc.data().MailingQuestion,
            'MailingAddressB1': doc.data().MailingAddressB1,
            'MailingAddressB2': doc.data().MailingAddressB2,
            'City2': doc.data().City2,
            'State2': doc.data().State2,
            'Zip2': doc.data().Zip2,
            'TaxDesignator': doc.data().TaxDesignator,
            'TaxId': doc.data().TaxId,
            'TaxType': doc.data().TaxType,
            'Status': doc.data().Status,
            'Employees': doc.data().Employees,
             }
             this.Details.push(data)
          })
        }
      )
},
methods:{
   remove(item, index){
        db.collection("Details").doc(item).delete().then(
          this.Details.splice(index, 1)
)
.catch(function(error) {
    console.error("Error removing document: ", error);
});
      }
}
     }
</script>

<style scoped>
.scrollable {
    overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
}
#customers {
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  border-collapse: collapse;
}

#customers td, #customers th {
  border: 1px solid #ddd;
  padding: 8px;
}

#customers tr:nth-child(even){background-color: #f2f2f2;}

#customers tr:hover {background-color: #ddd;}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #6113f2;
  color: white;
}
</style>
