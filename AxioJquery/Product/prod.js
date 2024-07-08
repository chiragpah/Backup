$(document).ready(function () {
    $(".registerbtn1").click(
        function () {
            let p_name = $("#txt_pname").val();
            let b_name = $("#txt_bname").val();
            let p_contact = $("#contact").val();
            let p_avail = "";
            let p_des= $("#desc").val();
           
            let p_file=$("#fil").val();

            if($("#yes").is(':checked')) {
                p_avail = $("#yes").val();
                // console.log($("#male").val());
            }
            else if($("#female").is(':checked')) {
                p_avail = $("#no").val();
                // console.log($("#female").val());
            }
            
            axios.post("http://localhost:3000/Products", {
                "name" : p_name,
                "Brand Name" : b_name,
                "Contact" : p_contact,
                "Availablity" : p_avail,
                "Description" : p_des,
                "File":p_file,
            }).then((res) => {
                console.log(res);
            }).catch((error) => {
                console.log(error);
            });
        })
    })