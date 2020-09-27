burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
navList = document.querySelector('.nav-list');
rigthNav = document.querySelector('.rightNav');
burger.addEventListener('click',()=>{

	rigthNav.classList.toggle('v-class-resp');
	navList.classList.toggle('v-class-resp');
	navbar.classList.toggle('h-nav-resp');

})