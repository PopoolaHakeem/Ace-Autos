// alert('hello')

const btn = document.querySelector('#homedropdownDefaultButton');
const dropDownContent = document.querySelector('#dropdown');


// body scroll event
const navBar = document.querySelector('#navBar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 1) {
        navBar.style.backgroundColor = 'rgba(22, 22, 22, 0.9)'
    } else  {
        navBar.style.backgroundColor = 'rgba(22, 22, 22, 0.9)'
    } 
}); 

// btn.addEventListener('click', () => {
//     dropDownContent.classList.toggle('hidden');
// });

// const serviceBtn = document.querySelector('#serviceDropdownButton');
// const serviceContent = document.querySelector('#serviceBtn');

// serviceBtn.addEventListener('click', () => {
//     serviceContent.classList.toggle('hidden');
// });


// mobile nav bar 
const mobileBtn = document.querySelector('#mobileMenuBtn');
const mobileMenu = document.querySelector('#mobileMenu');
mobileBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    // alert('clicked!')
});


const modelScrollX = document.querySelector('#model');
modelScrollX.addEventListener('scrollX', () => {
    modelScrollX.scrollTo('right')
})

const backToTopBtn = document.querySelector('#backToTopBtn')
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        backToTopBtn.classList.remove('hidden')
    } else {
        backToTopBtn.classList.add('hidden')
    }
})

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top:0,
        behavior: 'smooth'
    })
})

