import ProductService from "../service/ProductService.js";
$(document).ready(function () {
    $(document).on('click', '.product_edit', function () {
        let id = $(this).attr("recordId1");
        ProductService.getProductDetailsById(id).then((response) => {
            window.location.href = `../../HTML/Product/productEdit.html?pid=${id}`;
        })
            .catch((error) => {
                console.log(error);
            })

    })
})