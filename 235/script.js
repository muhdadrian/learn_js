//3. Conditionals
// we can use ternary
//if there's feat, it will display the feat. If no, then it'll be empty

const song = {
  title: 'Sesungguhnya',
  singer: 'Raihan',
  feat: 'Nazri',
};

const el = `<div class="song">
<ul>
<li>${song.singer}</li>
<li>${song.title} ${song.feat ? `(feat. ${song.feat})` : ''}</li>
</ul>
</div>`;

document.body.innerHTML = el;
