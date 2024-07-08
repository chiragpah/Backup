import EventDetailsService from "../Services/EventsDetailsService.js";
$(document).ready(function () {
  EventDetailsService.getEventDetails()
    .then((response) => {
      let events = response.data;
      console.log(events);
      for (let e of events) {
        let data = `
                <div class="col">
                <div class="card hover_effect">
                  <img src="${e.EventImage}" class="card-img-top" alt="...">
                    <div class="card-footer" id="card-footer">
                      <small class="txt-muted">${e.AritistName}</small>
                    </div>
               </div>
                </div>
        `;

        $("#visitEvents").append(data);
        
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

