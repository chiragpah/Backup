
//Fetching Seat Structure



import SeatService from "../Services/SeatService.js"

let flag;
const seat_selected_array = [];
const clickEventHandler = () => {
    $(".seat").click(function () {


        if ($(this).attr("class") == "seat selected") {
            $(this).attr("class", "seat")
            flag = false;

            let indexs = $(this).attr("id")
            let rem = seat_selected_array.splice(seat_selected_array.indexOf(indexs), 1);
            console.log(seat_selected_array);

        }
        else {
            $(this).attr("class", "seat selected")
            flag = true;
            seat_selected_array.push({ row: $(this).parent().attr("id"), seatNo: $(this).attr("id"), status: $(this).attr("class") })
            console.log(seat_selected_array);
        }

    })
}


function DisplaySeat() {
    $(".cinema-seats").append(`<div class="cinema-row row-1" id="row-1" style="justify-content: center"></div>`)

    SeatService.getSeatStructure("row-1").then((res) => {
        let structure = res.data;


        structure.forEach(seat => {
            $(".row-1").append(`<div class=${seat.Status}  id=${seat.id}>${seat.SeatNo} </div>`)


        })



    })

    $(".cinema-seats").append(`<div class="cinema-row row-2" id="row-2" style="justify-content: center"></div>`)
    SeatService.getSeatStructure("row-2").then((res) => {
        let structure = res.data;

        structure.forEach(seat => {
            $(".row-2").append(`<div class=${seat.Status}  id=${seat.id}>${seat.SeatNo}</div>`)

        })

    })
    $(".cinema-seats").append(`<div class="cinema-row row-3" id="row-3" style="justify-content: center"></div>`)
    SeatService.getSeatStructure("row-3").then((res) => {
        let structure = res.data;

        structure.forEach(seat => {
            $(".row-3").append(`<div class=${seat.Status}  id=${seat.id}>${seat.SeatNo}</div>`)

        })
    })
    $(".cinema-seats").append(`<div class="cinema-row row-4" id="row-4" style="justify-content: center"></div>`)
    SeatService.getSeatStructure("row-4").then((res) => {
        let structure = res.data;

        structure.forEach(seat => {
            $(".row-4").append(`<div class=${seat.Status}  id=${seat.id}>${seat.SeatNo}</div>`)

        })
    })
    $(".cinema-seats").append(`<div class="cinema-row row-5" id="row-5" style="justify-content: center"></div>`)
    SeatService.getSeatStructure("row-5").then((res) => {
        let structure = res.data;

        structure.forEach(seat => {
            $(".row-5").append(`<div class=${seat.Status}  id=${seat.id}>${seat.SeatNo}</div>`)

        })
        clickEventHandler();
    })
    $("body").append(`<button class='btn btn-light Payment'> Booking Payment </button>`)
    $("body").append(`<button class='btn btn-light Reciept' > Reciept </button>`)

$(".Reciept").click(function(){
    window.location.href="/HTMl/foodcoupons.html"
})
    $(".Payment").click(function () {
        alert("Tickets Booked");
        updateSeat(event);
    })






}



function updateSeat(event) {
    event.preventDefault();

    for (let i = 0; i < seat_selected_array.length; i++) {
        const fillSeat = seat_selected_array[i];
        const seat = fillSeat.seatNo;
        const row = fillSeat.row
        if (fillSeat.status == "seat selected") {

            SeatService.updateSeatRow(row, seat, "blocked").then((res) => {
                console.log("Success");
            });

        }
        else
            console.log("select seat");
    }
    SeatService.getSeatStructure().then(() => {
        DisplaySeat();
    })
}



$(document).ready(function () {
    DisplaySeat();



})






















