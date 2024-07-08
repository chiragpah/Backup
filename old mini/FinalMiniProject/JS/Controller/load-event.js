$(document).ready(() => {

  function loadEvent() {
    axios.get("http://localhost:3000/Events").then((response) => {
      console.log(response.data)

      var eventHtml = '';

      for (var i = 0; i < 8; i++) {
        eventHtml += `<div class="col">
                <div class="card h-80">
                  <img src=${response.data[i].EventImage} class="card-img-top" alt="...">
                  <div class="card-footer" id="card-footer">
                  <strong class="txt-muted">${response.data[i].AritistName}</strong>
                  <small class="txt-muted">${response.data[i].EventName}</small>
                    
                    
                  </div>
                </div>
              </div>` ;
      }

      $('#evenData').html(eventHtml);
    })
  }
  loadEvent();

})


// import EventDetailsService from "../JS/Services/EventsDetailsService.js";
// $(document).ready(function () {
//   EventDetailsService.getEventDetails()
//     .then((response) => {
//       $(".card-holder").html("<div class='sport-title'><h1>List of Events</h1></div><div class='grid-container'></div>");

//       let event = response.data;
//       console.log(event);
//       for (let m of event) {
        
//         let data = `
//         <div class="card card_1 grid-item">
//         <img class="img"  src=${m.EventImage}>
//         <div class="card-body main-content">
//           <p class="card-text content">
//            <strong> ${m.AritistName}<br/></strong>
//           </p>
          
//         </div>
//       </div>

//         `;
       
//         $(".grid-container").append(data);
//       }
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });



// {/* <img src="/Assests/Images/6.png" class="card-img-top" alt="..."> */ }

