const addacbt = document.querySelector('.usermgn-header-add-button');
const usermgnbox = document.querySelector('.addnewac-box');
const addacbtx = document.getElementById('addnewac-x');
const addacbtadd = document.getElementById('addnewac-btn');

addacbt.addEventListener('click', function () {
    usermgnbox.style.display = 'flex';
});

addacbtx.addEventListener('click', function () {
    usermgnbox.style.display = 'none';
});

addacbtadd.addEventListener('click', function () {
    usermgnbox.style.display = 'none';
});

// Cập nhật phần chỉnh sửa
const editButtons = document.querySelectorAll('.edit-btn');
const editbox = document.querySelector('.editac-box');
const editsave = document.getElementById('Saveeditac-btn');
const editx = document.getElementById('editac-x');

// Thêm sự kiện cho từng nút chỉnh sửa
editButtons.forEach(button => {
    button.addEventListener('click', function () {
        editbox.style.display = 'flex';
    });
});

editx.addEventListener('click', function () {
    editbox.style.display = 'none';
});

editsave.addEventListener('click', function () {
    editbox.style.display = 'none';
});
