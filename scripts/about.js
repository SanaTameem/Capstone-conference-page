// mobile menu :
// const homepage = document.querySelector('.homepage');
const moreBtnIcn = document.querySelector('.btnIcon');
const closeBtn = document.querySelector('.close-btn');
const humburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu-container');
// Humburger event listener
humburger.addEventListener('click', () => {
  function checkViewportSize() {
    if (window.matchMedia('(min-width: 786px)').matches) {
      mobileMenu.style.display = 'none';
      moreBtnIcn.style.filter = 'blur(0)';
    } else {
      mobileMenu.style.display = 'block';
      moreBtnIcn.style.filter = 'blur(10px)';
    }
  }
  window.addEventListener('resize', checkViewportSize);
  mobileMenu.style.display = 'block';
  moreBtnIcn.style.filter = 'blur(10px)';
});
// close Button event listener
closeBtn.addEventListener('click', () => {
  mobileMenu.style.display = 'none';
  moreBtnIcn.style.filter = 'blur(0)';
});
// mobile menu event listener
mobileMenu.addEventListener('click', () => {
  mobileMenu.style.display = 'none';
  moreBtnIcn.style.filter = 'blur(0)';
});