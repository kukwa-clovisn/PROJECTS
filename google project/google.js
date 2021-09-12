

 
function poutry(chickens,cows,pigs) {
    let cowstrings = String(cows);
    while(cowstrings.length <=4) {
        cowstrings = "0" + cowstrings;
    }
    console.log(cowstrings);
    let chickenstrings = String(chickens);
    while(chickenstrings.length <5) {
        chickenstrings = "0" + chickenstrings;
    }
    console.log(chickenstrings);
    let pigstrings = String(pigs);
    while(pigstrings.length <=4) {
        pigstrings = "0" + pigstrings;
    }
    console.log(pigstrings);
}

poutry(7,921,32);

function mult(numberone,numbertwo,operator) {
    let signs = String(operator);
     if(signs = "*") {
        return console.log(numberone * numbertwo);
     }
    
}


function add(numberone,numbertwo,operator) {
    let signs = String(operator);
     if(signs = "+") {
        return console.log(numberone + numbertwo);
     }
    
}


function sub(numberone,numbertwo,operator) {
    let signs = String(operator);
     if(signs = "-") {
        return console.log(numberone - numbertwo);
     }
    
}


function divide(numberone,numbertwo,operator) {
    let signs = String(operator);
     while(signs = "/") {
        return console.log(numberone / numbertwo);
     }
    
}

add(4,7);
sub();
divide();
mult();






