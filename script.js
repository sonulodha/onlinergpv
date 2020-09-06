var dropbox = document.querySelector('#dropbox');
var button = document.querySelector('button');
var menu = document.querySelector('#menu');



button.addEventListener('click',function(){
    // var x = menu.style.display = 'initial';
    var x = document.getElementById("menu");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
})