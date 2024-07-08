$(document).ready(function(){
    $(".comp_header").click(function() {
        $(".emp_info").toggle(4000, function() {
            console.log("toggle effect completed");
        });
    })
})