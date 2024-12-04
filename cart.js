function addToCart(item) {
    
    item.quantity = parseInt(item.quantity); // Chuyển giá trị từ chuỗi sang số nguyên
    console.log("Số lượng thêm vào:", item.quantity);

    let list;
    if (localStorage.getItem('cart') == null) {
        list = [item];
    } else {
        list = JSON.parse(localStorage.getItem('cart')) || [];
        let ok = true;
        for (let x of list) {
            if (x.id == item.id) {
                x.quantity += item.quantity; // Cộng dồn số lượng
                ok = false;
                break;
            }
        }
        if (ok) {
            list.push(item);
        }
    }
    localStorage.setItem('cart', JSON.stringify(list));
    console.log(JSON.stringify(list));
    alert("Đã thêm giỏ hàng thành công!");
}



function XoaCart() {
    if (confirm("Bạn muốn xóa tất cả sản phẩm khỏi giỏ hàng!")) {
        localStorage.setItem('cart', null);
        location.reload();
    }
}
function Xoa(id) {
    list = JSON.parse(localStorage.getItem('cart')) || [];
    var index = list.findIndex(x => x.id == id);
    if (confirm("Bạn muốn xóa sản phẩm này khỏi giỏ hàng!")) {
        list.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(list));
        LoadData();
    }
}
function updateCart() {
    localStorage.setItem('cart', JSON.stringify(list));
    alert("Đã cập nhật thông tin giỏ hàng thành công!");
}
function Tang(id) {
    var index = list.findIndex(x => x.id == id);
    if (index >= 0) {
        list[index].quantity += 1;
    }
    LoadData();
}
function Giam(id) {
    var index = list.findIndex(x => x.id == id);
    if (index >= 0 && list[index].quantity >= 1) {
        list[index].quantity -= 1;
    }
    LoadData();
}
function updateQuantity(id) {
    var quantity = Number($('#q_' + id).val());
    var index = list.findIndex(x => x.id == id);
    if (index >= 0 && list[index].quantity >= 1) {
        list[index].quantity = quantity;
    }
    LoadData();
}