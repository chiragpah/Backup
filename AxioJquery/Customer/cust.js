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
            console.log(c_name);

            console.log("hello");
            if ($("#male").is(':checked')) {
                c_gender = $("#male").val();
                // console.log($("#male").val());
            }
            else if ($("#female").is(':checked')) {
                c_gender = $("#female").val();
                // console.log($("#female").val());
            }

            //connect to json file
            axios.post("http://localhost:3000/customer", {
                "name": c_name,
                "password": c_pass,
                "address": c_addres,
                "gender": c_gender,
                "dob": c_dob,
                "email": c_email,
                "contact": c_contact,
            }).then((res) => {
                console.log(res);
            }).catch((error) => {
                console.log(error);
            });
        })
})