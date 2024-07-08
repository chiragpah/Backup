import ProductService from "../service/ProductService.js";

$(document).ready(function () {
    ProductService.getProductDetails()
        .then((response) => {
            let product = response.data;
            $(".product_info_container").html = "";
            for (let prod of product) {
             
                let row = `<div class='product_info m-5'>
                <hr>
                <div class='image'>
                <image src='${prod._productType.replace('C:\\fakepath\\', '../../images/')}' alt="Image not loaded"><br>
                </div>
                <div class='info'>
                <strong>Brand Name:</strong>${prod._brandName}
                <br>
                <strong>Product Name:</strong>${prod._productName}<br>
                <strong>price Name:</strong>${prod._productPrice}<br>
                <strong>Product Description:</strong>${prod._productDescription}<br>
                </div>
                <button class='delete_product btn btn-primary btn_css ' recordId=${prod.id}>Delete</button>
                <button class='product_edit btn btn-primary btn_css ' recordId1=${prod.id}>Edit</button>
                </div>
                <hr>`
                $(".product_info_container").append(row);


            }
        })
        
})

