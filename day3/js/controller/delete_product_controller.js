import ProductService from "../service/ProductService.js";

$(document).ready(function(){

    // to click delete button


$(document).on('click','.delete',function(){
   
            // call to service method 
            let id=$(this).data("id");
            console.log(id);
            ProductService.deleteProductDetails(id).
            then(response=>{
                console.log(response)
            })

            
            .catch(error=>{
                console.log(error)

            });

    
        })


})

        // $(".delete").click(function(){
        //     // call to service method 
        //     let id=$(this).data("id").val();
        //     console.log(id);
    
        // })

