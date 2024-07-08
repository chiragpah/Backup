import Product from "../model/Product.js";
import ProductService  from "../service/ProductService.js";

$(document).ready(function(){
    // read data from html form fields 
    
//after clicking button only we are loading a page
    $("#save").click(function(){
        let product_name =$('#product_name').val();
        let brand=$('#brand').val();
        let price=$("#price").val();
        let stock=$("#stock").val();
        let desc=$("#desc").val();
        let image=$("#img").val();
    
        // create model object 
        let product = new Product();
        
        // set the data using setter  
        product.ProductName=product_name;
        product.brand=brand ;
        product.price=price ;
        product.image=image;
        product.desc=desc ;
        product.stock=stock;
        console.log(product)


         // call service method that gets the data holded by ProductService.js in model which hold the data temporary
         ProductService.addProductDetails(product).then(response=>{
            console.log(response);
        })
        .catch(error=>{
            console.log(error);
        })

    })


})