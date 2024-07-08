import Customer from "../model/Customer.js";
import CustomerService from "../service/CustomerService.js";




$(document).ready(function(){

        $('.submit').click(function(){
            // read values from html
            let name= $('.name').val();
            let email= $('.email').val();
            let dob=  $('.dob').val();
            let address= $('.Address').val();
            let gender= "";
            let contact = $('.contact').val();
    // is() to check whether it is selecetd or not
            if($('.male').is(':checked')){
                gender=$(".male").val();
    
            }
            else if($('.female').is(':checked')){
                gender=$("female").val();
            }
           
            // create object of Customer model(class)
            let customer=new Customer();
            console.log("Customer Object:",customer);
            customer.customerName=name;
            customer.gender =gender ;
            customer.DOB =dob;
            customer.email=email;
            customer.password=password;
            customer.contact=contact;
            customer.address=address;
            console.log("Customer Object:",customer);
 

            // call service method that gets the data holded by CustomerService.js in model which hold the data temporary
            CustomerService.addCustomerDetails(customer).then(response=>{
                console.log(response);
            })
            .catch(error=>{
                console.log(error);
            })

})

})
// to export the customer class
// export default Customer;