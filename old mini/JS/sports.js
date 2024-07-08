function getUserDetails(){
    axios.get(apiUrl)
    .then(response => {
       // displayUserDetails(response.data)
    })
    .catch(error => {
        console.error('Error fetching user details:', error);
    });
  }
  $(document).ready(() => {
    let personName = sessionStorage.getItem("name");
    // let name = sessionStorage.getItem("fname");
    const userId = parseInt(sessionStorage.getItem("userId"));
    console.log(personName);
    console.log(userId);
  
    getUserDetails(); // Fetch user details on page load
  
  // additonal cards
  
  // Function to create sports cards
  function createMovieCard(sports) {
    return `
      <div class="col-md-3 mb-4">
        <div class="card border-0" >
          <img src="${sports.image}" class="card-img-top" alt="..."  style="height:200px">
          <div class="card-body" style="background-image: linear-gradient(black,rgb(50, 48, 48)); color:lightgray;">
            <h5 class="card-title">${sports.sports_name}</h5>
            <p class="card-text">Category: ${sports.category}<br>Year: ${sports.year}</p>
            <button class="btn btn-outline-danger open-video-modal" data-bs-toggle="modal" data-bs-target="#videoModal_${sports.sports_id}" data-video-url="${sports.video}" style="margin-left:24%;">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-btn-fill" viewBox="0 0 16 16">
                <path d="M0 12V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2m6.79-6.907A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"/>
              </svg> Book me
            </button>
          </div>
        </div>
      </div>
    `;
  }
  
  
  
  // Function to fetch movies
  function fetchMovies() {
    axios.get('http://localhost:3000/sports_table')
      .then(response => {
        const sportData = response.data; // Store movies data for search
        const sportContainer = $('#sportContainer');
        sportContainer.empty(); // Clear previous content
  
        sportData.forEach(sports => {
          const card = createMovieCard(sports);
          sportContainer.append(card);
  
  
          const videoModal = `
          <div class="modal fade" id="videoModal_${sports.sports_id}" tabindex="-1" aria-labelledby="videoModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-xl modal-dialog-centered">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="videoModalLabel">${sports.sports_name}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <video controls id="modalVideoPlayer_${sports.sports_id}" style="width: 100%;">
                    <source src="${sports.video}" type="video/mp4">
                    </video>
                  </div>
                  <hr>
                  <div>
                    Sports Category: ${sports.category} </br>  Year released: ${sports.year} </br> Date: ${sports.date} </br> Location :${sports.location}
                  </div>
                  <hr>
                  <div class="accordion" id="accordionPanelsStayOpenExample">
                    <div class="accordion-item">
                      <h2 class="accordion-header">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne_${sports.sports_id}" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne_${sports.sports_id}">
                          Description
                        </button>
                      </h2>
                      <div id="panelsStayOpen-collapseOne_${sports.sports_id}" class="accordion-collapse collapse show">
                        <div class="accordion-body">
                          ${sports.detail}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  
          `;
          $('body').append(videoModal);
        });
  
        // Pass sportData to the search function
        $('#searchBtn').on('click', function () {
          const searchTerm = $('#searchInput').val();
          performSearch(searchTerm, sportData);
        });
      })
      .catch(error => {
        console.error('Error fetching movies:', error);
      });
  }
  
  // Function to perform search across movies
  function performSearch(searchTerm, sportData) {
    const filteredMovies = sportData.filter(sports =>
      sports.sports_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    // Display filtered movies
    const sportContainer = $('#sportContainer');
    sportContainer.empty();
    filteredMovies.forEach(sports => {
      const card = createMovieCard(sports);
      sportContainer.append(card);
    });
  }
  
  
  
  
  
  fetchMovies();
  

  });
  