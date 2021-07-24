'use strict';

const mainNav = document.querySelector('.main-nav');
const mainNavBurger = document.querySelector('.main-nav__burger');
const mainNavListItems = document.querySelectorAll('.main-nav__nav-list-item');
const mainNavList = document.querySelector('.main-nav__nav-list');
const headerLanding = document.querySelector('.header-landing');

[...mainNavListItems, mainNavBurger].forEach((elm) => {
    elm.addEventListener('click', () => {
        mainNavBurger.classList.toggle('main-nav__burger--active');
        mainNavList.classList.toggle('main-nav__nav-list--active');
    })
})
document.addEventListener('scroll', ()=> {
    if (window.scrollY > 250) {
        mainNav.style.backgroundColor = "rgb(50, 50, 50)";
    } else {
        mainNav.style.backgroundColor = "transparent";
    }
})