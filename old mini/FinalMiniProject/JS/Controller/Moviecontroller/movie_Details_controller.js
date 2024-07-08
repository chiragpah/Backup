import MovieService from "../../Services/MovieService.js";
$(document).ready(function () {
  MovieService.getMovieDetails()
    .then((response) => {
      $(".card-holder").html("<div class='movie-title'><hr><h3 class='title'>List of Movies</h3><hr></div><div class='grid-container' id='grid-container'></div>");

      let movie = response.data;
      // console.log(movie);
      for (let m of movie) {

        let data = `
        <div class="card card_1 grid-item" id="${m.id}">
        <img class="img"  src=${m.Movie_image}>
        <div class="card-body main-content">
          <p class="card-text content">
           <h6> ${m.movie_name}<br/></h6>
          </p>
          
        </div>
      </div>

        `;

        $(".grid-container").append(data);


        //   window.filterMovies = function(targetLanguage) {
        //     const filteredMovies = movies.filter(movie =>
        //         targetLanguage === "all" ? true : movie._language.toLowerCase() === targetLanguage.toLowerCase()
        //     );
        //     renderMovies(filteredMovies);
        // };

        // // Initial rendering
        // filterMovies("all");
      }

      $(".card").click(function () {
        console.log("update started");
        let id = $(this).attr("id");
        //url rewriting
        console.log(id);
        window.location.href = `../HTML/movieDescription.html?mid=${id}`;
        // window.location.href="../Html/productDetails.html?pid="+id;

      })
    })
    .catch((err) => {
      console.log(err);
    });
});

