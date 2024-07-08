import CardsService from "../Services/CardsService.js";
$(document).ready(function () {
  CardsService.getCardDetails()
    .then((response) => {
      let movie = response.data;
      console.log(movie);
      for (let m of movie) {
       
        let data = `
                <div class="col" >
                <div class="card">
                  <img src="${m.Movie_image}" class="card-img-top" id="${m.id}"  alt="...">
                    <div class="card-footer" id="card-footer">
                      <small class="txt-muted">${m.movie_name}</small>
                    </div>
               </div>
                </div>
        `;

        $("#MovieLoad").append(data);
        $(document).on("click","img",function(){
          const dataid = $(this).attr("id");
          window.location.href = `/HTML/movieDescription.html?mid=${dataid}`;
          
      })
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

