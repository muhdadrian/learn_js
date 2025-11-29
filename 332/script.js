//Fetch
//Fetch is an API in modern JS. Its task is to fetch data in asynchronous or ajax just like we did XMLHttpRequest in vanilla JS or by using ajax method in jQuery.

const searchButton = document.querySelector('.search-button');
searchButton.addEventListener('click', function () {
  const inputKeyword = document.querySelector('.input-keyword');
  fetch('http://www.omdbapi.com/?apikey=6c4aecc&s=' + inputKeyword.value)
    .then(response => response.json())
    .then(response => {
      const movies = response.Search;
      let cards = '';
      movies.forEach(m => (cards += showCards(m)));
      const movieContainer = document.querySelector('.movie-container');
      movieContainer.innerHTML = cards;

      //when the detail button is clicked
      const modalDetailButton = document.querySelectorAll(
        '.modal-detail-button'
      );
      modalDetailButton.forEach(btn => {
        btn.addEventListener('click', function () {
          //console.log(this); //try to click the Show Details button of avengers movie
          //this from the clicked button | we fetch dataset attribute | in jQuery it's data
          const imdbid = this.dataset.imdbid;
          //console.log(imdbid);
          fetch('http://www.omdbapi.com/?apikey=6c4aecc&i=' + imdbid)
            .then(response => response.json()) //will return promise
            //if success
            .then(m => {
              const movieDetail = showMovieDetail(m);
              const modalBody = document.querySelector('.modal-body');
              modalBody.innerHTML = movieDetail;
            });
        });
      });
    });
});

function showCards(m) {
  return ` <div class="col-md-4 my-3">
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
}

function showMovieDetail(m) {
  return `<div class="container-fluid">
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
}
