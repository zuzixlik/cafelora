import './style.css';

console.log('funguju!');

const navBtnElm = document.querySelector('#nav-btn');

navBtnElm.addEventListener('click', () => {
  console.log('click');
  const navElm = document.querySelector('nav');
  navElm.classList.toggle('nav-closed');
});

const navAElm = document.querySelectorAll('.navigation a');

navAElm.forEach((element) => {
  element.addEventListener('click', () => {
    console.log('nav a');
    const navElm = document.querySelector('nav');
    navElm.classList.add('nav-closed');
  });
});
