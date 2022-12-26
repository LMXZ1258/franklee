//welcome to my secret place
const text_l = document.querySelector('#text_1')
const text1 = 'Welcome to My Secret Place!'
let idx = 1
let speed_1 = 100
writeText()
function writeText() {
  text_l.innerText = text1.slice(0, idx)

  idx++

  if(idx > text1.length) {
      idx = 1
  }
  setTimeout(writeText, speed_1)
}
//放映室
let list = document.querySelector(".list_img");
let box = document.querySelector(".box_img");
let left_img = document.querySelector("#left_img");
let right_img = document.querySelector("#right_img");
list.innerHTML += list.innerHTML;

let left = 0;

let n =33;
let speed = 3;

let timer;

function move() {
  clearInterval(timer)

  timer = setInterval(function () {

    left -= speed;
    if (left <= -(950*n+25*(n-1))){
      left = 0;
    }
    list.style.left = left + 'px'
  },10)
}

function speedup(){
  speed += 0.5;
}
function speeddown(){
  speed -= 0.5;
}

move()
box.onmouseenter = function () {
  clearInterval(timer);
}
box.onmouseleave = function () {
  move();
}


left_img.addEventListener("click",speeddown);
right_img.addEventListener("click",speedup);


let last_level = document.querySelector(".fbtn_1");
let next_level = document.querySelector(".fbtn_2");
let img = document.querySelector("#_2");
let h = img.offsetHeight;
let level = 0;
function go_next() {
    level++;
   window.scrollTo(0,level*h);
}
function go_last() {
  level--;
  window.scrollTo(0,level*h);
}
next_level.addEventListener("click",go_next);
last_level.addEventListener("click",go_last);