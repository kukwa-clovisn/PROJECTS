let sample = document.querySelector('.samples');
let intro = document.querySelector('#intro');
let fixed = document.querySelector('.fixed');

intro.addEventListener('mousedown', (e) =>{

    if(event.button == '1') {
          intro.style.backgroundColor = 'skyblue';
    } else if(event.button == '2') {
        intro.style.backgroundColor = 'rgb(80, 120, 87)';
    } else if(event.button == '0') {
        intro.style.backgroundColor = 'white';
        fixed.style.display = 'inline-block';
    }
     else{
        intro.style.backgroundColor = 'lightgray';
    }


  
});

// setTimeout(event.mouseover, 2000);