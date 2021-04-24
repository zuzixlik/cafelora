import './style.css';

console.log('funguju!');

const navBtnElm = document.querySelector('#nav-btn');

navBtnElm.addEventListener('click', () => {
  console.log('click');
  const navElm = document.querySelector('nav');
  navElm.classList.toggle('nav-closed');
});
