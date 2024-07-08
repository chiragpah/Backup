$(document).ready(function(){
    $(document).on("click",".col",function(){
        const dataid = $(this).attr("data-recordId");
        window.location.href = `../HTML/fetch_description.html?id=${dataid}`;
        
    })
})
