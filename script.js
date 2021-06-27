  
const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const text = intro.querySelector("h1");
//END SECTION
const section = document.querySelector("section");
const end = section.querySelector("h1");

//SCROLLMAGIC
const controller = new ScrollMagic.Controller();

//Scenes
let scene = new ScrollMagic.Scene({
  duration:1000,
  triggerElement: intro,
  triggerHook: 0
})
  
  .setPin(intro)
  .addTo(controller);

//Text Animation
const textAnim = TweenMax.fromTo(text, 3, { opacity: 1 }, { opacity: 0 });
let scene2 = new ScrollMagic.Scene({
  duration: 500,
  triggerElement: intro,
  triggerHook: 0
})
  .setTween(textAnim)
  .addTo(controller);

//Video Animation
let accelamount =0.1;
let scrollpos = 0;
let delay = 0;

scene.on("update", e => {
scrollpos = e.scrollPos / 100;
});

setInterval(() => {
delay += (scrollpos - delay) * accelamount;
console.log(scrollpos, delay);

video.currentTime = delay;
}, 41.666);

const slider = document.querySelector(".slider");

//Loader Page
var loader = document.getElementById("preloader");
window.addEventListener("load", function(){
    loader.style.display = "none";
    
  })
 

// "Previous" and "Next" button
const prev = slider.querySelector("#prevPicture");
const next = slider.querySelector("#nextPicture");

const mySlides = slider.querySelectorAll("li");

// index of the image currently displayed on screen
let indexOfImg = 0;
mySlides[indexOfImg].className = "visible";


let list = [];
mySlides.forEach(function(el) {
    list.push(el);
})
console.log(list);

list[0].className = "visible";


// Adding "visible" class
function makeItVisible(a) {
    list[a].className = "visible";
}

// Removing "visible" class
function makeItInvisible(b) {
    list[b].className = "";
}

// "Click" events:
// Previous image
prev.addEventListener("click", function () {
    indexOfImg--;
    if (indexOfImg < 0) {
        indexOfImg = list.length-1
        makeItInvisible(0);
        makeItVisible(indexOfImg);
    } else {
        makeItInvisible(indexOfImg+1);
        makeItVisible(indexOfImg);
    }
})

// Next image
next.addEventListener("click", function () {
    indexOfImg++;
    if (indexOfImg >= list.length) {
        indexOfImg = 0;
        makeItInvisible(list.length-1);
        makeItVisible(indexOfImg);
    } else {
        makeItInvisible(indexOfImg-1);
        makeItVisible(indexOfImg);
    }
})



