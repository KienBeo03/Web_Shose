// Hàm xử lý đăng ký
function signup(event) {
    event.preventDefault(); // Ngăn form reload lại trang

    // Lấy giá trị từ các trường nhập liệu
    const hoTen = document.getElementById("HoTen").value.trim();
    const tenDangNhap = document.getElementById("TenDangNhap").value.trim();
    const matKhau = document.getElementById("MatKhau").value;
    const xacNhanMatKhau = document.getElementById("XacNhanMatKhau").value;

    // Kiểm tra các điều kiện
    if (!hoTen || !tenDangNhap || !matKhau || !xacNhanMatKhau) {
        alert("Vui lòng điền đầy đủ thông tin.");
        return;
    }

    if (matKhau !== xacNhanMatKhau) {
        alert("Mật khẩu xác nhận không khớp.");
        return;
    }

    if (matKhau.length < 6) {
        alert("Mật khẩu phải có ít nhất 6 ký tự.");
        return;
    }

    // Lưu thông tin vào Local Storage (tạm thời)
    const user = {
        hoTen,
        tenDangNhap,
        matKhau // Trong thực tế, không nên lưu mật khẩu dưới dạng plain text.
    };

    localStorage.setItem("user", JSON.stringify(user));
    alert("Đăng ký thành công!");

    // Chuyển hướng sang trang đăng nhập
    window.location.href = "login.html";
}

// Gắn sự kiện khi form được submit
document.querySelector(".signup-form").addEventListener("submit", signup);
