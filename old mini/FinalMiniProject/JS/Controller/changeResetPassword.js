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
        const userID = sessionStorage.getItem("userId");

        if (flag == true) {

            axios.get('http://localhost:3000/UserInfo')
                .then(response => {
                    var flag = 0;
                    response.data.forEach(element => {
                        if (element.id == userID) {

                            updatePassword(userID, newPassword);
                            // console.log("Password reset successfull");
                            setTimeout(() => {
                                alert("Password reset successfully");
                            }, 0);
                            window.location.href = "NewloginUser.html";
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
    axios.patch(`${apiUrls}/${userId}`, { password: newPassword }).then(response => {
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