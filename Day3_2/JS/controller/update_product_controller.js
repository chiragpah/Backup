import ProductService from "../service/ProductService.js";
import Product from "../model/Product.js";
$(document).ready(function () {
    let params = new URLSearchParams(window.location.search);   // used to read parameter from URL
    let id = params.get("pid");
    let image = "";

         ProductService.getProductDetailsById(id)
            .then(response => {
                $("#product_id").val(response.id);
                console.log(id);
                $("#txt_pname1").val(response._productName);
                $("#txt_bname").val(response._brandName);
                $("#price").val(response._productPrice);
             
                $("#desc").val(response._productDescription);
                image = response._productType;
        
                let img = `<img src='${response._productType.replace('C:\\fakepath\\','../../images/')}' alt='Image' height='100px' width='100px'}>`;
        
                $(".pimg").html(img);
               
            })
            .catch((error) => {
                console.log(error,image);
            })
            $(document).on('click', '#registerbtn2', function(){
                console.log("Update process");
            
                let name = $("#txt_pname1").val();
                let brand = $("#txt_bname").val();
                let price = $("#price").val();
                let desc = $("#desc").val();
                let img = $("#fil").val();
    
                let product= new Product();
                product.productName = name;
                product.productBrand = brand;
                product.productPrice = price;
                product.productDescription = desc;
                if(productType == "" || productType == undefined || productType == null) {
                    product.productType = img;
                }
                else {
                    product.productType =productType;
                }
    
                ProductService.editProductDetails(id, product).then(response=> {
                    console.log(response);
                    windows.location.href="../../HTML/Product/productDetails.html";
                })
                .catch(error=> {
                    console.log(error);
                })
    })
})   


