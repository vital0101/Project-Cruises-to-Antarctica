const btnMenu = document.querySelector('.page-header__btn-menu');
const logo = document.querySelector('.logo');
const headerNav = document.querySelector('.header-navigation');
const headerNavItem = headerNav.children;
const headerNavLink = document.querySelectorAll('.header-navigation a');
// console.log(headerNavLink);
const siteNav = document.querySelector('.page-header__site-nav');
const contacts = document.querySelector('.contacts__map');

siteNav.classList.remove('page-header__site-nav');
siteNav.classList.add('page-header__site-nav-js');

contacts.classList.add('contacts__map--hidden');

btnMenu.classList.remove('btn-menu');
btnMenu.classList.add('btn-menu__js');
btnMenu.classList.add('btn-menu__js--opened');

const closedMenu = () => {
  for (let i = 0; i < headerNavLink.length; i++) {
    headerNavLink[i].addEventListener('click', function () {
      btnMenu.classList.toggle('btn-menu__js--opened');
      btnMenu.classList.toggle('btn-menu__js--closed');
      logo.classList.toggle('logo--js');
      siteNav.classList.toggle('page-header__site-nav-js--active');
      addNewClass();
    });
  }
};

const addNewClass = () => {
  if (window.screen.width <= 767) {
    for (let i = 0; i < headerNavItem.length; i++) {
      if (headerNavItem[i].classList.contains('header-navigation__item')) {
        headerNavItem[i].classList.remove('header-navigation__item');
        headerNavItem[i].classList.add('header-navigation__item-js');
      }
    }
    headerNav.classList.toggle('header-navigation');
    headerNav.classList.toggle('header-navigation__js');
  } else {
    headerNav.classList.add('header-navigation');
  }
};

const swithBtn = () => {
  btnMenu.addEventListener('click', function () {
    btnMenu.classList.toggle('btn-menu__js--opened');
    btnMenu.classList.toggle('btn-menu__js--closed');
    logo.classList.toggle('logo--js');
    siteNav.classList.toggle('page-header__site-nav-js--active');
    addNewClass();
  });
  btnMenu.removeEventListener('click', function () {
    btnMenu.classList.toggle('btn-menu__js--opened');
    btnMenu.classList.toggle('btn-menu__js--closed');
    logo.classList.toggle('logo--js');
    siteNav.classList.toggle('page-header__site-nav-js--active');
    addNewClass();
  });
};

export {swithBtn, closedMenu};
