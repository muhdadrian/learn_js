//when we click the Show Details button in web, we will request ajax from another api
//go to bootstrap find modal - copy the live demo code

$.ajax({
  //for detail search replaced the s with i in postman and the value with imdbID
  url: 'http://www.omdbapi.com/?apikey=6c4aecc&s=lord of the rings',
  success: results => {
    const movies = results.Search;
    let cards = '';
    movies.forEach(m => {
      cards += ` <div class="col-md-4 my-3">
                    <div class="card">
                      <img src="${m.Poster}" class="card-img-top" />
                      <div class="card-body">
                        <h5 class="card-title">${m.Title}</h5>
                        <h6 class="card-subtitle mb-2 text-body-secondary">${m.Year}</h6>
                        <a href="#" class="btn btn-primary modal-detail-button"  data-bs-toggle="modal"
                        data-bs-target="#movieDetailModal" data-imdbid="${m.imdbID}">Show Details</a>
                      </div>
                    </div>
                  </div>`;
    });

    $('.movie-container').html(cards);

    //when detail button is clicked (don't use arrow function, as sometimes we need this when we use event handler like below)
    $('.modal-detail-button').on('click', function () {
      //console.log($(this).data('imdbid')); //click the show details in web and check at console
      $.ajax({
        //use i not s
        url: 'http://www.omdbapi.com/?apikey=6c4aecc&i=' + $(this).data('imdb'),
        success: m => {
          const movieDetail = ``; //we cut the container-fluid in html. Go to 315
        },
      });
    });
  },
  error: e => {
    console.log(e.responseText);
  },
});
