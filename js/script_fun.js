let images = document.querySelector('.images')
let image = document.querySelector('.image')
let n = 50;
for (let i = n-1; i >= 1; i--) {
    var lis = document.createElement('div')
    lis.innerHTML = `<img class="img" src='images/fun/img (` + i + `).png'>`
    images.appendChild(lis)
}
let img = document.querySelectorAll('.img')
for (let i = 0; i < img.length; i++) {
    img[i].addEventListener("click", () => {
        image.style.display = "flex"
        let index = n - i - 1;
        image.innerHTML = "<img src='images/fun/img (" + index + ").png'>"
        document.body.style.overflow = 'hidden'; //禁止页面滑动
    })
}
image.addEventListener('click', () => {
    image.style.display = "none"
    document.body.style.overflow = 'auto'; //出现滚动条
})

