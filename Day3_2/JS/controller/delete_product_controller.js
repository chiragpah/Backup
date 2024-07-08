import ProductService from "../service/ProductService.js"
$(document).ready(function () {
    $(document).on('click', '.delete_product', function () {
        console.log("Delete");
        let id = $(this).attr("recordID");
        console.log("ID:", id);
        ProductService.deleteProductDetails(id)
            .then(response => {
                window.location.href = "../../HTML/Product/productDetails.html";
            })
            .catch(error => {
                window.location.href = "../../HTML/Product/productDetails.html";
            })
    })
})