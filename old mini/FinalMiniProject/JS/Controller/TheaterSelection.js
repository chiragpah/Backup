import LocationService from "../Services/LocationService.js";
import MovieService from "../Services/MovieService.js";
$(document).ready(function () {
    let params = new URLSearchParams(window.location.search);   // used to read parameter from URL
    let id = params.get("mid");
    MovieService.getMovieDetailsById(id).then((res) => {
        let movie = res.data;
        console.log(movie);
        LocationService.getTheaterDetails()
            .then((response) => {

                let theater = response.data;
                console.log(theater);
                let lid = sessionStorage.getItem("Lid")
                console.log(lid);
                $("body").append(` <div class="container-fluid">
                <div class="row">
                  <div class="col">
                    <div class="row">
                        <div class="col-12"><a href="#"><h1 id="movie-heading" style='margin:15px; padding:10px'>${movie.movie_name}</h1></a></div>
                        <div class="col-12">
                          
                        </div>
                    </div>
                </div>
            </div>`)
                $("body").append(`<div class='content' style='border:2px solid white; padding:20px;'></div>`)

                for (let t of theater) {
                    if (lid == t.LocId) {
                        $(".content").append(`
                <div class="container">
                    <div class="row">
                        <div class="col-4">
                            <h5>${t.TheaterName}</h5>
                        </div>
                        <div class="col-8">
                            <div class="row row-cols-2 row-cols-lg-3">
                                <div class="col-4 col-lg-2">
                                    <a class="time" id="time_one" href='/HTML/Seat.html'>${t.ScheduleManagement.time[0]}</a>
                                   
                                </div>
                                <div class="col-4 col-lg-2">
                                    <a class="time" id="time_two" href='/HTML/Seat.html'>${t.ScheduleManagement.time[1]}</a>
                                   
                                </div>
                                <div class="col-4 col-lg-2">
                                    <a class="time" id="time_three" href='/HTML/Seat.html'>${t.ScheduleManagement.time[2]}</a>
                               
                                </div>
                               
                              </div>
                              
                        </div>
                        <hr style='background-color:white; height:2px; margin-top:20px'>
                    </div>
                </div>`)
                    }
                }
            })
    })

})