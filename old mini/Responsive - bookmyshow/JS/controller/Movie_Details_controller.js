import CardsService from "../services/VisitCardsService.js";
$(document).ready(function () {
  CardsService.getCardDetails()
    .then((response) => {
      let movie = response.data;
      console.log(movie);
      for (let m of movie) {
        let data = `
                <div class="col" data-recordID="${m.id}">

                <div class="card">
                  <img src="${m.image}" class="card-img-top" alt="...">
                    <div class="card-footer" id="card-footer">
                      <small class="text-muted">${m.name}</small>
                    </div>
               </div>
              </div>
        `;
        $("#abc").append(data);
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

