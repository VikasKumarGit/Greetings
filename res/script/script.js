function Name(){
var namE=prompt('Enter your Name...');
var spaN=document.getElementById('uName');

var nameElement=document.createElement('span')
nameElement.appendChild(document.createTextNode(namE));

spaN.appendChild(nameElement)
}