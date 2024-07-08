import ProductService from "../service/ProductService.js";

$(document).ready(function(){
   
    ProductService.getProductDetails()
    .then((response)=>{
        $(".all-feedbacks").html("<div class='feedbacks'><h2 class='title'>Feedbacks</h2></div>");

        let products=response.data;
        // $(".product_info").html("")


        for(let product of products)
        {
            let row=` <div class="card card_1 grid-item-f">
        <div class="user-name">
                    <strong>${product._name}</strong><br></div>
                   <div class="feedback"> ${product._productDescription}<br>

                    </div>
                    </div>
            
            `

            $(".all-feedbacks").append(row);
        }

    })
    .catch((error)=>{
        console.log(error);
    })
})


