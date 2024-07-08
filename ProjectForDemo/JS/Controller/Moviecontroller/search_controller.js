const dataUrl='http://localhost:3000/Movies';

function getUserDetails() {
    axios.get(dataUrl).then(response => {
      const fullData = response.data;
      displayAtsearch(fullData);
      const categories = [...new Set(response.data.map((item) => { return item }))]  //... used to convert the Set object back into an array. data traverse usin map
      document.getElementById('search-input').addEventListener('keyup', (e) => {

        const searchData = e.target.value.toLowerCase();
  
        const filteredData = categories.filter((item) => {
          return (
            item.movie_name.toLowerCase().includes(searchData)
          )
        })
        displayAtsearch(filteredData)
      });

      function displayAtsearch(fullData) {  
        //display data
        const gridContainer = document.getElementById('grid-container');
        if (!gridContainer) {
          //console.error('Grid container not found');
          return;
        }
        gridContainer.innerHTML = fullData.map((item) => {
           var {Movie_image, movie_name} = item;
       
          return (
            `<div class='card grid-item'>
                        <img  src="${Movie_image}" class='card-img' alt="imagedisplay"/>
                    <div class='card-body'>
                    <h5 class="name">${movie_name}</h5> 
                     </div>
                </div>`
          )
        }).join('')
      }
  
    })
      .catch(error => {
        console.error('error fetching user details', error);
      });
  
  }
  
  getUserDetails();//fetch user details on page load



