// mobile menu :
// const homepage = document.querySelector('.homepage');
const moreBtnIcn = document.querySelector('.btnIcon');
const closeBtn = document.querySelector('.close-btn');
const humburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu-container');

humburger.addEventListener('click', () => {
  mobileMenu.style.display = 'block';
  moreBtnIcn.style.filter = 'blur(10px)';
});
closeBtn.addEventListener('click', () => {
  mobileMenu.style.display = 'none';
  moreBtnIcn.style.filter = 'blur(0)';
});
mobileMenu.addEventListener('click', () => {
  mobileMenu.style.display = 'none';
  moreBtnIcn.style.filter = 'blur(0)';
});