//we do total duration 1st

//fetch all video elements
//const videos = document.querySelectorAll('[data-duration');
//console.log(videos); //output is nodelist. It's not array and we cannot apply the map ,filter and reduce. We need to change it first to array. Replace the code above with below:
const videos = Array.from(document.querySelectorAll('[data-duration'));
//console.log(videos);

//select 'Advanced Travel'
const advancedTravel = videos
  .filter(video => video.textContent.includes('Advanced Travel')) //find or filter video that inside (text content) it includes Advanced Travel

  //fetch each video duration (we have 8 videos)
  //in JS you can call data set method to fetch the attribute of 'duration'
  //we chaining for conveniency. Remove the semi-colon above
  .map(item => item.dataset.duration) //we map each element to return the duration. Check in console.log(advancedTravel) whether you already fetched the duration or not

  //convert the duration from string (above) to float, convert minute to seconds
  .map(time => {
    //10:30(example only) -> [10, 30] split the time. The check in console.log(advancedTravel);
    const parts = time.split(':');
    return parts;
  }); //go to 225

//total all seconds

//change the format to hours, minutes and seconds

//save in DOM

console.log(advancedTravel);
