const headerToggleBtn =document.querySelector('.header__toggle-btn');
const headerToggleBtnMenu =document.querySelector('#menu');
const sitenav =document.querySelector('.sitenav');
const overlay = document.querySelector('.overlay');

headerToggleBtn.addEventListener('click', () => {
  sitenav.classList.toggle('show-nav');
  overlay.classList.toggle('show-nav');
  menu.classList.toggle('fa-times');
})

    
