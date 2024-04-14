const socialLink = document.querySelector('.social-link');
const modalMenu = document.querySelector('.modal-menu');
const closeBtn = document.querySelector('.close-btn-menu');
const dropdownMenu = document.getElementById('menu');
const mobMenuText = document.querySelectorAll('.mob-menu-text');
const mobMenuBtn = document.querySelector('.mob-menu-button-order');
const dropdownBoxes = document.querySelectorAll('.dropdown-box');
const item = document.querySelectorAll('.dropdown-item');
const dropdownBtn = document.querySelector('.dropdown-btn-menu');
const body = document.querySelector('body');

socialLink.addEventListener('click', e => {
  e.preventDefault();
  modalMenu.classList.add('is-open');
  body.classList.add('modal-is-open');
});
closeBtn.addEventListener('click', e => {
  e.preventDefault();
  modalMenu.classList.remove('is-open');
  body.classList.remove('modal-is-open');
});
dropdownBtn.addEventListener('click', e => {
  e.preventDefault();
  dropdownMenu.classList.toggle('show');
});
mobMenuText.forEach(elem => {
  elem.addEventListener('click', () => {
    modalMenu.classList.remove('is-open');
    body.classList.remove('modal-is-open');
  });
});
mobMenuBtn.addEventListener('click', () => {
  modalMenu.classList.remove('is-open');
  body.classList.remove('modal-is-open');
});
dropdownBtn.addEventListener('click', () => {
  dropdownBoxes.forEach(box => {
    box.classList.add('pointer-auto');
  });
});
item.forEach(item =>
  item.addEventListener('click', () => {
    dropdownMenu.classList.remove('show', 'pointer-auto');
  })
);
