// function animate() {
//     let features = document.getElementById('#features');
//     features.classList.toggle("slide");
// }
// window.onload = animate();
// creating a function that changes header color onscrolling 

let header = document.querySelector('header');
let nav = document.querySelector('a');
let a1 = document.querySelector('.a1');
let a2 = document.querySelector('.a2');
let a3 = document.querySelector('.a3');
let a4 = document.querySelector('.a4');
let a5 = document.querySelector('.a5');
let a6 = document.querySelector('.a6');
let paypal = document.querySelector('.pay-pal');

function dashboard() {
    console.log('this is dashboard')
    window.location.href = 'dashboard.html';
}

function myFunction() {

    if (document.body.scrollTop > 500 && document.body.scrollTop < 1300 || document.documentElement.scrollTop > 500 && document.documentElement.scrollTop < 1300) {
        header.style.background = 'white';
        header.style.height = '15vh';
        nav.style.color = 'black';
        a1.style.color = 'black';
        a2.style.color = 'black';
        a3.style.color = 'black';
        a4.style.color = 'black';
        a5.style.color = 'black';
        a6.style.color = 'black';
        menu.style.color = 'black';
        paypal.style.background = 'teal';
        paypal.style.color = 'white';
        // animate()
    } else if (document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1500) {
        header.style.background = "rgb(82,137,139)";

    } else {
        header.style.background = '';
        nav.style.color = 'white';
        a1.style.color = 'white';
        a2.style.color = 'white';
        a3.style.color = 'white';
        a4.style.color = 'white';
        a5.style.color = 'white';
        a6.style.color = '#606060';
        menu.style.color = 'white';
        paypal.style.background = 'white';
        paypal.style.color = 'rgb(82,137,139)';
    }
}

window.onscroll = function () {
    myFunction();
    // features_animate();
}
// creating a function that pops out the features animations
function features_animation() {
    document.querySelector('#features').style.background = 'blue';
}


// creating the menu function
let menu = document.querySelector('.menu');
let menu_list = document.querySelector('#menu-items');

menu.addEventListener('click', () => {
    menu_list.classList.toggle('show-menu');
})

// creating a function that changes the contact section
let form1 = document.getElementById('form1');
let form2 = document.getElementById('form2');
let form3 = document.getElementById('form3');
let inscription = document.getElementById('inscription');
let sign_up = document.getElementById('sign_up');
let register = document.getElementById('register');
let log_in = document.getElementById('log_in');
let contact = document.getElementById('contacts');
let contact_content = document.getElementById('contact-top-content');

inscription.addEventListener('click', () => {
    form1.style.visibility = 'visible';
    form2.style.visibility = 'hidden';
    form3.style.visibility = 'hidden';
    // form1.style.background = "rgb(148, 84, 209)";
    // contact_content.style.background = 'rgb(148, 84, 209)';
    // contact.style.background = "rgb(123, 57, 185)";
})

sign_up.addEventListener('click', () => {
    form1.style.visibility = 'hidden';
    form2.style.visibility = 'visible';
    form3.style.visibility = 'hidden';
    // form2.style.background = 'rgb(100,117,169)';
    // contact_content.style.background = "rgb(100,117,169)";
    // contact.style.background = "rgb(100,117,169)";
})

log_in.addEventListener('click', () => {
    form1.style.visibility = 'hidden';
    form2.style.visibility = 'hidden';
    form3.style.visibility = 'visible';
    form1.style.background = "";
    contact_content.style.background = '';
    contact.style.background = "";
})

// animating the submit and log in button with sweet alerts

function submitted() {
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let age = document.getElementById('age').value;
    let address = document.getElementById('address').value;
    let tel = document.getElementById('tel').value;
    let school = document.getElementById('class').value;
    let location = document.getElementById("location").value;

    if (firstName == " " && lastName == " " && age == " " && address == " " && tel == " " && school == " " && location == " ") {
        swal("Awesome!", "your form has been successfully submitted. \n we will send updates to your email", "success")
    } else {
        sweetAlert("ooopss...", "one or more input field has not been filled. \n Do well to fill all inputs", "error");
    }
}

function sign() {
    let username = document.getElementById('username').value;
    let email = document.getElementById('email-address').value;
    let password = document.getElementById('passWord').value;
    let contact = document.getElementById('contact').value;

    if (username == " " && email == " " && password == " " && contact == " ") {
        swal("Bravo", "sign your sign up info is been processed!", "success");
    } else {
        sweetAlert("sign up failure!", "check your info  again and try signing up again", "error");
    }
}



const validate = () => {

    // const database = [
    //     person1 = {
    //         name :"kukwa clovis",
    //         password : "ngong"
    //     },
    //     person2 = {
    //         name : "Nkwain Bryan",
    //         password : "yuh"
    //     },
    //     person3 = {
    //         name : "kukwa emile",
    //         password : "emile"
    //     }

    // ];
    let myName = document.getElementById('yourName').value;
    let myPassword = document.getElementById('yourPassword').value;
    let myname = "kukwa clovis ngong";
    // let myname = "Nkwain Bryan";
    let mypassword = "ngong";
    // let mypassword = "yuh";
    // if(database[name] == myName && database[password] == myPassword){
    //     swal("well done!", "log in successful", "success");
    // } else{
    //     sweetAlert("Heyy..", "username or password error", "error");
    // }
    // console.table(database);
    // console.log(database[password]);
    if ((myname == myName) && (mypassword == myPassword)) {
        swal("well done", "your log in has succesfully been processed \n \t Thanks for trusting us!", "success");
    } else {
        sweetAlert("heyy...", "UserName or password is incorrect \n \t please make sure your log in info is correct!", "error");
    }
}