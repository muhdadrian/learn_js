//3. Conditionals
// we can use ternary

const song = {
  title: 'Sesungguhnya',
  singer: 'Raihan',
};

const el = `<div class="song">
<ul>
<li>${song.singer}</li>
<li>${song.title}</li>
</ul>
</div>`;

document.body.innerHTML = el;

//this will no problem. but how about if there's additional data of featuring with other singer for example
