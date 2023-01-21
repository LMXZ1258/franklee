let images = document.querySelector('.images')
let image = document.querySelector('.image')
let n = 36;
for (let i = n-1; i >= 1; i--) {
    var lis = document.createElement('div')
    lis.innerHTML = `<img class="img" src='images/life/img (` + i + `).png'>`
    images.appendChild(lis)
}
let img = document.querySelectorAll('.img')
for (let i = 0; i < img.length; i++) {
    img[i].addEventListener("click", () => {
        image.style.display = "flex"
        let index = n - i - 1;
        image.innerHTML = "<img src='images/life/img (" + index + ").png'>"
        document.body.style.overflow = 'hidden'; //��ֹҳ�滬��
    })
}
image.addEventListener('click', () => {
    image.style.display = "none"
    document.body.style.overflow = 'auto'; //���ֹ�����
})

