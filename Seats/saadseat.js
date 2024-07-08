$(document).ready(function () {
    const apiUrl = 'http://localhost:3000/seats'; // Replace with your JSON server endpoint

    // Fetch seats data from JSON server
    async function fetchSeats() {
        try {
            const response = await axios.get(apiUrl);
            displaySeats(response.data);
        } catch (error) {
            console.error('Error fetching seats:', error);
        }
    }

    // Display seats on the page
    function displaySeats(seats) {
        const seatsContainer = $('.seats-container');
        seatsContainer.empty();

        seats.forEach(seat => {
            const seatElement = $(`<div class="seat" data-id="${seat.id}">${seat.name}</div>`);

            // Check if the seat is already booked
            if (seat.selected) {
                seatElement.addClass('booked');
                seatElement.off('click'); // Disable click for booked seats
            } else {
                seatElement.click(function () {
                    toggleSeatSelection(seat.id);
                });
            }

            seatsContainer.append(seatElement);
        });
    }

    // Toggle seat selection and update total price
    function toggleSeatSelection(seatId) {
        const seatElement = $(`.seat[data-id="${seatId}"]`);
        seatElement.toggleClass('selected');

        // Update total price
        updateTotalPrice();
    }

    // Calculate and update the total price based on selected seats
    function updateTotalPrice() {
        const selectedSeats = $('.seat.selected');
        const totalPriceElement = $('.total-price');

        const seatPrice = 10; // Replace with your seat price

        const totalPrice = selectedSeats.length * seatPrice;
        totalPriceElement.text(`Total Price: $${totalPrice}`);
    }

    // $('#book-now').click(async function() {
    //     const selectedSeats = $('.seat.selected');

    //     for (const seatElement of selectedSeats) {
    //         const seatId = $(seatElement).data('id');

    //         try {
    //             // Update selected seat in JSON server
    //             await axios.patch(`${apiUrl}/${seatId}`, { selected: true });
    //             console.log(`Seat ${seatId} booked successfully`);
    //         } catch (error) {
    //             console.error(`Error booking seat ${seatId}:`, error);
    //         }
    //     }

    //     // All seats updated, trigger the final actions
    //     alert('Seats booked successfully!');
    //     fetchSeats(); // Fetch updated data
    // });
    $('#book-now').click(async function () {
        const selectedSeats = $('.seat.selected');

        for (let i = 0; i < selectedSeats.length; i++) {
            const seatElement = selectedSeats.eq(i);
            const seatId = seatElement.data('id');

            try {
                // Update selected seat in JSON server
                await axios.patch(`${apiUrl}/${seatId}`, { selected: true });
                console.log(`Seat ${seatId} booked successfully`);
            } catch (error) {
                console.error(`Error booking seat ${seatId}:`, error);
            }
        }

        // All seats updated, trigger the final actions
        alert('Seats booked successfully!');
        fetchSeats(); // Fetch updated data
    });



    // Initialize the page
    fetchSeats();
});

