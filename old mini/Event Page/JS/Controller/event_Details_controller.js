import EventService from "../Services/EventService.js";
$(document).ready(function () {
  EventService.getEventDetails()
    .then((response) => {
      $(".card-holder").html("<div class='sport-title'><h1>List of Events</h1></div><div class='grid-container'></div>");

      let event = response.data;
      console.log(event);
      for (let m of event) {
        
        let data = `
        <div class="card card_1 grid-item">
        <img class="img"  src=${m.EventImage}>
        <div class="card-body main-content">
          <p class="card-text content">
           <strong> ${m.AritistName}<br/></strong>
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

