const hamburgerMenu = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');

hamburgerMenu.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

navLinks.querySelectorAll('.nav-item').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('show');
  });
});
