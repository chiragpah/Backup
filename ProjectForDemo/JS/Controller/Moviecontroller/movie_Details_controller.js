import MovieService from "../../Services/MovieService.js";
$(document).ready(function () {
  MovieService.getMovieDetails()
    .then((response) => {
      $(".card-holder").html("<div class='grid-container' id='grid-container'></div>");

      let movie = response.data;
      for (let m of movie) {

        let data = `
        <div class="card2 card_2 grid-item" id="${m.id}">
        <img class="img"  src=${m.Movie_image}>
        <div class="card-body main-content">
           <p> ${m.movie_name}<br/></p>
        </div>
      </div>

        `;

        $(".grid-container").append(data);
      }

      $(".card2").click(function () {
        console.log("update started");
        let id = $(this).attr("id");
        console.log(id);
        window.location.href = `../HTML/movieDescription.html?mid=${id}`;

      })
    })
    .catch((err) => {
      console.log(err);
    });
});

