/*
1. Error Handling: Promise
- .then() - to execute in resolve
- .catch() - to execute in reject. If there's error, we capture by using catch method  
*/

/*
2. Error Handling: Async Await
- try - to capture resolve
- catch() - to capture reject 
*/

/*
3. fetch()
- inside it is a promise.
- we do not know reject method in fetch.
- what we try is the resolve method in fetch 
*/

//let's code...
//type randomly of the movie title in input, it will output error in the console. We must manage the error by creating try and catch error
//after adding the try and catch, the error is already captured by the catch. The display is no longer due to browser behaviour (red color)
const searchButton = document.querySelector('.search-button');
searchButton.addEventListener('click', async function () {
  //we add try and catch block
  try {
    const inputKeyword = document.querySelector('.input-keyword');
    const movies = await getMovies(inputKeyword.value);
    updateUI(movies);
    //when there's error, we capture it inside the catch parameter below
  } catch (err) {
    console.log(err);
  }
});

function getMovies(keyword) {
  return fetch('http://www.omdbapi.com/?apikey=6c4aecc&s=' + keyword)
    .then(response => response.json())
    .then(response => response.Search);
}

function updateUI(movies) {
  let cards = '';
  movies.forEach(m => (cards += showCards(m)));
  const movieContainer = document.querySelector('.movie-container');
  movieContainer.innerHTML = cards;
}

document.addEventListener('click', async function (e) {
  if (e.target.classList.contains('modal-detail-button')) {
    const imdbid = e.target.dataset.imdbid;
    const movieDetail = await getMovieDetail(imdbid);
    updateUIDetail(movieDetail);
  }
});

function getMovieDetail(imdbid) {
  return fetch('http://www.omdbapi.com/?apikey=6c4aecc&i=' + imdbid)
    .then(response => response.json())
    .then(m => m);
}

function updateUIDetail(m) {
  const movieDetail = showMovieDetail(m);
  const modalBody = document.querySelector('.modal-body');
  modalBody.innerHTML = movieDetail;
}

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
