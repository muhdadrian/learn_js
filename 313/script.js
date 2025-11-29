//we use https://www.omdbapi.com/ as sample in this practice
//we first make API Key from the web
//get postman or insomnia or https://insomnia.rest to request API and to check whether API connection is successful or not
//we do website by using bootstrap (replace the default to have jQuery ajax)
//we want to look data for film - our favorite ones

/*
1. In Usage under Send all data requests to:
copy: http://www.omdbapi.com/?apikey=[yourkey]&

2. paste the link above in postman - click workspace and click the plus sign 

3. replace the key with your key - erase the bracket

4. In the table, under the Key below apikey, type s | under Value below my key (apikey)
*/

$.ajax({
  //you can try another movie by replacing avengers with harry potter or another movie
  //we connect to api by adding parameter s (6c4aecc&s), which is in the end of our key. It means search, we look for movie based on title
  //for detail search, go to 314
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
                        <a href="#" class="btn btn-primary">Show Details</a>
                      </div>
                    </div>
                  </div>`;
    });

    $('.movie-container').html(cards);
  },
  error: e => {
    console.log(e.responseText);
  },
});
