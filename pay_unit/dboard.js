let table = document.querySelectorAll('table')
let btn = document.querySelectorAll('.btn')
let username = document.getElementById('username')
let content = document.getElementById('content')
let blurContent = document.querySelector('.right-content-divs')
let contentImg = document.getElementById('content-img')
let deposite = document.getElementById('deposite')
let ballance = document.getElementById('ballance')
let current = document.getElementById('current')
let withdrawn = document.getElementById('withdrawn')
let contentName = document.getElementById('content-name')
let paymentSearch = document.getElementById('search')
let paymentDetails = document.getElementById('payment-details')
let jHeader = document.getElementById('jumbotron-header')
let menuBtn = document.getElementById('menu-btn')
let menu = document.querySelector('.left-content')
let header = document.querySelector('header')
let blur = document.getElementById('blur')

let getServiceName = localStorage.getItem('logoName')
getServiceName = JSON.parse(getServiceName)
contentName.innerText = getServiceName;

let clientName = localStorage.getItem('clientName')
clientName = JSON.parse(clientName)
username.innerText = clientName;

let getImg = localStorage.getItem('logoSrc')
getImg = JSON.parse(getImg)
contentImg.src = getImg;

let getDeposite = localStorage.getItem('amount')
getDeposite = JSON.parse(getDeposite)
deposite.innerText = getDeposite + "frs";

let getCurrentBallance = localStorage.getItem('ballance')
getCurrentBallance = JSON.parse(getCurrentBallance)
current.innerText = getCurrentBallance;

let sum = parseInt(getCurrentBallance) + parseInt(getDeposite)

let percentage = 0.02 * parseInt(withdrawn.innerText)

let subtracted = parseInt(withdrawn.innerText) + parseInt(percentage)

let result = sum - subtracted

ballance.innerText = parseInt(result) + "frs";


function myfunction() {
    content.classList.toggle('show-content')
    blurContent.classList.toggle('blur')
    localStorage.setItem('ballance', JSON.stringify(ballance.innerText))

}
let newBallance = localStorage.getItem('ballance')
newBallance = JSON.parse(newBallance)
current.innerText = newBallance

const searchPayment = (val) => {
    val = paymentSearch.value;
    if (val == 'MTN MOMO' || val == "ORANGE MONEY" || val == 'EXPRESS UNION' || val == 'PAYPAL' || val == 'VISA CARD') {
        jHeader.innerText = val;
        paymentDetails.classList.add('payment-details')
        blurContent.classList.toggle('blur')
    } else {
        paymentSearch.placeholder = 'choose valid payment method'

    }
}

function hideDetails() {
    paymentDetails.classList.remove('payment-details')
    blurContent.classList.remove('blur')
}

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('show-menu')
    header.classList.toggle('fixed-header')
    blur.classList.toggle('blur')
})

blur.addEventListener('click', () => {
    menu.classList.remove('show-menu')
    blur.classList.remove('blur')
    header.classList.remove('fixed-header')
})

// for (let i = 0; i < btn.length; i++) {
//     btn[i].addEventListener('click', () => {
//         console.log(table[i])
//         table[i].classList.toggle('show')
//         btn[i].innerText = "close details"
//         btn[i].innerText;
//     })
// }