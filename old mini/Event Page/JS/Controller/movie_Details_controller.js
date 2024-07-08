import MovieService from "../Services/MovieService.js";
$(document).ready(function () {
  MovieService.getMovieDetails()
    .then((response) => {
      $(".card-holder").html("<div class='movie-title'><h2 class='title'>List of Movies</h2></div><div class='grid-container' id='grid-container'></div>");

      let movie = response.data;
      // console.log(movie);
      for (let m of movie) {
        
        let data = `
        <div class="card card_1 grid-item">
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
    })
    .catch((err) => {
      console.log(err);
    });
});

