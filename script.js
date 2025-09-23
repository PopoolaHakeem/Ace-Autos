// alert('hello')
const btn = document.querySelector('.dropdownDefaultButtonn');
const dropDownContent = document.getElementById('dropdownn');


btn.addEventListener('click', () => {
    dropDownContent.classList.toggle('hidden');
});

const serviceBtn = document.querySelector('.serviceDropdownButton');
const serviceContent = document.getElementById('serviceBtn');

serviceBtn.addEventListener('click', () => {
    serviceContent.classList.toggle('hidden');
});

const mobileBtn = document.getElementById('#mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
// mobileBtn.addEventListener('click', () => {
//     mobileMenu.classList.toggle('hidden');
// });
mobileBtn.onclick = function () {
    mobileMenu.classList.toggle('hidden');
}

window.addEventListener('scroll', () => {
    const navBar = document.getElementById('navBar');
    if (window.scrollY > 50) {
        navBar.classList.add('bg-black', 'bg-opacity-90', 'backdrop-blur-lg');
        navBar.classList.remove('bg-transparent');
    } else {
        navBar.classList.remove('bg-black', 'bg-opacity-90', 'backdrop-blur-lg');
        navBar.classList.add('bg-transparent');
    }
});

