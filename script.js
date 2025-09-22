// alert('hello')
const btn = document.querySelector('.dropdownDefaultButton');
    const dropDownContent = document.getElementById('dropdown');
    
    btn.addEventListener('click', function() {
        dropDownContent.classList.toggle('hidden');
    });