import UserService from "../service/UserService.js";

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
                                sessionStorage.setItem("Username", Uid);
                                sessionStorage.setItem("Id", user._id);
                                sessionStorage.setItem("Name", user._userFullName)
                                console.log(user._userFullName);
                            }
                            break;

                        }
                    }
                    if (ans == 1) {
                        alert("Success")
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


