

const rvProduct = document.getElementById('trash-icon');
const rvcancel = document.getElementById('trash-cancel');
const rvok = document.getElementById('trash-ok');
const rvForm = document.querySelector('.pageadmin-trashbox');


rvProduct.addEventListener('click', function(){
    rvForm.style.display='flex';
});
rvok.addEventListener('click',function(){
    rvForm.style.display='none';
});

rvcancel.addEventListener('click',function(){
    rvForm.style.display='none';
});


