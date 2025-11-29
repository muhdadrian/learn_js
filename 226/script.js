//we do total duration 1st

//fetch all video elements
const videos = Array.from(document.querySelectorAll('[data-duration'));

//select 'Advanced Travel'
let advancedTravel = videos
  .filter(video => video.textContent.includes('Advanced Travel'))

  .map(item => item.dataset.duration)

  //convert the duration from string (above) to float, convert minute to seconds
  .map(time => {
    const parts = time.split(':').map(part => parseFloat(part)); //map here again
    return parts[0] * 60 + parts[1];
  })

  //total all seconds
  //accumulator = total
  //currentValue = seconds
  .reduce((total, seconds) => total + seconds);

//change the format to hours, minutes and seconds
//to change we cannot chaining
//hour / 3600
//8292 / 3600
const hour = Math.floor(advancedTravel / 3600);
advancedTravel = advancedTravel - hour * 3600;
const minute = Math.floor(advancedTravel / 60);
const second = advancedTravel - minute * 60;

//save in DOM
const duration = (document.querySelector(
  '.total-duration'
).textContent = `${hour} Hours, ${minute} Minutes, ${second} Seconds.`);

const totalVideo = videos.filter(video =>
  video.textContent.includes('Advanced Travel')
).length; //copy from filtered video above + length
const pTotalVideo = document.querySelector('.total-video');
pTotalVideo.textContent = `${totalVideo} Video.`;

console.log(advancedTravel);
console.log(hour);
console.log(minute);
console.log(second);
console.log(totalVideo);
