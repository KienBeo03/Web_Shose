// Hàm để tải JSON và hiển thị sản phẩm dựa trên tiêu đề
async function loadProducts() {
    try {
        const response = await fetch('products.json');
        const products = await response.json();

        const productContainer = document.querySelector('.pro-container');
        const categoryTitle = document.querySelector('.category-title').textContent.trim();

        // Xác định danh mục dựa trên tiêu đề
        let filteredProducts = [];
        if (categoryTitle === 'Sản Phẩm Nổi Bật') {
            filteredProducts = products.filter(product => 
                product.category === 'Sản Phẩm Mới Về' || product.category === 'Sản Phẩm Hot'
            );
        } else if (categoryTitle === 'Sản Phẩm Mới Về') {
            filteredProducts = products.filter(product => product.category === 'Sản Phẩm Mới Về');
        } else if (categoryTitle === 'Sản Phẩm Hot') {
            filteredProducts = products.filter(product => product.category === 'Sản Phẩm Hot');
        }

        // Hiển thị sản phẩm đã lọc
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
            productContainer.innerHTML += productHTML;
        });
    } catch (error) {
        console.error('Lỗi khi tải sản phẩm:', error);
    }
}

// Gọi hàm sau khi tải trang
document.addEventListener('DOMContentLoaded', loadProducts);
