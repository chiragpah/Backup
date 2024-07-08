import ArtistService from "../Services/ArtistService.js"
$(document).ready(function () {

    $(".body_container_Artist").html = ""
    $(".body_container_Artist").css({ 'width': '100vw', 'border': '1px solid white', 'background-color': 'rgba(255,255,255,0.9)', 'display': 'flex', 'flex-wrap': 'wrap' })

    ArtistService.getArtistDetails()
        .then((response) => {
            // console.log(response.data);
            let artist = response.data;
            let tempArtistName = sessionStorage.getItem('Artistid');
            console.log(tempArtistName);
            console.log(artist);
            for (let a of artist) {
                if (a.Artistid == tempArtistName) {
                    console.log("hello");
                    let img = `<div class='artist_image'><img src=${a.ArtistImage} ><span><h3>${a.ArtistName}</h3></span></div>`
                    let data = `<div class='artist_data'><table><tr><td>Also Known as:</td><th>${a.ArtistName}</th></tr>
                <tr><td>D.O.B:</td><th>${a.ArtistDob}</th></tr><tr><td>Birth City:</td><th>${a.BirthPlace}</th></tr><tr><td>Occupation:</td><th>${a.Occupation}</th></tr></table></div>`
                    let row = `<div class='artist_bio'>${a.ArtistData}</div>`
                    let row2 = `<br><div><b>Early Life</b></div>`
                    let row3 = `<div>${a.ArtistData2}</div>`
                    console.log(a.ArtistData);
                    $(".body_data").append(row);
                    $(".body_data").append(row2);
                    $(".body_data").append(row3)
                    $(".body_container_Artist").append(img);
                    $(".body_container_Artist").append(data);



                    /* Common styles for all screen sizes */
                    $("img").css({
                        'border-radius': '50%',
                        'width': '280px',
                        'margin-top': '40px'

                    });

                    /* Apply styles to the entire table */
                    $("table").css({
                        'width': '100%',
                        'border-collapse': 'collapse',
                        'margin': '40px 60px',
                        'box-shadow': '0 4px 8px rgba(0, 0, 0, 0.1)',
                        'background': 'linear-gradient(to right, #f9f9f9, #e0e0e0)',
                        'border-radius': '8px',
                        'overflow': 'hidden',
                        'transition': 'box-shadow 0.3s ease-in-out'
                    });

                    /* Apply styles to table cells */
                    $("td, th").css({
                        'padding': '15px',
                        'text-align': 'left',
                        'border': '1px solid #ddd',
                        'color': 'black' // Set text color to black
                    });

                    /* Style alternate rows for better readability */
                    $("tr:nth-child(even)").css({
                        'background-color': '#f5f5f5'
                    });

                    /* Add hover effect to table rows */
                    $("tr").hover(function () {
                        $(this).css('background-color', '#e0e0e0');
                    }, function () {
                        $(this).css('background-color', '');
                    });

                    /* Apply styles to table headers */
                    $("th").css({
                        'border': '2px solid #ddd',
                        'background-color': 'black', // Change background color to black
                        'color': 'white' // Set text color to white
                    });

                    /* Adjust box shadow on hover */
                    $("table").hover(function () {
                        $(this).css('box-shadow', '0 8px 16px rgba(0, 0, 0, 0.2)');
                    }, function () {
                        $(this).css('box-shadow', '0 4px 8px rgba(0, 0, 0, 0.1)');
                    });

                    /* Responsive styles */


                    /* Trigger the resize event on page load */



                }
            }

        })
        .catch(error => {

        })
})