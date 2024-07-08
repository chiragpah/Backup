import ProductService from "../service/ProductService.js"


$(document).ready(function(){
// if we are not using then and ctach here it will be a promise and if we are not using it will fetch but not displaye on console
    ProductService.getProductDetails()
    .then((response)=>{
           console.log(response)
           ProductService.getProductDetails();
            let products =response.data ;
            console.log(products)
            let div;
            for(let prod of products){
                div = `

                <div class='content'>
                <img src='${prod._image.replace('C:\\fakepath','../images')}' alt='Image' class='img'>
                <br>
                <strong>Product Id:-</strong>${prod.id}
                <br>
                <strong>Product Name:-</strong>${prod._productName}
                <br>
                <strong>Brand Name:-</strong>${prod._brand}
                <br>
                <strong>Price:-</strong>${prod._price}
                <br>
                <strong>STock Left:-</strong>${prod._stock}
                <br>
                <strong>Product Description:-</strong>${prod._desc}
                <br>
                <div>
                <br>
                <button class='delete' data-id="${prod.id}">Delete</button>

                <button class='updateDetails' id='updateDetails' id="${prod.id}" onclick="location.href='update_details.html'">Update</button>

                </div>

                `

                $(".main-content").append(div);
                
              
            }
       
           //  append will add the row in table
         
    })
    .catch((error)=>{
     console.log(error);

    })
    
// referece of div
   

})