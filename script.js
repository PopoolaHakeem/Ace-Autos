// alert('hello')
const btn = document.querySelector('.dropdownDefaultButtonn');
const dropDownContent = document.getElementById('dropdownn');


btn.addEventListener('click', function () {
    dropDownContent.classList.toggle('hidden');
});

const serviceBtn = document.querySelector('.serviceDropdownButton');
const serviceContent = document.getElementById('serviceBtn');

serviceBtn.addEventListener('click', function () {
    serviceContent.classList.toggle('hidden');
});

// const navBarBg = document.getElementById('navBar');

// window.addEventListener('scroll', () => {
//     if (window.scrollY > 1) {
//         navBarBg.style.backgroundColor = '#333'
//         navBarBg.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.3)'
//         alert('hi')
//     } 
//     else {
//         navBarBg.style.backgroundColor = 'transparent'
//         navBarBg.style.boxShadow = 'none'
//     }

// });

// function () {
//     document.getElementById('navBar').style.scrollbarColor = 'red blue'
// }
