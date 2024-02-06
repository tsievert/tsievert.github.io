function toggleDarkMode() {
	const darkmodeSwitch = document.getElementById("darkmodeSwitch");
	const body = document.querySelector("body");
	darkmodeSwitch.addEventListener("click", function () {
		body.classList.toggle("darkmode");
		console.log("darkmode switched");
	});
}

toggleDarkMode();

function smoothScroll() {
	document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
		anchor.addEventListener("click", function (e) {
			e.preventDefault();

			document.querySelector(this.getAttribute("href")).scrollIntoView({
				behavior: "smooth",
			});
		});
	});
}

smoothScroll();

function toggleSideNav() {
	const hamburger = document.getElementById("hamburger");
	const sideNav = document.querySelector("ul.mainnav");
    const closeBtn = document.querySelector(".close_hamburger");
	const contactbtn = document.querySelector('a[href="#contact"]');
	hamburger.addEventListener("click", function () {
		sideNav.classList.toggle("active");
	});
    closeBtn.addEventListener("click", function() {
        sideNav.classList.toggle("active");
    })
	contactbtn.addEventListener('click', function() {
		document.querySelector('ul.mainnav').classList.remove('active') 
	 });
}

toggleSideNav();



// script.js
document.addEventListener('DOMContentLoaded', function () {
    const navigationData = [
        ['/', 'Education'],
        ['/publications', 'Publications'],
        ['/talks-and-posters', 'Talks & Posters'],
        ['/teaching', 'Teaching'],
        ['#contact', 'Contact'],
    ];

    const navigationList = document.querySelector('.mainnav');

    
        navigationList.innerHTML = '<li class="close_hamburger"></li>';

        navigationData.forEach(nav => {
            const listItem = document.createElement('li');
            listItem.classList.add('nav-item');

            if (window.location.pathname === nav[0]) {
                listItem.classList.add('active');
            }

            listItem.innerHTML = `<a href="${nav[0]}">${nav[1]}</a>`;
            navigationList.appendChild(listItem);
        });
    

    const darkmodeSwitch = document.getElementById('darkmodeSwitch');
    if (darkmodeSwitch) {
        darkmodeSwitch.addEventListener('change', function () {
            // Add your dark mode toggle logic here
        });
    }
});

