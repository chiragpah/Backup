import MovieService from "../Services/MovieService.js"
$(document).ready(function () {
  let params = new URLSearchParams(window.location.search);   // used to read parameter from URL
  let id = params.get("mid");
  MovieService.getMovieDetailsById(id)
    .then((response) => {
      console.log(response.data);
      let movieDetail = response.data;
      console.log(movieDetail.Movie_image);
      // let row1 = `<div><img src='${movieDetail.Movie_image}'></div>`
      // $('.section_Background_image').append(row1)

      let row1 = `<div class="details_overview_container">
                <div class="ui-card">
                  <img src="${movieDetail.Movie_image}" id=image />
                  <div class="description">
                    <h3>Title</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                      eiusmod.
                    </p>
                   
                  </div>
                </div>
                <div class="details_description">
                <div class="details_heading">${movieDetail.movie_name}</div>
                <div class="details_rating">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="crimson"
                    class="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                    />
                  </svg>

                  <div class="rate">8.4 / 10</div>
                  <div class="votes">500K Votes</div>
                </div>
                <div class="languages">${movieDetail.category}</div>
                <div class="sub_desc">
                  <div>${movieDetail.Duration}</div>
                  <div>
                    <div class="divider"></div>
                  </div>
                  <div>${movieDetail.category}</div>
                  <div class="divider"></div>
                  <div>A</div>
                  <div class="divider"></div>
                  <div>${movieDetail.release}</div>
                </div>
                <div class="book_ticket">Book Tickets</div>
              </div>
            </div>`
      let row2 = ` <!-- About Section -->
            <div class="about_section">
              <div class="about_heading">About the movie</div>
              <div class="about_desc">${movieDetail.Description}
              </div><div class="about_cast">
              <div class="about_heading">Cast</div>
              <div class="cast_card_container ">
             `

      $("body").append(row1, row2)
      $(".details_overview_container").css('background-image', `url("${movieDetail.Movie_image}")`)
      console.log(movieDetail.Cast_img[0]);
      for (let i in movieDetail.Cast_img) {
        let row3 = `<div class="cast_card">
                    <div class="card_img">
                      <img src="${movieDetail.Cast_img[i]}" id='${movieDetail.ArtistID[i]}'   />
                    </div>
                    <div class="card_name">${movieDetail.Cast[i]}</div>
                  </div>
                  </div>
                 
              </div>
            </div>`
        $(".cast_card_container").append(row3)


      }
      $("body").append(`<footer>
      <div class="footer-container">
        <div class="footer-section about-us">
          <h2>About Us</h2>
          <p>
            Welcome to MovieTicketApp, your go-to platform for hassle-free movie
            ticket booking. Discover the latest movies, explore theaters, and
            book tickets seamlessly. Connect with us on social media for the
            latest updates!
          </p>
        </div>
        <div class="footer-section quick-links">
          <h2>Quick Links</h2>
          <ul>
            <li>
              <a href="#"
                ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-house"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"
                    /></svg>
                Home</a
              >
            </li>
            <li>
              <a href="#"
                >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-film"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm4 0v6h8V1zm8 8H4v6h8zM1 1v2h2V1zm2 3H1v2h2zM1 7v2h2V7zm2 3H1v2h2zm-2 3v2h2v-2zM15 1h-2v2h2zm-2 3v2h2V4zm2 3h-2v2h2zm-2 3v2h2v-2zm2 3h-2v2h2z"
                    /></svg>
                Events</a
              >
            </li>
            <li>
              <a href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-google-play"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M14.222 9.374c1.037-.61 1.037-2.137 0-2.748L11.528 5.04 8.32 8l3.207 2.96 2.694-1.586Zm-3.595 2.116L7.583 8.68 1.03 14.73c.201 1.029 1.36 1.61 2.303 1.055l7.294-4.295M1 13.396V2.603L6.846 8zM1.03 1.27l6.553 6.05 3.044-2.81L3.333.215C2.39-.341 1.231.24 1.03 1.27Z"
                    /></svg>
                Sports</a
              >
            </li>
            <li>
              <a href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-person-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                    <path
                      fill-rule="evenodd"
                      d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                    /></svg>
                User</a
              >
            </li>
          </ul>
        </div>
        <div class="footer-section contact">
          <h2>Contact Us</h2>
          <p>Email: info@example.com</p>
          <p> Phone: +1 123 456 7890</p>
          <p>
            <i class="fas fa-map-marker-alt"></i> Address: 123 Main Street,
            Cityville
          </p>
        </div>
        <div class="footer-section social">
          <h2>Follow Us</h2>
          <div class="social-icons icons ">
            <a href="#" target="_blank" class="mx-2" 
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-facebook"
                viewBox="0 0 16 16"
              >
                <path
                  d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"
                /></svg></a>
            <a href="#" target="_blank" class="mx-2" ><svg xmlns="http://www.w3.org/2000/svg"width="16" height="16"fill="currentColor"class="bi bi-twitter" viewBox="0 0 16 16">
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15"/></svg></a>
            <a href="#" target="_blank" class="mx-2"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-instagram"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"
                /></svg></a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2023 Your Website. All rights reserved.</p>
      </div>
    </footer>`)
      $("img").click(function () {
        let val = $(this).attr("id");
        alert(val);
        sessionStorage.setItem("Artistid", val);
        window.location.href = "/HTML/artist.html"
      })
      $(".book_ticket").click(function () {
        let params = new URLSearchParams(window.location.search);   // used to read parameter from URL
        let mid = params.get("mid");
        console.log("update started");

        //url rewriting
        console.log(id);
        window.location.href = `../HTML/TicketBooking.html?mid=` + mid;



      })

    })

})



