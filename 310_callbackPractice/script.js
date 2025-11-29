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
  url: 'http://www.omdbapi.com/?apikey=6c4aecc&s=avengers',
  success: results => {
    console.log(results); //we already get the data by using ajax and callback
  },
  error: e => {
    console.log(e.responseText);
  },
});
//to remove the search keyword in console go to 311
