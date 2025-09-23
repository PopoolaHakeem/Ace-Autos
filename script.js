// alert('hello')
const btn = document.getElementById('homedropdownDefaultButtonn');
const dropDownContent = document.getElementById('dropdownn');

// body scroll event
const navBar = document.getElementById('navBar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 1) {
        navBar.style.backgroundColor = 'rgba(22, 22, 22, 0.9)'
    } else if (screen.width < 768) {
        navBar.style.backgroundColor = 'rgba(22, 22, 22, 0.9)'
    } else {
        navBar.style.backgroundColor = 'transparent'
    }   
}); 

btn.addEventListener('click', () => {
    dropDownContent.classList.toggle('hidden');
});

const serviceBtn = document.querySelector('.serviceDropdownButton');
const serviceContent = document.getElementById('serviceBtn');

serviceBtn.addEventListener('click', () => {
    serviceContent.classList.toggle('hidden');
});

// mobile nav bar 
const mobileBtn = document.getElementById('#mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
mobileBtn.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
});



