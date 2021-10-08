
let menuBtn = document.querySelector('.menu-btn');
let menuSection = document.querySelector('.menu-section');
let main = document.querySelector('.main');
let header = document.querySelector('header');
let body = document.querySelector('body')

menuBtn.addEventListener('click', function() {
    menuSection.classList.toggle('show-menu');
    main.classList.toggle('blur')
    header.classList.toggle('fixed')
})
// header.addEventListener('click', () => {
//     menuSection.classList.remove('show-menu');
//     // main.classList.remove('blur')
// })


// creating the home carousel
let renderImg = document.querySelector('.img');
// listing the images src in an array
let imageSrc = ["/assets/R_estate1.jpg", "/assets/R_estate2.jpg" ,"/assets/R_estate3.jpg" ,"/assets/R_estate.jpg"];

for(let i = 0; i < imageSrc.length; i++) {
    let img = document.createElement('img');
    img.src += imageSrc[i];
    img.classList.add('img'+ [i]);
    // renderImg.append(img);

    let book = document.createElement('a');
    book.innerText = "book" + ' ' + "appointment"
    book.classList.add('appointment')
    book.setAttribute('href', '')
    // renderImg.append(book)

    let checkIn = document.createElement('a');
    checkIn.textContent = "download"
    checkIn.classList.add('check')
    checkIn.setAttribute('href', "")
    // renderImg.append(checkIn)
  
}
// let img0 = document.querySelector('.img0')
// let img1 = document.querySelector('.img1')
// let img2 = document.querySelector('.img2')
// let img3 = document.querySelector('.img3')

// img0.addEventListener('click', () => {
//     img0.classList.toggle('show-slide')
//     img1.classList.toggle('show-slide')
//     img2.classList.toggle('hide-slide')
//     img3.classList.toggle('hide-slide')
//     // img0.style.display = "none"
// })
// img1.addEventListener('click', () => {
//     img0.classList.toggle('show-slide')
//     img1.classList.toggle('show-slide')
//     img2.classList.toggle('hide-slide')
//     img3.classList.toggle('hide-slide')
// })

// 
let img_src = [];
let btnDiv = document.querySelectorAll('.btn')
let imgFixed = document.querySelectorAll('._img')
console.log(btnDiv[2])

    
    for(let i = 0; i < imgFixed.length; i++) {
        function checkin() {
            btnDiv[i].style.display = "none";
            imgFixed[i].classList.add('fill')
    }
}