const hamburgerMenu = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');

hamburgerMenu.addEventListener('click', () => {
  navLinks.classList.toggle('show');

  if (navLinks.classList.contains('show')) {
    hamburgerMenu.classList.add('expanded');
  } else {
    hamburgerMenu.classList.remove('expanded');
  }
});

navLinks.querySelectorAll('.nav-item').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('show');
  });
});
