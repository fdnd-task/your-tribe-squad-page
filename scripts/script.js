const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1
        const slides = button
        .closest("[data-carousel]")
        .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
    })
})

var button = document.querySelector('#inout')
var div = document.querySelector('#monitor1')

button.addEventListener('click', function(){
  div.classList.toggle('zoomed')
})



var clicked = false;
function toggle(){
  if(!clicked){
    clicked = true;
    document.getElementById("inout").innerHTML = "zoom_out";
  }else{
    clicked = false;
    document.getElementById("inout").innerHTML = "zoom_in";
  }
}


// var button = document.querySelector('#in')
// var div = document.querySelector('#monitor1')

// button.addEventListener('click', function(){
//   div.classList.toggle('zoomed')
// })

// var button = document.querySelector('#out')
// var div = document.querySelector('#monitor1')

// button.addEventListener('click', function(){
//   div.classList.toggle('zoomedout')
// })

// var button = document.querySelector('#in')
// var div = document.querySelector('#in')

// button.addEventListener('click', function(){
//   div.classList.toggle('weg')
// })

// var button = document.querySelector('#in')
// var div = document.querySelector('#out')

// button.addEventListener('click', function(){
//   div.classList.toggle('nietweg')
// })

// var button = document.querySelector('#out')
// var div = document.querySelector('#out')

// button.addEventListener('click', function(){
//   div.classList.toggle('weg')
// })

// var button = document.querySelector('#out')
// var div = document.querySelector('#in')

// button.addEventListener('click', function(){
//   div.classList.toggle('nietweg')
// })



//roelie geluktsel
const canvas = document.getElementById('monitor2');
const ctx = canvas.getContext('2d');

const w = canvas.width = document.body.offsetWidth;
const h = canvas.height = document.body.offsetHeight;
const cols = Math.floor(w / 20) + 1;
const ypos = Array(cols).fill(0);

ctx.fillStyle = 'black';
ctx.fillRect(0, 0, w, h);

function matrix () {
  ctx.fillStyle = '#0001';
  ctx.fillRect(0, 0, w, h);

  ctx.fillStyle = 'rgb(27, 118, 19)';
  ctx.font = '15pt monospace';

  ypos.forEach((y, ind) => {
    const text = String.fromCharCode(Math.random() * 128);
    const x = ind * 20;
    ctx.fillText(text, x, y);
    if (y > 100 + Math.random() * 10000) ypos[ind] = 0;
    else ypos[ind] = y + 20;
  });
}

setInterval(matrix, 50);