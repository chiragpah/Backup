import Product from "../model/Product.js";
import ProductService from "../service/ProductService.js";

$(document).ready(function(){
    $("#submit").click(function(event){
        //Read Data from HTML form fileds--val()
   let name= $("#name").val();
   let email= $("#email").val();
  let productDescription=$("#productDescription").val();
   
   //Create Model Object
   let product=new Product();
   
   //set data into product Object--using setter
   product.name=name;
   product.email=email;
   product.productDescription=productDescription;
   
   console.log(product);

   //Call to service method and send Product object to it 
   ProductService.addProductDetails(product).then(
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