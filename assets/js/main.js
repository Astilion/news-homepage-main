const navItems = document.querySelector('.nav__items');
const burgerBtn = document.querySelector('.nav__burger-btn');
const navItem = document.querySelectorAll('.nav__item')
const burgerIcon = document.querySelector('.nav__burger')
const burgerXIcon = document.querySelector('.nav__burger--x')
const bodyShadow = document.querySelector('.body-shadow')


const handleNav = () => {
    navItems.classList.toggle('active')
    burgerIcon.classList.toggle('nav__burger-hide')
    burgerXIcon.classList.toggle('nav__burger-hide')
    document.body.classList.toggle('body-shadow')




};
const closeNav = () => {
	navItems.classList.remove("active");


};

burgerBtn.addEventListener("click", handleNav);
navItem.forEach(item => {
    item.addEventListener("click", closeNav);
});