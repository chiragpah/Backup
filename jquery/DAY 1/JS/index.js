$(document).ready(function () {
    console.log("JQUERY");

    /* Element
    class
    ID SELECTOR*/
    $(".container").click(
        function () {
            console.log('Div hide');
            $(this).hide();//because we are inside it we use this keyword
        }
    )
    $('#artist_head').click(function () {
        $("#artist_body").hide("slow", function () {
            $('#artist_body').show("slow", function () {
                // $(".contains").css("border", "2px solid gold")
                $(".contains").css(
                    {
                        "border": "2px solid gold",
                        "background-color": "lightseagreen",
                        "display": "inline-block",
                        "align-items": "center",
                        "padding": "10px"

                    })

            });
        });//duration,callback
    })
})