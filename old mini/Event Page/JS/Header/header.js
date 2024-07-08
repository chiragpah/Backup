$(document).ready(function () {
    let h1 = `
    
  <header style="background-color:#010116">
  <div class="logo">
      <img src="/Asset/bookmecom-high-resolution-logo-transparent.png" alt="Your Logo">
  </div>
  <nav>
      <a href="#">Movies</a>
      <a href="#">Events</a>
      <a href="#">Sports</a>
  </nav>
  <div>
      <input type="text" class="search-bar" id="search-input" placeholder="Search...">
      <button id="search-btn">Search</button>
  </div>
  <div>
      <i id="location-icon" class="fa fa-map-marker"></i>
      <button id="signin-btn">Sign In</button>
  </div>


  
</header>`
$("body").prepend(h1);
})