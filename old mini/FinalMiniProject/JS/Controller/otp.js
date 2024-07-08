$(document).ready(function () {
    $('#otpForm').submit(function (event) {
        event.preventDefault();

        const otp = $("#otp").val();

        // sessionStorage.setItem("email", email);
        const newOTP = "123456";

        if(otp == newOTP) {
            console.log("success");
            window.location.replace("changeResetPassword.html")
        }
        else{
            $("#wrongOTP").text("Please enter the correct OTP.");
        }
    });
});