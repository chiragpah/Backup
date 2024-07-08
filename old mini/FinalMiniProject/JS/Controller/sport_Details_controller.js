import SportService from "../Services/SportService.js";
$(document).ready(function () {
  SportService.getSportDetails()
    .then((response) => {
      $(".card-holder").html("<div class='sport-title'><h1>List of sports</h1></div><div class='grid-container'></div>");

      let sport = response.data;
      console.log(sport);
      for (let m of sport) {
        
        let data = `
        <div class="card card_1 grid-item">
        <img class="img"  src=${m._sportImage}>
        <div class="card-body main-content">
          <p class="card-text content">
           <strong> ${m._sportName}<br/></strong>
          </p>
          
        </div>
      </div>

        `;
       
        $(".grid-container").append(data);
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

