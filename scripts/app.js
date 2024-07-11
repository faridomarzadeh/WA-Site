let navToggleIcon = document.getElementsByClassName('nav__toggle-icon')[0];
let menu = document.getElementsByClassName('menu')[0];
let cover = document.querySelector('.cover');

navToggleIcon.addEventListener('click', () =>{
    navToggleIcon.classList.toggle('nav__toggle-icon--open');
    menu.classList.toggle('menu--open');
    cover.classList.toggle('cover--show');
})