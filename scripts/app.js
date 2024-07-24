let navToggleIcon = document.getElementsByClassName('nav__toggle-icon')[0];
let menu = document.getElementsByClassName('menu')[0];
let cover = document.querySelector('.cover');
let resumeListItems = document.querySelectorAll('.resume-list__item');
navToggleIcon.addEventListener('click', () =>{
    navToggleIcon.classList.toggle('nav__toggle-icon--open');
    menu.classList.toggle('menu--open');
    cover.classList.toggle('cover--show');
})

resumeListItems.forEach(resumeListItem =>{
    resumeListItem.addEventListener('click', function(){
        document.querySelector('.resume-list__item--active').classList.remove('resume-list__item--active');
        this.classList.add('resume-list__item--active');
    })
})