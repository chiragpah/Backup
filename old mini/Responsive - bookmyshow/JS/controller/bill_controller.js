function calculateBill(value1,value2){
  console.log('p1',value1);
  console.log('p2',value2);
     let sum = value1 * value2;
     return sum;
}

function calculateTotal() {

    // Get user input from the form
    let quantityInput = document.getElementById("quantity");
    let pricePerUnitInput = document.getElementById("pricePerUnit");
    let resultDisplay = document.getElementById("result");
    // Convert input values to numbers
    let quantity = parseInt(quantityInput.value);
    let pricePerUnit = parseInt(pricePerUnitInput.value);
    // Check if inputs are valid numbers
    if (isNaN(quantity) || isNaN(pricePerUnit)) {
        resultDisplay.textContent = "Please enter valid numbers.";
    } else {
        // Call the calculateBill function
        let totalBill = calculateBill(quantity, pricePerUnit);

        // Display the result
        resultDisplay.innerText = "Total Bill: $" + totalBill.toFixed(2);
    }
console.log(totalBill);

}
