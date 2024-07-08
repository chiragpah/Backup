import Customer from "../model/Customer.js";
import CustomerService from "../service/Customer_service.js";

$(document).ready(function () {
    $(".registerbtn").click(
        function () {
            let c_name = $("#txt_name").val();
            let c_addres = $("#txt_add").val();
            let c_contact = $("#contact").val();
            let c_gender = "";
            let c_email = $("#email").val();
            let c_dob = $("#dob").val();
            let c_pass = $("#pass").val();

            if ($("#male").is(':checked')) {
                c_gender = $("#male").val();
                // console.log($("#male").val());
            }
            else if ($("#female").is(':checked')) {
                c_gender = $("#female").val();
                // console.log($("#female").val());
            }
            //create object of customer model(class)
            let customer = new Customer();
            customer.customerName = c_name;    // calling the setter property, not variable(_customerName)
            customer.address = c_addres;
            customer.date_of_birth = c_dob;
            customer.cont = c_contact;
            customer.gender = c_gender;
            customer.email = c_email;
            customer.password = c_pass;
            console.log(customer);
            CustomerService.addCustomerDetails(customer).then((response) => {
                console.log(response);
            }).catch((error) => {
                console.log(error);
            })
        })
})