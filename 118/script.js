//Node Manipulation

//To remove the link (Instagram)
//1. know the parent - section A
//2. the element we are going to remove

const sectionA = document.getElementById('a');

const link = document.getElementsByTagName('a')[0];
//we use by tag name, as it's the only a and the first tag a
//we can also use query selector as it does not have id or class

sectionA.removeChild(link);
