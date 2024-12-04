function login() {
    var hoten = document.getElementById("TaiKhoan").value.trim();
    var matkhau = document.getElementById("MatKhau").value;

    // Lấy thông tin người dùng từ Local Storage
    var storedUser = localStorage.getItem("user");

    if (!storedUser) {
        alert("Không có tài khoản nào được đăng ký. Vui lòng đăng ký trước!");
        return;
    }

    // Chuyển dữ liệu từ Local Storage thành object
    var user = JSON.parse(storedUser);

    // Kiểm tra thông tin đăng nhập

    if(hoten ==="admin" && matkhau === "admin1"){
        alert("Đăng nhập admin thành công!");
        window.location.href = "admin/bangdieukhien.html";// Chuyển đến trang chính
        return;
    }
    
    if (user.tenDangNhap === hoten && user.matKhau === matkhau) {
        alert("Đăng nhập thành công!");
        window.location.href = "index.html"; // Chuyển đến trang chính
    } 
    
    else {
        alert("Tài khoản hoặc mật khẩu không chính xác!");
    }

}