
const addProductBtn = document.querySelector('.addproduct');
const popupForm = document.querySelector('.pageadmin-content-prdmg');
const closeBtn = document.getElementById('xadd');
const fixProductBtn = document.getElementById('fix-icon');
const fixForm = document.querySelector('.pageadmin-content-fix');
const closefixForm= document.getElementById('xfix');
addProductBtn.addEventListener('click', function () {
    popupForm.style.display = 'flex';
});
fixProductBtn.addEventListener('click', function () {
    fixForm.style.display = 'flex';
});


closeBtn.addEventListener('click', function () {
    popupForm.style.display = 'none'; 
});

closefixForm.addEventListener('click', function () {
    fixForm.style.display = 'none'; 
});


