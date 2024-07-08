import EventsDetailsService from "../Services/EventsDetailsService.js";
$(document).ready(function () {
  EventsDetailsService.getEventDetails()
    .then((response) => {
      $(".card-holder").html("<div class='movie-title'><hr><h3 class='event-title'>List of Events</h3><hr></div><div class='grid-container'></div>");

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

