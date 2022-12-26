document.body.style.overflow = 'hidden'; 

let loadingBox = document.querySelector("#loading-box");
window.addEventListener('load', function () {
//‘ÿ»Î∂Øª≠
loadingBox.classList.add("loaded");
bg.style.cssText = "transform: scale(1);filter: blur(0px);transition: ease 1.5s";
cover.style.cssText = "opacity: 1;transition: ease 1.5s";
section.style.cssText = "transform: scale(1);opacity: 1;filter: blur(0px)";
}, false)