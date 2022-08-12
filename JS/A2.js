/* navigation bar*/
hambutton = document.getElementById('hambutton');
hambutton.addEventListener("click", ()=> {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  );

/* text animation */
var speed = 2000; 
var t = setInterval(function(){
  var slideSource = document.getElementById('textnode');
  slideSource.classList.toggle('fade');
}, speed);