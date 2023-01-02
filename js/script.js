const headerToggleBtn =document.querySelector('.header__toggle-btn')
const headerToggleBtnMenu =document.querySelector('#menu')
const siteNav =document.querySelector('.sitenav')
const overlay = document.querySelector('.overlay')

headerToggleBtn.addEventListener('click', () => {
  siteNav.classList.toggle('show-nav')
  overlay.classList.toggle('show-nav')
  menu.classList.toggle('fa-times');
})

    
