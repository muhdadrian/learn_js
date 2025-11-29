//we do total duration 1st

//fetch all video elements
const videos = Array.from(document.querySelectorAll('[data-duration'));

//select 'Advanced Travel'
const advancedTravel = videos
  .filter(video => video.textContent.includes('Advanced Travel'))

  .map(item => item.dataset.duration)

  //convert the duration from string (above) to float, convert minute to seconds
  .map(time => {
    const parts = time.split(':');
    return parts[0] * 60 + parts[1]; //10:30 - 10*60 + 30
    //this will output string. Map each element to float. Go to 226
  });

//total all seconds

//change the format to hours, minutes and seconds

//save in DOM

console.log(advancedTravel);
