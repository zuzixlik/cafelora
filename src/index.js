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

const orderBtnElm = document.querySelector('#order-btn');

let ordered = false;
const drinkSelected = document.querySelector('.drink__cup');

orderBtnElm.addEventListener('click', (event) => {
  console.log('drink selected');
  console.log(drinkSelected, event.target);
  if (ordered) {
    ordered = false;
    event.target.textContent = 'Objednej';
    drinkSelected.classList.remove('drink__cup--selected');
  } else {
    ordered = true;

    event.target.textContent = 'Zrušit';
    drinkSelected.classList.add('drink__cup--selected');
  }
});
