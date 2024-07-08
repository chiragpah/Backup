import FoodCouponsServices from "../services/FoodCouponsService.js";

$(document).ready(function () {
    FoodCouponsServices.GetFoodDetails()
    .then((response) => {
      let foodandbill = response.data;
      console.log(foodandbill);
      for (let fb of foodandbill) {
        let data = 
        `
        <div class="col">
              <div class="card h-60 snack-card">
                <img src="${fb.foodimage}" class="card-img-top" alt="Food Item">
                <div class="card-body">
                  <h5 class="card-title">${fb.foodname}</h5>
                </div>
              </div>
            </div>
        `;
        
        $("#foodnbill").append(data);
      }
    })

    .catch((err) => {
      console.log(err);
    });
});


// Function to count checked checkboxes
function countCheckedCheckboxes() {
  let checkboxes = document.getElementsByClassName('checkbox');
  let checkedCount = 0;

  // Using for...of loop to iterate over checkboxes
  for (const checkbox of checkboxes) {
      if (checkbox.checked) {
          checkedCount++;
      }
  }

  let foodbill = checkedCount * 500;    
  document.getElementById('result').innerText = 'Number of food coupons selected : ' + checkedCount;
  document.getElementById('total').innerText ='Food section bill: ' + foodbill;
}

function generateReceipt() {
  let receiptNumber = "RCT" + Math.floor(Math.random() * 1000000);
  document.getElementById('receiptNumber').innerText = 'Receipt Number: ' + receiptNumber;
  alert("Thank you for booking!");
}
