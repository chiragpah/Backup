const apiUrls = 'http://localhost:3000/UserInfo'

$(document).ready(function () {

    var notSameError = $("#notSameError");
    var passError = $("#passError");
    var flag = true;

    $('#newPassword').keyup(() => {
        if (IsValidPass($('#newPassword').val()) == false) {
            passError.text("Password must have special char and a number");
            flag = false;
        } else {
            passError.text("");
            flag = true;
        }
    })

    $('#confirmPassword').keyup(() => {
        if ($('#newPassword').val() !== $('#confirmPassword').val()) {
            notSameError.text("Please enter same password");
            flag = false;
        } else {
            notSameError.text("");
            flag = true;
        }
    })


    $('#resetPassword').submit(function (event) {
        event.preventDefault();

        const newPassword = $("#newPassword").val();

        sessionStorage.setItem("newPassword", newPassword);
        const userID = sessionStorage.getItem("userID");
        console.log("user is outside"+userID)
        console.log("flag is "+flag)
        if (flag == true) {

            axios.get('http://localhost:3000/UserInfo')
                .then(response => {
                    // console.log("we are inside")
                    var flag = 0;
                    response.data.forEach(element => {
                        // console.log(userID,element.id)
                        if (element.id == userID) {
                            // console.log("userid is"+userID)
                            updatePassword(userID, newPassword);
                            // console.log("Password reset successfull");
                            setTimeout(() => {
                                alert("Password reset successfully");
                            }, 0);
                            window.location.href = "Homepage.html";
                            // window.location.replace("index.html");

                            flag = 1;
                        }
                    });
                    if (flag == 0) {
                        $("#wrongPassword").text("Username is not found. Please register to login.");
                    }

                })

                .catch(error => {
                    console.error('changeResetPassword failed:', error);
                });
        }

    });
});

function updatePassword(userId, newPassword) {
    console.log("inside user ia fasfasflksjfl")
    axios.patch(`${apiUrls}/${userId}`, { _userPassword: newPassword }).then(response => {
        console.log('Username updated successfully: ', response.data);
    }).catch(error => {
        console.error('Error updating username: ', error);
    });
}



function IsValidPass(password) {
    var regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
    if (!regex.test(password)) {
        return false;
    }
    else {
        return true;
    }
}