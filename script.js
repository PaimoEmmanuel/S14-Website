//FOR THE TYPEWRITER EFFECT


function typewriter(string){
var headerText = document.getElementById('home-header-text');
var n = 0;
var str = string;
var typeTimer = setInterval(function() {
  n = n + 1;
  headerText.innerHTML = "" + str.slice(0, n);
  if (n === str.length) {
    clearInterval(typeTimer);
    headerText.innerHTML = "" + str;
    n = 0;
    setInterval(function() {

      if (n === 0) {
        headerText.innerHTML = "" + str + "|"
        n = 1;
      } else {
        headerText.innerHTML = "" + str
        n = 0;
      };
    }, 500);
  };
}, 80);
};
typewriter("We create innovative digital solutions.");



//FOR THE MOVING WAVY VECTOR1 ON SCROLL
/*var window_width = $(window).width() - $('#wavy').width();
var document_height = $(document).height() + 700;
$(function () {
    $(window).scroll(function () {
        var scroll_position = $(window).scrollTop() + 400;
        var object_position_left = window_width * (scroll_position / document_height);
        $('#wavy').css({
            'top': object_position_left
        });
    });
});*/

//FOR THE MOVING WAVY VECTOR1 ON SCROLL
var window_width2 = $(window).width() - $('#wavy2').width();
var document_height2 = $(document).height() -1000 ;
$(function () {
    $(window).scroll(function () {
        var scroll_position2 = $(window).scrollTop() ;
        var object_position_left2 = window_width2 * (scroll_position2 / document_height2);
        $('#wavy2').css({
            'bottom': object_position_left2
        });
    });
});

//For the client carousel
let next = document.getElementsByClassName("next")[0];
let prev = document.getElementsByClassName("prev")[0];
let srcArr = ["img/bcc.png", "img/fb.png", "img/pp.png"];
let clientLogoPosition = document.getElementsByClassName("clients__image");


function nextFn(){
  srcArr.push(srcArr.shift())
  for(let i =0; i < clientLogoPosition.length; i++){
      clientLogoPosition[i].src = srcArr[i];
  }
}

/*$(document).ready(function(){
  myVar = setInterval("nextFn()", 1000);
});*/
next.onclick = nextFn;
prev.onclick = function(){
  srcArr.unshift(srcArr.pop());
  for(let i =0; i < clientLogoPosition.length; i++){
      clientLogoPosition[i].src = srcArr[i];
  }
}


//FOR BLINKING DOT ON CONTACT PAGE


// FOr the build, UiUx tabs
