// coding the menu content of the home page
let menu_btn = document.getElementById('menu_bar');


menu_btn.addEventListener('click', () => {
    let menu = document.getElementById('menu');
    menu.classList.toggle('toggle_menu');
})