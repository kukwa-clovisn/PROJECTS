var button = document.getElementById('btn');
var show1 = document.getElementById('show1');
var show2 = document.getElementById('show2');
button.addEventListener('click', function () {
    button.classList.toggle("hide");
});
function surprise() {
    show1.classList.toggle("show");
    show2.classList.toggle("show");
    var spanText = show1.textContent.split("");
    var spanShow = show2.textContent.split('');
    var i = 0;
    show1.textContent = "";
    for (i = 0; i < spanText.length; i++) {
        show1.innerHTML += "<span>" + spanText[i] + "</span>";
    }
    show2.textContent = "";
    for (var j = 0; j < spanShow.length; j++) {
        show2.innerHTML += "<span>" + spanShow[j] + "</span>";
    }
    var char = 0;
    var num = 0;
    var timeshow1 = setInterval(showcase, 50);
    var timeshow2 = setInterval(showcase2, 70);
    function showcase() {
        var span = show1.querySelectorAll("span")[char];
        var showSpan = show2.querySelectorAll("span")[num];
        span.classList.add("fade1");
        showSpan.classList.add("fade2");
        char++;
        num++;
        if (char === spanText.length) {
            done();
            return;
        }
        if (num === showSpan.length) {
            done();
            return timeshow1 = null;
        }
    }
    //
    // function showcase2(){
    //   // const span = show1.querySelectorAll("span")[char];
    //   const showSpan = show2.querySelectorAll("span")[num];
    //
    //   // span.classList.add("fade1");
    //   showSpan.classList.add("fade2");
    //   // char++;
    //   num++;
    //   // if(char === spanText.length) {
    //   //   done();
    //   //   return;
    //   // }
    //
    //   if(num === spanShow.length {
    //       done();
    //       return timeshow1 = null;
    //     }
    //   }
    //
    //   function done() {
    //     clearInterval(timeshow1);
    //     timeshow2 = null;
    //   }
    // }
}
//
// function showcase2(){
//   // const span = show1.querySelectorAll("span")[char];
//   const showSpan = show2.querySelectorAll("span")[num];
//
//   // span.classList.add("fade1");
//   showSpan.classList.add("fade2");
//   // char++;
//   num++;
//   // if(char === spanText.length) {
//   //   done();
//   //   return;
//   // }
//
//   if(num === spanShow.length {
//       done();
//       return timeshow1 = null;
//     }
//   }
//
//   function done() {
//     clearInterval(timeshow1);
//     timeshow2 = null;
//   }
// }
