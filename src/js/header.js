let mobileNav;
let windowWidth;
let toggler;
let closer;

const activeClass = 'header__mobile--active';

const findElements = () => {
  toggler = document.querySelector('#navToggler');
  closer = document.querySelector('#navClose');
  mobileNav = document.querySelector('#mobileNav');
};

function updateSize() {
  windowWidth = window.innerWidth;
  console.log(windowWidth);
}

const toggleBody = () => {
  document.querySelector('body').classList.toggle('body--stuck');
};

function closeCatalogMenu() {
  mobileNav.classList.remove(activeClass);
  toggler.classList.remove('nav__toggler--hide');
  document.querySelector('body').classList.remove('body--stuck');
  window.removeEventListener('click', detectOutsideClick);
}

function detectOutsideClick(e) {
  if (!mobileNav.contains(e.target) && e.target !== toggler && e.target !== closer) {
    closeCatalogMenu();
  }
}

const onButtonClick = () => {
  toggleBody();
  toggler.classList.add('nav__toggler--hide');
  mobileNav.classList.add(activeClass);
  window.addEventListener('click', detectOutsideClick);
};

const onCloseClick = () => {
  toggleBody();
  if (mobileNav.classList.contains(activeClass)) {
    closeCatalogMenu();
  }
};

const subscribe = () => {
  if (toggler) {
    toggler.addEventListener('click', () => onButtonClick());
  }

  if (closer) {
    closer.addEventListener('click', () => onCloseClick());
  }

  window.addEventListener('resize', updateSize);
};

export default function init() {
  updateSize();
  findElements();
  subscribe();
}
