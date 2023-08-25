const navbar = document.querySelector('.navbar');
const toggleButton = document.querySelector('.toggle-button');

const toggleNavbar = () => {
  navbar.classList.toggle('active');
};

toggleButton.addEventListener('click', toggleNavbar);

const navLinks = document.querySelectorAll('.navbar a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('active');
  });
});

const currentPath = window.location.pathname;

navLinks.forEach(link => {
  if (link.getAttribute('href') === currentPath) {
    link.classList.add('active');
  }
});
