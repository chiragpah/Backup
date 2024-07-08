//Use variables, acces tthem through class, fetch values  and show tem.
// Add plus and minus on screen.

function addBill() {
    let movieSelect = document.getElementById("movieSelect");
    let ticketCount = document.getElementById("ticketCount").value;

    if (ticketCount <= 0) {
        alert("Please enter a valid ticket count.");
        return;
    }
    
    let movieName = movieSelect.options[movieSelect.selectedIndex].text;
    let totalPrice = calculateTotalPrice(ticketCount);

    let receiptList = document.getElementById("receiptList");
    let listItem = document.createElement("li");
    listItem.textContent = `Movie: ${movieName}, Tickets: ${ticketCount}, Total: $${totalPrice.toFixed(2)}`;
    receiptList.appendChild(listItem);
}

function calculateTotalPrice(ticketCount) {
    // In a real-world scenario, you might fetch the movie price from a database.
    // For simplicity, let's assume a fixed price of $10 per ticket.
    let ticketPrice = 500;
    return ticketCount * ticketPrice;
}

