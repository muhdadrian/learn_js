const title = document.getElementById('title');
//title.innerHTML = 'Adrian Nandu';
title.innerHTML = '<em>Adrian Nandu</em>'; //why there's border?: h1 and em also has border due to CSS (*{})

const sectionA = document.querySelector('section#a');
//sectionA.innerHTML = 'Hello World'; //this will replace all the section with id a.
sectionA.innerHTML = '<div><p>paragraph1</p></div>';
