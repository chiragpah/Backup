import Product from "../model/Product.js";
import ProductService from "../service/ProductService.js";

$(document).ready(function () {
    $(".registerbtn1").click(
        function () {
            let p_name = $("#txt_pname").val();
            let p_brand = $("#txt_bname").val();
            let p_price = $("#price").val();
            let p_avail = "";
            let p_desc = $("#desc").val();
            let p_type = $("#fil").val();
            if ($("#yes").is(':checked')) {
                p_avail = $("#yes").val();

            }
            else if ($("#no").is(':checked')) {
                p_avail = $("#no").val();

            }
            let product = new Product();
            product.productName = p_name;    // calling the setter property, not variable(_customerName)
            product.brandName = p_brand;
            product.productPrice = p_price;
            product.productAvailablity = p_avail;

            product.productDescription = p_desc;
            product.productType = p_type;
            console.log(product);
            ProductService.addProductDetails(product).then((response) => {
                console.log(response);
            }).catch((error) => {
                console.log(error);
            })
        })
})