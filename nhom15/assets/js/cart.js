// Chọn các phần tử cần thiết
const cartItemsContainer = document.querySelector('.cart-items');
const pageButtons = document.querySelectorAll('.page-btn');

// Số lượng sản phẩm hiển thị mỗi trang
const itemsPerPage = 4;
let currentPage = 1;

// Hàm để hiển thị các sản phẩm theo trang
function displayItems(page) {
    const items = document.querySelectorAll('.cart-items .cart-item');
    const totalItems = items.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    // Tính toán chỉ số bắt đầu và kết thúc của sản phẩm
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    // Ẩn tất cả sản phẩm
    items.forEach((item, index) => {
        item.style.display = 'none';
        if (index >= start && index < end) {
            item.style.display = 'flex';
        }
    });

    // Cập nhật trang hiện tại
      currentPage = page;
      updateTotalPrice();


    // Vô hiệu hóa các nút khi không cần thiết
    pageButtons.forEach((button, index) => {
        button.disabled = (index + 1 === currentPage);
    });
}

// Thêm sự kiện click cho các nút phân trang
pageButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const page = parseInt(e.target.getAttribute('data-page'));
        displayItems(page);
    });
});

// Hiển thị trang đầu tiên khi tải trang
displayItems(currentPage);


function decrease(button) {
    let quantityInput = button.closest('.cart-item').querySelector('.quantity');
    let currentValue = parseInt(quantityInput.value);
    if (currentValue > 1) {
        quantityInput.value = currentValue - 1;
        updateTotalPrice();
    }
}

function increase(button) {
    let quantityInput = button.closest('.cart-item').querySelector('.quantity');
    quantityInput.value = parseInt(quantityInput.value) + 1;
    updateTotalPrice();
}

function updateTotalPrice() {
    const cartItems = document.querySelectorAll('.cart-item');  // Lấy tất cả các mục trong giỏ hàng
    let totalPrice = 0;  // Khởi tạo tổng tiền là 0

    cartItems.forEach((item) => {
        const checkbox = item.querySelector('.cart-item-checkbox');
        const priceElement = item.querySelector('.cart-item-price');  // Lấy giá sản phẩm
        const quantityElement = item.querySelector('.quantity');  // Lấy số lượng sản phẩm
        const price = parseFloat(priceElement.textContent.replace(' VND', '').replace(',', ''));  // Chuyển đổi giá sang kiểu số (sau khi loại bỏ ' VND' và dấu ',')
        const quantity = parseInt(quantityElement.value);  // Lấy số lượng sản phẩm

        if (checkbox.checked) {
            totalPrice += price * quantity;  // Cộng tổng tiền cho sản phẩm được chọn
        }
    });

    // Cập nhật tổng tiền của giỏ hàng
    const totalElement = document.getElementById('total-price');
    totalElement.textContent = totalPrice.toLocaleString() + ' VND';
}


