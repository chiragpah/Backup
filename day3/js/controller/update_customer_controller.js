import ProductService from "../service/ProductService.js";
import Product from "../model/Product.js";

$(document).ready(function(){

    // to click delete button


$(document).on('click','.updateDetails',function(){
   
            // call to service method 
            let id=$(this).attr("id");
            console.log(id);
    // Pass the id and product data to the updateProductDetails method
    ProductService.updateProductDetails(id, getProductData());
});

});
// Update the click event handler for '#updateDetails' button
$("#updateDetails").click(function () {
    // Get product data
    let product = getProductData();

    console.log(product);
});

// Function to get product data from the HTML form
function getProductData() {

    
    let product_name = $("#product_name").val();
    let brand = $("#brand").val();
    let price = $("#price").val();
    let image = $("#img").val();
    let desc = $("#desc").val();
    let stock = $("#stock").val();



    // Create a model object
    let product = new Product();

    // Set the data using setters
    product.ProductName = product_name;
    product.brand = brand;
    product.price = price;
    product.image = image;
    product.desc = desc;
    product.stock = stock;

    return product;
}
