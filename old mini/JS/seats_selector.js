import SeatService from "../service/seatService.js";

$(document).ready(function () {
  
  const selectedSeats=[];
  const seatPrices = {};
  SeatService.getSeatDetails()

    .then(response => {

      console.log(response);
      SeatService.getSeatDetails();

      let seats = response.data;
    
      let seatContainer = $(".container");
      
      for (let row of seats) {
        let rowElement = $("<div class='seat-row'></div>");
        for (let seat of row) {
          let seatElement = $(`<div class='seat ${seat.status}'>${seat.name}</div>`);
          seatPrices[seat.name] = seat.price;
          rowElement.append(seatElement);
        }
        seatContainer.append(rowElement);
      }

      for (let row of seats) {
        let rowElement = $("<div class='seat-row'></div>");
        for (let seat of row) {
          let seatElement = $(`<div class='seat ${seat.status}'>${seat.name}</div>`);
          seatPrices[seat.name] = seat.price;
          rowElement.append(seatElement);
        }
        seatContainer.append(rowElement);
      }
     
     
    })
    .catch(error => {
      console.log(error);
    });
    
   
    $(".container").on('click', '.seat', function () {
      $(this).toggleClass('selected');
  
      let seatName = $(this).text();
      let seatStatus = $(this).hasClass('occupied') ? 'occupied' : 'available';
      let seatPrice = $(this).data('price');

     

      // Check if the seat is selected and update its background color
      if ($(this).hasClass('selected')) {
        localStorage.setItem('seatBackgroundColor', '#f28b82');
        $(this).css('background-color', localStorage.getItem('seatBackgroundColor'));// Red color for selected seat
        selectedSeats.push({ name:seatName, status:seatStatus ,price:seatPrice});

        console.log(selectedSeats)

       
        
      } else {
        // Set the background color based on the seat's status
        if ($(this).hasClass('occupied')) {
          localStorage.setItem('seatBackgroundColor', '#f28b82');
          $(this).css('background-color', localStorage.getItem('seatBackgroundColor')); 
          
        } else {
          $(this).css('background-color', '#b2f2bb');
        }
      }
      
    });

 
  
   

$("#book-btn").on('click', async function () {
  // Check if any seats are selected
  if (selectedSeats.length > 0) {
    try {

      // Data store in book tickets json
      SeatService.bookTickets(selectedSeats)

      // Update seat status to 'occupied' for each selected seat
      for (const seat of selectedSeats) {
        
        SeatService.updateSeatStatus(seat.name, 'occupied');
      }

      // Display a message indicating successful booking
      alert('Tickets booked successfully!');

    } 
    
    catch (error) {

      console.error('Error booking tickets:', error);
      
      // Display an error message if the booking fails
      alert('Error booking tickets. Please try again.');
    }
  } else {
    // Display a message indicating that no seats are selected
    alert('Please select seats before booking.');
  }
});


});
