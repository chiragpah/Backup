$(document).ready(function () {
    let h1 = `
      <header>
        <div class="header"> 
        <nav class="navbar navbar-expand-lg navbar-light" aria-label="true">
          <div class="container-fluid">
            <a class="navbar-brand nav-link active d-flex pt-4" href="/HTML/Homepage.html">
              <button class="navbar-toggler" type="button" id="toggle" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
  
               </button> &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
               <img src="/Asset/bookmecom-high-resolution-logo-transparent.png" alt="logo" id="img" width="30%" height="50%" class="d-inline-block align-text-top">
            </a>
           
              <div  class="login_btn" >
                <i class="bi bi-geo-alt" ></i><span style="text-decoration: none; font-size: 20px; display: inline; padding-right: 5px;cursor: pointer; margin-top: 10px; color:crimson "
                 id="LocationName"
                 data-bs-toggle="modal"
                 data-bs-target="#exampleModal">Select City</span><svg
                 xmlns="http://www.w3.org/2000/svg"
                 width="30"
                 height="20"
                 fill="currentColor"
                 class="bi bi-geo-alt"
                 viewBox="0 0 16 16"
                 style="margin-top:15px; padding-right: 5px;" 
                  >
                <path
                  d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"
                />
                <path
                  d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
                />
              </svg>
            </div>
           
          </a>
              </div>
            </div>
        </nav>
     
      <nav class="navbar navbar-expand-lg navbar-light bg-light" aria-label="true">
      <div class="container-fluid" id="nav2">
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
           
            <li class="nav-item">
              <a class="navbar-brand nav-link" href="/HTML/movieDetails.html">Movies</a>
            </li>
            <li class="nav-item">
              <a class="navbar-brand nav-link" href="/HTML/event.html">Events</a>
            </li>
            <li class="nav-item">
              <a class="navbar-brand nav-link" href="/HTML/sportDetails.html">Sports</a>
            </li>
          </ul>
          <form class="d-flex">
            <input class="form-control me-2" type="search" id='search-input' placeholder="Search movies and events near you" aria-label="Search">
            <button class="btn btn-outline-dark" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
    </header>
  `
    $("body").prepend(h1);
})