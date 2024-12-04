async function loadProducts() {
    try {
        // Tải dữ liệu JSON
        const response = await fetch('products.json');
        const products = await response.json();

        // Lấy các container cần hiển thị sản phẩm
        const productContainers = document.querySelectorAll('.pro-container');
        const categoryTitles = document.querySelectorAll('.category-title');

        // Lặp qua từng tiêu đề danh mục
        categoryTitles.forEach((title, index) => {
            let filteredProducts = [];
            // Lọc sản phẩm dựa trên tiêu đề
            if (title.innerText === 'Sản Phẩm Nổi Bật') {
                filteredProducts = products.filter(product => product.category === 'San Pham Hot');
            } else if (title.innerText === 'Sản Phẩm Mới Về') {
                filteredProducts = products.filter(product => product.category === 'San Pham Moi Ve');
            }

            // Hiển thị sản phẩm trong container tương ứng
            const container = productContainers[index];
            filteredProducts.forEach(product => {
                const productHTML = `
                <div class="pro">
                    <img src="${product.image[0]}" alt="${product.name}">
                    <div class="des">
                        <span>${product.brand}</span>
                        <h5>${product.name}</h5>
                        <div class="star">
                            ${'<i class="fas fa-star"></i>'.repeat(product.rating)}
                        </div>
                        <h4>${product.price}đ</h4>
                    </div>
                    <a href="${product.detailsPage}"><i class="fa-solid fa-cart-shopping cart"></i></a>
                </div>`;
                container.innerHTML += productHTML;
            });
        });
    } catch (error) {
        console.error('Lỗi khi tải sản phẩm:', error);
    }
}

// Gọi hàm sau khi tải trang
document.addEventListener('DOMContentLoaded', loadProducts);
