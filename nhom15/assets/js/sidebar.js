function toggleDropdown(element) {
    const checkboxGroup = element.nextElementSibling; // Lấy phần tử checkbox-group
    const allGroups = document.querySelectorAll(".checkbox-group");

    // Ẩn tất cả các checkbox khác
    allGroups.forEach(group => {
        if (group !== checkboxGroup) {
            group.style.display = "none";
        }
    });

    // Hiển thị hoặc ẩn checkbox tương ứng
    if (checkboxGroup.style.display === "block") {
        checkboxGroup.style.display = "none";
    } else {
        checkboxGroup.style.display = "block";
    }
}

function applyFilters() {
    // Duyệt qua các checkbox được chọn
    const checkboxes = document.querySelectorAll(".checkbox-group input[type='checkbox']:checked");
    const selectedOptions = Array.from(checkboxes).map(checkbox => checkbox.value);

    // Hiển thị kết quả lọc (có thể thay bằng chức năng thực tế)
}
function applyFiltersAndRedirect() {
    applyFilters(); // Gọi hàm lọc
    window.location.href = "trangsp_2.html"; // Chuyển hướng sang trang mới
}
