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