    let amount = document.getElementById('amount')
    let firstPage = document.querySelector('.page-one')
    let errorMsg = document.getElementById('error-msg')
    let payBtn = document.getElementById('pay-btn')
    let secondPage = document.querySelector('.page-two')
    let thirdPage = document.querySelector('.page-three')
    let getAmount = document.getElementById('get-amount')
    let username = document.getElementById('username')




    function pay() {
        if (amount.value !== '' && username.value !== '') {
            firstPage.classList.add('hide')
            amount.classList.remove('error')
            localStorage.setItem('clientName', JSON.stringify(username.value))
            localStorage.setItem('amount', JSON.stringify(amount.value))
            payBtn.style.background = "rgb(0, 164, 154)"
            secondPage.style.display = "inline-block"
            getAmount.innerText = amount.value;
        } else {
            errorMsg.style.display = "block"
            amount.classList.add('error')
            amount.style.borderTop = "3px solid red"
        }
    }

    amount.addEventListener('keypress', () => {
        amount.style.borderTop = "3px solid teal"
        amount.classList.remove('error')
        errorMsg.style.display = "none"
    })

    // let newAmount = localStorage.getItem('amount')
    // getAmount.innerText = JSON.parse(newAmount);

    const back = () => {
        secondPage.style.display = "none"
        firstPage.style.display = "block"
    }
    const next = () => {
        let mtn = document.getElementById('mtn')
        let eu = document.getElementById('eu')
        let cb = document.getElementById('cb')
        let paypal = document.getElementById('paypal')
        let visa = document.getElementById('visa')
        if (mtn.checked) {
            let mtnLogo = document.getElementById('mtn-logo')
            localStorage.setItem('logoSrc', JSON.stringify(mtnLogo.src))
            localStorage.setItem('logoName', JSON.stringify("MTN MOMO"))
            nav();
        } else if (eu.checked) {
            let euLogo = document.getElementById('eu-logo')
            localStorage.setItem('logoSrc', JSON.stringify(euLogo.src))
            localStorage.setItem('logoName', JSON.stringify("EXPRESS UNION"))
            nav();
        } else if (cb.checked) {
            let cbLogo = document.getElementById('cb-logo')
            localStorage.setItem('logoSrc', JSON.stringify(cbLogo.src))
            localStorage.setItem('logoName', JSON.stringify("CENTRAL BANK"))
            nav();
        } else if (orange.checked) {
            let orangeLogo = document.getElementById('orange-logo')
            localStorage.setItem('logoSrc', JSON.stringify(orangeLogo.src))
            localStorage.setItem('logoName', JSON.stringify("ORANGE MONEY"))
            nav();
        } else if (paypal.checked) {
            let paypalLogo = document.getElementById('paypal-logo')
            localStorage.setItem('logoSrc', JSON.stringify(paypalLogo.src))
            localStorage.setItem('logoName', JSON.stringify("paypal"))
            nav();
        }

    }

    function nav() {
        // secondPage.style.display = "none"
        // firstPage.style.display = "none"
        // thirdPage.style.display = "block"
        window.location.href = "/dboard.html";
    }