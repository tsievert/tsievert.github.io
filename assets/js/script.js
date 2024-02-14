




window.addEventListener("DOMContentLoaded", (event) => {

const darkmodeSwitch = document.getElementById("darkmodeSwitch");


function toggleDarkMode() {
	


	darkmodeSwitch.addEventListener("change", function () {

		if(documentBody.classList.contains('darkmode')){
			documentBody.classList.remove('darkmode');
			console.log("darkmode off");
			Cookies.set('darkmode', 'off', {expires: 7, secure: true });
			console.log("darkmode-cookie set to false");
		}else{
			documentBody.classList.add('darkmode');
			console.log("darkmode on");
			Cookies.set('darkmode', 'on', {expires: 7, secure: true });
			console.log("darkmode-cookie set to true");
	}
		
		
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


});