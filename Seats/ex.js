import SeatService from "./SeatService.js"
$(document).ready(function () {
    let flag;
    const seat_selected_array = [];



    function DisplaySeat() {
        $(".movie-content").append(`<div class="row-1" style="justify-content: center"></div>`)
        SeatService.getSeatStructure("row-1").then((res) => {
            let structure = res.data;

            structure.forEach(seat => {
                $(".row-1").append(`<div class=${seat.Status}  id=${seat.id}>${seat.SeatNo}</div>`)

            })
        })

        $(".movie-content").append(`<div class="row-2" style="justify-content: center"></div>`)
        SeatService.getSeatStructure("row-2").then((res) => {
            let structure = res.data;

            structure.forEach(seat => {
                $(".row-2").append(`<div class=${seat.Status}  id=${seat.id}>${seat.SeatNo}</div>`)

            })
        })
        $(".movie-content").append(`<button class='btn btn-light Payment'> Booking Payment </button>`)







        $(".seat").click(function () {

            console.log("ds");
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
                seat_selected_array.push({ seatNo: $(this).attr("id"), status: $(this).attr("class") })
                console.log(seat_selected_array);
            }

        })



    }



    function updateSeat(event) {
        event.preventDefault();
        for (let i = 0; i < seat_selected_array.length; i++) {
            const fillSeat = seat_selected_array[i];
            const seat = fillSeat.seatNo;
            if (fillSeat.status == "seat selected") {

                SeatService.updateSeatRow(seat).then((res) => {
                    console.log("Success");
                });

                SeatService.fetchSeats().then((response) => {
                    console.log(response);

                })
            }
            else
                console.log("select seat");


        }
    }

    $(".Payment").click(function () {
        alert("Tickets Booked");
        updateSeat(event);

    })
    DisplaySeat();


})
