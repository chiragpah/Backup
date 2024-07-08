import CustomerService from "../service/CustomerService.js"

$(document).ready(function(){
// if we are not using then and ctach here it will be a promise and if we are not using it will fetch but not displaye on console
    CustomerService.getCustomerDetails()
    .then((response)=>{
           console.log(response)
           $('.cust-info').html("<table class='cust_table'></table>")
    
           $('.cust_table').html("<tr><th>ID</th><th>Name</th><th>Email</th><th>DOB</th><th>Address</th><th>Contact</th><th>Password</th></tr>");
       
       
            let customers =response.data ;
           
            let row;
            for(let cust of customers){
       
               row = `<tr>
               <td>${cust.id}</td>
               <td>${cust._cust_name}</td>
               <td>${cust._email}</td>
               <td>${cust._dob}</td>
               <td>${cust._address}</td>
               <td>${cust._contact}</td>
               <td>${cust._password}</td>
               </tr>`
            }
       
           //  append will add the row in table
          $(".cust_table").append(row);
    })
    .catch((error)=>{
     console.log(error);

    })
    
// referece of div
   

}
)