const hamburgerMenu = document.querySelector('.hamburger-menu');
const navbar = document.querySelector('nav');
const navLinks = document.querySelectorAll('nav a');

hamburgerMenu.addEventListener('click', () => {
  navbar.classList.toggle('show');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.forEach(item => item.classList.remove('active'));
    link.classList.add('active');
    
    if (window.innerWidth <= 600) {
      navbar.classList.remove('show');
    }
  });
});
