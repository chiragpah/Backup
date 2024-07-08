import EventDetailsService from "../services/EventsDetailsService.js";
$(document).ready(function () {
  EventDetailsService.getEventDetails()
    .then((response) => {
      let events = response.data;
      console.log(events);
      for (let e of events) {
        let data = `
                <div class="col">
                <div class="card">
                  <img src="${e.image}" class="card-img-top" alt="...">
                    <div class="card-footer" id="card-footer">
                      <small class="text-muted">${e.name}</small>
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

