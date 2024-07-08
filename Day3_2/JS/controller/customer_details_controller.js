import CustomerService from "../service/Customer_service.js";

$(document).ready(function () {
    let response = CustomerService.getCustomerDetails()
        .then((response) => {
            $(".cust_info").html("<table class='cust_table'></table>")
            $(".cust_table").html("<tr><th>ID</th><th>Name</th><th>Email</th><th>Gender</th><th>DOB</th></tr>")
            $(".cust_table").css({ "border": "1px solid black" })
            $("th").css({ "border": "1px solid black" })
            let customer = response.data;
            for (let cust of customer) {
                let row = `<tr><td> ${cust.id}</td><td>${cust._customerName}</td><td>${cust._email}</td><td>${cust._gender}</td><td>${cust._date_of_birth}</td></tr>`
                $(".cust_table").append(row)
            }
            $("td").css({ "border": "1px solid black" })

            //     console.log(response);
        })
        .catch((error) => {
            console.log(error);
        })
})

