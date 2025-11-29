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

const searchButton = document.querySelector('.search-button');
searchButton.addEventListener('click', async function () {
  try {
    const inputKeyword = document.querySelector('.input-keyword');
    const movies = await getMovies(inputKeyword.value);
    //updateUI(movies);
  } catch (err) {
    console.log(err);
  }
});

function getMovies(keyword) {
  return fetch('http://www.omdbapi.com/?apikey=6c4aecc&s=' + keyword)
    .then(response => {
      // if(response.ok === false), or you can use replacement code below
      if (!response.ok) {
        throw new Error(response.statusText); //the statusText will be thrown and captured by catch above. Try to make the apikey above wrong to make the error works
      }
      return response.json(); //if it's ok this line will be executed. If not ok, the throw new Error(response.statusText) line above will be executed
    })
    .then(response => response.Search); //we need to adjust this when we want to search for movie. Go to 354
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
