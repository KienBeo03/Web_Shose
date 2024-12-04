var index = 1;
 changeImage = function(){
    var imgs = [ "images/anh1.jpg", "images/anh2.jpg", "images/anh10.jpg", "images/anh4.jpeg", "images/nikejd4-hinh5.jpg"];
    document.getElementById('img').src = imgs[index];
    index++;
    if(index==5){
        index = 0;
    }
}
setInterval(changeImage ,2000)//time đổi ảnh 2000ms


const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if(bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if(close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}
function PhanHoi() {
    // Lấy giá trị của các input
    var ten = document.querySelector('input[placeholder="Tên của bạn"]').value;
    var email = document.querySelector('input[placeholder="Email"]').value;
    var chuDe = document.querySelector('input[placeholder="Chủ đề"]').value;
    var noiDung = document.querySelector('textarea').value;

    // Kiểm tra xem các trường có trống không
    if (ten === "" || email === "" || chuDe === "" || noiDung === "") {
        alert("Vui lòng điền đầy đủ thông tin.");
        return; // Dừng hàm nếu có trường trống
    }

    // Kiểm tra email có đúng định dạng không
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
        alert("Email không hợp lệ.");
        return;
    }

    // Nếu tất cả hợp lệ, hiển thị thông báo thành công
    alert("Phản hồi thành công!");
}


