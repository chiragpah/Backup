import EventsDetailsService from "../Services/EventsDetailsService.js"
$(document).ready(function () {
  let params = new URLSearchParams(window.location.search);   // used to read parameter from URL
  let id = params.get("mid");
  EventsDetailsService.getEventDetailsById(id)
    .then((response) => {
      console.log(response.data);
      let e = response.data;
      
      // let row1 = `<div><img src='${movieDetail.Movie_image}'></div>`
      // $('.section_Background_image').append(row1)

      let row1 = `<div class="details_overview_container">
                <div class="ui-card">
                  <img src="${e.EventImage}" />
                  <div class="description">
                    <h3>Title</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                      eiusmod.
                    </p>
                   
                  </div>
                </div>
                <div class="details_description">
                <div class="details_heading">${e.EventName}</div>
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
                <div class="languages">${e.category}</div>
                <div class="sub_desc">
                  <div>${e.Duration}</div>
                  <div>
                    <div class="divider"></div>
                  </div>
                  <div>${e.category}</div>
                  <div class="divider"></div>
                  <div>A</div>
                  <div class="divider"></div>
                  <div>${e.release}</div>
                </div>
                <div class="book_ticket">Book Tickets</div>
              </div>
            </div>`
      let row2 = ` <!-- About Section -->
            <div class="about_section">
              <div class="about_heading">About the movie</div>
              <div class="about_desc">${e.Description}
              </div><div class="about_cast">
              <div class="about_heading">Cast</div>
              <div class="cast_card_container ">
             `

      $("body").append(row1, row2)
      $(".details_overview_container").css('background-image', `url("${e.Movie_image}")`)
      console.log(e.Cast_img[0]);
      for (let i in e.Cast_img) {
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
    //   $("img").click(function () {
    //     let val = $(this).attr("id");
    //     alert(val);
    //     sessionStorage.setItem("Artistid", val);
    //     window.location.href = "/HTML/artist.html"
    //   })
    //   $(".book_ticket").click(function () {
    //     let params = new URLSearchParams(window.location.search);   // used to read parameter from URL
    //     let mid = params.get("mid");
    //     console.log("update started");

    //     //url rewriting
    //     console.log(id);




      })

    })





