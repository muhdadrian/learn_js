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
        url:
          'http://www.omdbapi.com/?apikey=6c4aecc&i=' + $(this).data('imdbid'),
        success: m => {
          console.log(m);
          const movieDetail = `<div class="container-fluid">
                  <div class="row">
                    <div class="col-md-3">
                      <img src="${m.Poster}" class="img-fluid" />
                    </div>
                    <div class="col-md">
                      <ul class="list-group">
                        <li class="list-group-item"><h4>${m.Title} (${m.Year})</h4></li>
                        <li class="list-group-item">
                          <strong>Director : </strong>${m.Director}
                        </li>
                        <li class="list-group-item">
                          <strong>Actors : </strong> ${m.Actors}
                        </li>
                        <li class="list-group-item">
                          <strong>Writer : </strong>${m.Writer}
                        </li>
                        <li class="list-group-item">
                          <strong>Plot : </strong><br />${m.Plot}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>`;

          $('.modal-body').html(movieDetail);
        },
        error: e => {
          console.log(e.responseText);
        },
      });
    });
  },
  error: e => {
    console.log(e.responseText);
  },
});

//we clean the code above in 316
