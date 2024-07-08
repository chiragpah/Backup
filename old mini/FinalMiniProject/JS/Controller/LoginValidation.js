import UserService from "../Services/UserService.js";

$(document).ready(function () {
    $("#fNameError").hide();
    let UserNameError = true;
    $("#userId").keyup(function () {

        validateUserName();
    });
    function validateUserName() {
        let userId = $("#userId").val();
        let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
        if (regex.test(userId) != true) {
            $('#fNameError').show();
            $("#fNameError").text("*Enter Email in correct format*");
            $("#fNameError").css("color", "red");
            UserNameError = false;
        }
        else {
            $("#fNameError").hide();
            return true;
        }
    }
    $("#Submitbtn").click(function () {
        let userIdData = $("#userId").val();
        let ans = 0;
        let passwordData = $("#userPassword").val();
        if (validateUserName()) {
            let response = UserService.getUserDetails()
                .then((response) => {
                    let userData = response.data;

                    for (let user of userData) {
                        let Uid = user._userId;
                        let pass = user._userPassword;
                        if (userIdData == Uid) {
                            if (passwordData == pass) {
                                ans = 1;
                                sessionStorage.setItem("Userid", Uid);

                                console.log(user._userFullName);
                            }
                            break;

                        }
                    }
                    if (ans == 1) {
                        window.location.href = "/HTML/Homepage.html";

                        if (sessionStorage.getItem("userid") == null) {
                            $("#signin").css("display", "block")
                        }
                        else {
                            $("#signin").css("display", "none")

                            $(".login_btn").append(`<div class="logout"><svg xmlns="http://www.w3.org/2000/svg" width="56" height="46" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                          </svg></div>`)


                        }
                    }
                    else {
                        alert("Wrong UserId or Password")
                    }




                })
                .catch((error) => {
                    console.log(error);
                })

        }
        else {
            return false;
        }
    })

})


