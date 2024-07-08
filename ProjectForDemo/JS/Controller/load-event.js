$(document).ready(() => {

  function loadEvent() {
    axios.get("http://localhost:3000/Events").then((response) => {
      console.log(response.data)

      var eventHtml = '';

      for (var i = 0; i < 8; i++) {
        eventHtml += `<div class="card2 card_2 grid-item">
                  <img src=${response.data[i].EventImage} class="img" alt="...">
                  <div class="card-body main-content">
                  <p>${response.data[i].EventName}</p>
                  </div>
                </div>` ;
      }

      $('.grid-container').html(eventHtml);
    })
  }
  loadEvent();

})

/********************** */
