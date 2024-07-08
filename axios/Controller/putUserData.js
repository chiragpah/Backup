

import UserClass from "../../model/UserClass.js";
import UserService from "../../service/UserService.js";
$(document).ready(function(){
    $('#SubmitForm').submit(function(event){
        event.preventDefault();
        const user_id=$('').val();
        const user_FullName=$('').val();
        const user_pass=$('').val();
        const user_mobileNo=$('').val();
        const user_favartist=$('').val();
        const user_favcat=$('').val();
       
        console.log(user_id,user_pass,user_favartist,user_mobileNo,user_FullName);
        let userDetail = new UserClass();
        userDetail.userId = user_id;    // calling the setter property, not variable(_userDetailName)
        userDetail.userFullName =user_FullName ;
        userDetail.userPassword = user_pass;
        userDetail.userFavArtist = user_favartist;
        userDetail.userFavCategory=user_favcat;
        
        userDetail.userContact = user_mobileNo;
        console.log(userDetail);
        UserService.addUserDetails(userDetail).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error)
    })
})
})