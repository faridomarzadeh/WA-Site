let navToggleIcon = document.getElementsByClassName('nav__toggle-icon')[0];
let menu = document.getElementsByClassName('menu')[0];
let cover = document.querySelector('.cover');
let resumeListItems = document.querySelectorAll('.resume-list__item');
let portfolioListItems = document.querySelectorAll('.portfolio-menu__item');
let portfolioContents = document.querySelectorAll('.portfolio-content');

navToggleIcon.addEventListener('click', () =>{
    navToggleIcon.classList.toggle('nav__toggle-icon--open');
    menu.classList.toggle('menu--open');
    cover.classList.toggle('cover--show');
})

resumeListItems.forEach(resumeListItem =>{
    resumeListItem.addEventListener('click', function(){

        let active = document.querySelector('.resume-list__item--active');
        active.classList.remove('resume-list__item--active');
        let contentId = active.getAttribute('data-content-id').substring(1);
        document.getElementById(contentId).classList.remove('resume-content--show');

        this.classList.add('resume-list__item--active');
        document.getElementById(this.getAttribute('data-content-id').substring(1)).classList.add('resume-content--show');
    })
})

portfolioListItems.forEach(portfolioListItem => {
    portfolioListItem.addEventListener('click', function(){
        document.querySelector('.portfolio-menu__item--active').classList.remove('portfolio-menu__item--active');
        document.querySelector('.portfolio-content--active').classList.remove('portfolio-content--active');

        let portfolioId = this.getAttribute('data-content-id').substring(1);

        this.classList.add('portfolio-menu__item--active');
        document.getElementById(portfolioId).classList.add('portfolio-content--active');
    })
})
