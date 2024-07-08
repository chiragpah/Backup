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
              <div class="card h-100">
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
