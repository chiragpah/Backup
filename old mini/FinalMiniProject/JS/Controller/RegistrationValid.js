// Validate ID

import UserClass from "/JS/Model/UserClass.js";
import UserService from "/JS/Services/UserService.js";
$(document).ready(function (event) {
    
   
    $("#uidError").hide();
    let Error = true;
    $("#uid").keyup(function () {
        validateUid();
    });


})

// Validate username done

$(document).ready(function () {
    $("#nameError").hide();
    let Error = true;
    $("#userName").keyup(function () {
        validateUser();
    });


})

//  // validate password done

$(document).ready(function () {
    $("#passError").hide();
    let Error = true;
    $("#password").keyup(function () {
        validatePass();
    });

})

// validate Confirm password done

$(document).ready(function () {
    $("#notSameError").hide();
    let confirmPasswordError = true;
    $("#cpassword").keyup(function () {
        validateConPass();
    });


})



// validate Phone done

$(document).ready(function () {
    $("#mobileError").hide();
    let Error = true;
    $("#mobile").keyup(function () {
        validatePhone();
    });


    $("#add_user").click(function (event) {
        event.preventDefault();
        if (validateUid() == false ||
            validateUser() == false ||
            validatePass() == false ||
            validateConPass() == false ||
            validatePhone() == false) {
            return false;
        }
        else {
            //   $('#SubmitForm').submit(function(event){
            // event.preventDefault();
            console.log("ELSE PART");
            const user_id = $('#uid').val();
            const user_FullName = $('#userName').val();
            const user_pass = $('#password').val();
            const user_mobileNo = $('#mobile').val();
            const user_favartist = $('#fav_artist').val();
            

            console.log(user_id, user_pass, user_favartist, user_mobileNo, user_FullName);
            let userDetail = new UserClass();
            userDetail.userId = user_id;    // calling the setter property, not variable(_userDetailName)
            userDetail.userFullName = user_FullName;
            userDetail.userPassword = user_pass;
            userDetail.userFavArtist = user_favartist;
            

            userDetail.userContact = user_mobileNo;
            console.log(userDetail);
            UserService.addUserDetails(userDetail).then((response) => {
                console.log(response);
            }).catch((error) => {
                console.log(error)
            })
            alert("Registration Success")
        }
    })
    // })

})

function validatePhone() {
    let mobValue = $("#mobile").val();
    if (mobValue.length < 1) {
        $("#mobileError").show();
        $("#mobileError").text("**Please enter something");
        Error = false;
        return false;
    }
    else if (mobValue.length < 3 || mobValue.length > 10) {
        $("#mobileError").show();
        $("#mobileError").text("**length of Phone Number must be between 10");
        Error = false;
        return false;
    }
    else if (mobValue.length == 10) {
        $("#mobileError").hide();
    }
    else {
        $("#mobileError").show();
        $("#mobileError").text("**length of Phone Number must be 10");
        Error = false;
        return false;
    }

}
function validateUid() {

    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let uidValue = $("#uid").val();
    if (regex.test(uidValue) != true) {
        $("#uidError").show();
        $("#uidError").text("Please enter the email in correct format");
        Error = false;
        return false;
    }
    else {
        $("#uidError").hide();

    }

}
function validateUser() {
    let userName = $("#userName").val();
    if (userName.length == "") {
        $("#nameError").show();
        $("#nameError").text("**Please enter something");
        Error = false;
        return false;
    } else if (userName.length < 3 || userName.length > 20) {
        $("#nameError").show();
        $("#nameError").text("**length of username must be between 3 and 20");

        Error = false;
        return false;
    } else {
        $("#nameError").hide();

    }
}

function validatePass() {
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;
    let userpassValue = $("#password").val();
    if (regex.test(userpassValue) != true) {
        $("#passError").show();
        $("#passError").text("Password must have alphanumeric, special characters and digit. Length must be more than 7.");
        return false;
    } else {
        $("#passError").hide();
        return true;
    }
}
function validateConPass() {
    let confirmPasswordValue = $("#cpassword").val();
    let passwordValue = $("#password").val();
    if (passwordValue != confirmPasswordValue) {
        $("#notSameError").show();
        $("#notSameError").text("**Password didn't Match");


        return false;
    } else {
        $("#notSameError").hide();
        return true;
    }
}
//   // Validate Submit button


