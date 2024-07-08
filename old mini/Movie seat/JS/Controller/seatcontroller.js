import SeatServices from "../Services/SeatBookService.js";





let booked_seats = [];

// const clickEventHandler = () => {
//     $(".seat").click(function (event) {
//         event.preventDefault();
//         const seat_row = $(this).parent().attr("id");
//         const seat_id = $(this).attr("id");
//         const seat_count = $("#count");
//         const total_amount = $("#total");

//         const attrVal = $(this).attr("class");

//         if (attrVal === "seat occupied") {
//             $(this).attr("class", "seat");

//             let flag = false;

//             const new_seats = booked_seats.map((seat) => {
// //                 if (seat.id.toString() === seat_id.toString()) {
// //                     seat.status = 1 - tus;
// //                     flag = true;
// //                 }
// //             });

// //             if (!flag) {
// //                 booked_seats.push({ row: seat_row, id: seat_id, status: 0 });
// //             }
// //         } else {
// //             $(this).addClass("occupied");

// //             let flag = false;

// //             const new_seats = booked_seats.map((seat) => {
// //                 if (seat.id.toString() === seat_id.toString()) {
// //                     seat.status = 1 - seat.status;
// //                     flag = true;
// //                 }
// //             });

// //             if (!flag) {
// //                 booked_seats.push({ row: seat_row, id: seat_id, status: 1 });
// //             }
// //         }

// //         console.log(booked_seats);

// //         let normal_seats = 0;
// //         let gold_seats = 0;
// //         let platinum_seats = 0;

// //         for (let idx = 0; idx < booked_seats.length; idx++) {
// //             const seat = booked_seats[idx];

// //             if (seat.status === 1 && Number(seat.id) >= 1 && Number(seat.id) <= 32) {
// //                 normal_seats++;
// //             } else if (
// //                 seat.status === 1 &&
// //                 Number(seat.id) > 32 &&
// //                 Number(seat.id) <= 48
// //             ) {
// //                 gold_seats++;
// //             } else if (seat.status === 1 && Number(seat.id) > 48) {
// //                 platinum_seats++;
// //             }
// //         }

// //         total_amount.text(
// //             normal_seats * 500 + gold_seats * 650 + platinum_seats * 850
// //         );
// //         seat_count.text(normal_seats + gold_seats + platinum_seats);
// //     });
// // };

// // const submitDataHandler = () => {
// //     $(".submit_data").click(function () {
// //         const lly_booked_seats = booked_seats.filter(
// //             (seat) => seat.status === 1
// //         );

// //         for (let idx = 0; idx < actually_booked_seats.length; idx++) {
// //             const current_seat = actually_booked_seats[idx];
// //             console.log(current_seat);
// //             const seat_row = current_seat.row;
// //             const seat_id = current_seat.id;

// //             SeatServices.changeSeatStatus(seat_row, seat_id, { status: 1 }).then(
// //                 (res) => {
// //                     console.log(res);
// //                 }
// //             );
// //         }
// //     });
// // };

const displaySeats = (event) => {
    const seatContainer = $(".row-container");
    SeatServices.getSeatsRow("row_1").then((res) => {
        seatContainer.append(`<div class="row" id="1"></div>`)
    })
}
// populating row 1 seats
seatContainer.append(`<div class="row" id="row_1"></div>`);
const row_1_data = res;
for (let idx = 0; idx < 8; idx++) {
    $("#row_1").append(
        `<div class="${row_1_data[idx].status === 0 ? "seat" : "seat occupied"
        }" id="${row_1_data[idx].id}">${row_1_data[idx].code}</div>`
    );
}

//         SeatServices.getSeatsRow("row_2").then((res) => {
//             // populating row 2 seats
//             seatContainer.append(`<div class="row" id="row_2"></div>`);

//             const row_2_data = res;
//             for (let idx = 0; idx < 8; idx++) {
//                 $("#row_2").append(
//                     `<div class="${row_2_data[idx].status === 0 ? "seat" : "seat occupied"
//                     }" id="${row_2_data[idx].id}">${row_2_data[idx].code}</div>`
//                 );
//             }

//             SeatServices.getSeatsRow("row_3").then((res) => {
//                 // populating row 3 seats
//                 seatContainer.append(`<div class="row" id="row_3"></div>`);

//                 const row_3_data = res;
//                 for (let idx = 0; idx < 8; idx++) {
//                     $("#row_3").append(
//                         `<div class="${row_3_data[idx].status === 0 ? "seat" : "seat occupied"
//                         }" id="${row_3_data[idx].id}">${row_3_data[idx].code}</div>`
//                     );
//                 }

//                 SeatServices.getSeatsRow("row_4").then((res) => {
//                     // populating row 4 seats
//                     seatContainer.append(`<div class="row" id="row_4"></div>`);

//                     const row_4_data = res;
//                     for (let idx = 0; idx < 8; idx++) {
//                         $("#row_4").append(
//                             `<div class="${row_4_data[idx].status === 0 ? "seat" : "seat occupied"
//                             }" id="${row_4_data[idx].id}">${row_4_data[idx].code}</div>`
//                         );
//                     }

//                     seatContainer.append('<h5 class="subtitle">GOLD - ₹650</h5>');
//                     SeatServices.getSeatsRow("row_5").then((res) => {
//                         // populating row 5 seats
//                         seatContainer.append(`<div class="row" id="row_5"></div>`);

//                         const row_5_data = res;
//                         for (let idx = 0; idx < 8; idx++) {
//                             $("#row_5").append(
//                                 `<div class="${row_5_data[idx].status === 0 ? "seat" : "seat occupied"
//                                 }" id="${row_5_data[idx].id}">${row_5_data[idx].code}</div>`
//                             );
//                         }

//                         SeatServices.getSeatsRow("row_6").then((res) => {
//                             // populating row 6 seats
//                             seatContainer.append(`<div class="row" id="row_6"></div>`);

//                             const row_6_data = res;
//                             for (let idx = 0; idx < 8; idx++) {
//                                 $("#row_6").append(
//                                     `<div class="${row_6_data[idx].status === 0 ? "seat" : "seat occupied"
//                                     }" id="${row_6_data[idx].id}">${row_6_data[idx].code}</div>`
//                                 );
//                             }
//                             seatContainer.append('<h5 class="subtitle">DIAMOND - ₹850</h5>');
//                             SeatServices.getSeatsRow("row_7").then((res) => {
//                                 // populating row 7 seats
//                                 seatContainer.append(`<div class="row" id="row_7"></div>`);

//                                 const row_7_data = res;
//                                 for (let idx = 0; idx < 8; idx++) {
//                                     $("#row_7").append(
//                                         `<div class="${row_7_data[idx].status === 0 ? "seat" : "seat occupied"
//                                         }" id="${row_7_data[idx].id}">${row_7_data[idx].code}</div>`
//                                     );
//                                 }

//                                 // Seperation
//                                 seatContainer.append(`<div class="info_container"></div>`);
//                                 $(".info_container").append(`<div class="text-wrapper">
//                     <p class="text">Selected Seats <span id="count">0</span></p>
//                     <p class="text">Total Price ₹<span id="total">0</span></p>
//                   </div>`);

//                                 $(".info_container").append(`<div class="submit_data">
//                     Book Seats
//                   </div>`);

//                                 clickEventHandler();
//                                 submitDataHandler();
//                             });
//                         });
//                     });
//                 });
//             });
//         });
//     });
// };

// $(document).ready(function (event) {
//     displaySeats(event);
// })
