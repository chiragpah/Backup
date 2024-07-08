import Feedback from "../Model/Feedback.js";
import FeedbackService from "../Services/FeedbackService.js";

$(document).ready(function(){
    $("#submit").click(function(event){
        //Read Data from HTML form fileds--val()
   let name= $("#name").val();
   let email= $("#email").val();
  let feedback=$("#feedback").val();
   
   //Create Model Object
   let fedback=new Feedback();
   
   //set data into product Object--using setter
   fedback.name=name;
   fedback.email=email;
   fedback.feedback=feedback;
   
   console.log(fedback);

   //Call to service method and send Product object to it 
   FeedbackService.addFeedbackDetails(fedback).then(
    (response)=>{
        event.preventDefault();

            console.log("Response:",response);
    }
   ).catch(
    (error)=>{
        console.log("Erorr:",error);
   })
    })
})