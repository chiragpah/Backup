$(document).ready(function(){
    $(".image_div").hover(function() {
        // $(this).css({"height" : "500px", "width" : "500px", "opacity" :"0.4"})

        // $(this).animate({"height" : "500px", "width" : "500px", "opacity" :"0.4"}, 3000, "easeInOutQuint", function() {
        //     console.log("Animation Completed");
        // })

        $(".user_name").val("Chirag Rajkumar Pahlajani");
        $(this).animate ({"height" : "250px", "width" : "500px", "opacity" :"0.4"},{duration:2000, easing:"linear", complete: function() {
            if($(".img_info").length===0){
            $("body").before("<div class='img_info'><h3>Chirag Pahlajani - The Artist</h3></div>");}
            // $("body").after("<div class='img_info'><h3>Chirag Pahlajani - The Artist</h3></div>");}
            // $("body").prepend("<div class='img_info'><h3>Chirag Pahlajani - The Artist</h3></div>");}
            // $("body").append("<div class='img_info'><h3>Chirag Pahlajani - The Artist</h3></div>");}

            // $(".img_info").text("Artist Meet");
            $(".img_info").html("<h1>ARTIST-CHIRAG PAHLAJANI</h1>");
            $(".image_div").remove ();
            $(".img_info").empty ();
        }});
    })
})