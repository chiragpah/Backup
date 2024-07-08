$(document).ready(function () {

    var emailError = $("#emailError");
    var flag = true;

    $('#loginEmail').keyup(() => {
        if (IsEmail($('#loginEmail').val()) == false) {
            emailError.text("Please enter valid email with .com");
            flag = false;
        } else {
            emailError.text("");
            flag = true;
        }
      })

    $('#forgetPassword').submit(function (event) {
        event.preventDefault();

        const email = $("#loginEmail").val();

        sessionStorage.setItem("userId", email);

        if(flag == true){

        axios.get('http://localhost:3000/UserInfo')
            .then(response => {
                var flag = 0;
                response.data.forEach(element => {
                    if(element._userId == email){

                        console.log("User ID matched");
                        sessionStorage.setItem("userID", element.id)
                        window.location.replace("otp.html")
                        flag = 1;
                    }
                });
                if(flag == 0){
                    $("#emailError").text("Email not found. Please register to login.");
                }

            })

            .catch(error => {
                console.error('Forget Password failed:', error);
            });
        }

    });
});

function IsEmail(email) {
    var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!regex.test(email)) {
        return false;
    }
    else {
        return true;
    }
}