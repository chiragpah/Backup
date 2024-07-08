// controller.js





// Function to generate a random receipt number
function generateReceipt() {
    let receiptNumber = "RCT" + Math.floor(Math.random() * 1000000);
    document.getElementById('receiptNumber').innerText = 'Receipt Number: ' + receiptNumber;
}

// Function to generate tickets
function generateTickets() {
    let ticketQuantity = document.getElementById('ticketQuantity').value;
    let ticketList = document.getElementById('ticketList');

    // Clear previous tickets
    ticketList.innerHTML = '';

    // Generate new tickets
    for (let i = 1; i <= ticketQuantity; i++) {
        let ticketNumber = "TCK" + Math.floor(Math.random() * 10000);
        let listItem = document.createElement('li');
        listItem.innerText = 'Ticket ' + i + ': ' + ticketNumber;
        ticketList.appendChild(listItem);
    }
}
