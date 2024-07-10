let navToggle = document.getElementsByClassName('nav__toggle-icon')[0];

navToggle.addEventListener('click', () =>{
    navToggle.classList.toggle('nav__toggle-icon--open');
})