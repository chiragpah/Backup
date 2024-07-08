$(document).ready(function () {
    $(".btn1").click(
        function () {
            let pname = $("#p1").val();
            let bname = $("#p2").val();
            let price = $("#p3").val();
            console.log(pname);
            let result = `<h1>Product Name:${pname}<br>Brand Name:${bname}<br>Price:${price}</h1>`;
            $(".result").html(result);
        })
}
)