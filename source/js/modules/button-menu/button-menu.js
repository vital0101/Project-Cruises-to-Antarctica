const btnMenu = document.querySelector('.page-header__btn-menu');
const logo = document.querySelector('.logo');
const pageHeader = document.querySelector('.page-header');
const headerNav = document.querySelector('.header-navigation');
const headerNavItem = headerNav.children;
const siteNav = document.querySelector('.page-header__site-nav');


const menuJs = () => {
  if (window.screen.width <= 767) {
    for (let i = 0; i < headerNavItem.length; i++) {
      if (headerNavItem[i].classList.contains('header-navigation__item')) {
        headerNavItem[i].classList.remove('header-navigation__item');
        headerNavItem[i].classList.add('header-navigation__item-js');
      }
    }
  }
};

siteNav.classList.remove('page-header__site-nav');
siteNav.classList.add('page-header__site-nav-js');

btnMenu.classList.remove('btn-menu');
btnMenu.classList.add('btn-menu__js');
btnMenu.classList.add('btn-menu__js--opened');

const btnActive = () => {
  btnMenu.addEventListener('click', function () {
    btnMenu.classList.toggle('btn-menu__js--opened');
    btnMenu.classList.toggle('btn-menu__js--closed');
    logo.classList.toggle('logo-js');
    pageHeader.classList.toggle('page-header--bg');
    siteNav.classList.toggle('page-header__site-nav-js--active');
  });
};

export {btnActive, menuJs};
