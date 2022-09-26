var newDiv = document.createElement('div');
newDiv.className = 'hello';
newDiv.id = 'hello1';

newDiv.setAttribute('title','hello div');

var nerDivText = document.createTextNode('Hello world');

newDiv.appendChild(newDivText);
var container = document.querySelector('header.container');

var h1 = document.querySelector('header h1');

console.log(newDiv);

newDiv.style.fontSize = '30px';
conatainer.insertBefore(newDiv,h1);
