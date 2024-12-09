// var list = JSON.parse(localStorage.getItem('cart'))

//     function LoadData() {
//         var str = "";
//         var t = 0;
//         for (var x of list) {
//             t += x.price * x.quantity;
//             str += `
//                      <tr>
//                         <td class="img-product"><img src="IMG/gomnhat.jpg` + x.IMG + `"></td>
//                         <td class="name-product">
//                             <p>` + x.name + `</p>
//                             <p><span class="price">  </span></p>
//                         </td>
//                         <td class="end-pay"> ` + (x.price * x.quantity) + `₫</td>
//                      </tr>
               
//     `
//         }
//         document.getElementById('listCart').innerHTML = str
//         var total = document.getElementsByClassName('spTong')
//         for (i = 0; i < total.length; i++) {
//             total[i].innerHTML = t +  '₫';
//         }
//     }
//     localStorage.removeItem('cart');
// LoadData();

var list = JSON.parse(localStorage.getItem('cart'));
function LoadData() {
    var str = "";
    var t = 0;
    for (var x of list) {
        console.log(x)
        t += x.price * x.quantity;
        // Chú ý đến cách bạn xử lý đường dẫn ảnh ở đây
        str += `
            <tr>
                <td class="img-product"><img src="${x.img}"></td>
                <td class="name-product">
                    <p>${x.name}, Size: ${x.size}</p>
            
                    <p><span class="price"> ${formatCurrency(x.price * x.quantity)}</span></p>
                </td>
       
            </tr>
        `;
    }
    document.getElementById('listCart').innerHTML = str;

    var total = document.getElementsByClassName('spTong');
    for (i = 0; i < total.length; i++) {
        total[i].innerHTML = formatCurrency(t);
    }
}
function formatCurrency(value) {
    return value.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }).replace('₫', '') + '₫';
}

localStorage.removeItem('cart');
LoadData();


//in hóa đơn
function collectDeliveryInfo() {
    const name = document.querySelector('.input-name').value;
    const email = document.querySelector('.input-email').value;
    const phone = document.querySelector('.input-phone').value;
    const address = document.querySelector('.input-address').value;
    const city = document.querySelector('.slt-city').value;
    const district = document.querySelector('.slt-distric').value;
    const ward = document.querySelector('.slt-phuongxa').value;

    const paymentMethod = document.querySelector('input[name="gender"]:checked')?.nextElementSibling?.innerText.trim();

    return {
        name,
        email,
        phone,
        fullAddress: `${address}, ${ward}, ${district}, ${city}`,
        paymentMethod,
    };
}


function generateInvoice() {
    const deliveryInfo = collectDeliveryInfo();
    var invoiceBody = "";
    var total = 0;

    // Duyệt qua danh sách sản phẩm trong giỏ hàng
    for (var x of list) {
        total += x.price * x.quantity;
        invoiceBody += `
            <tr>
                <td>${x.name}, Size: ${x.size}</td>
                <td>${formatCurrency(x.price)}</td>
                <td>${x.quantity}</td>
                <td>${formatCurrency(x.price * x.quantity)}</td>
            </tr>
        `;
    }

    // Chèn thông tin giao hàng vào hóa đơn
    const invoiceHeader = `
        <h2>Hóa đơn mua hàng</h2>
        <p><strong>Họ và tên:</strong> ${deliveryInfo.name}</p>
        <p><strong>Email:</strong> ${deliveryInfo.email}</p>
        <p><strong>Số điện thoại:</strong> ${deliveryInfo.phone}</p>
        <p><strong>Địa chỉ:</strong> ${deliveryInfo.fullAddress}</p>
        <p><strong>Phương thức thanh toán:</strong> ${deliveryInfo.paymentMethod || "Không rõ"}</p>
    `;

    // Hiển thị hóa đơn đầy đủ
    document.getElementById('invoiceBody').innerHTML = invoiceBody;
    document.getElementById('invoiceTotal').innerText = formatCurrency(total);
    document.getElementById('invoiceHeader').innerHTML = invoiceHeader;
}


// Gọi hàm tạo hóa đơn và in
function printInvoice() {
    generateInvoice();
    var invoice = document.getElementById('invoice').innerHTML;

    // Mở cửa sổ in và xuất nội dung hóa đơn
    var printWindow = window.open('', '_blank');
    printWindow.document.write(`
        <html>
        <head>
            <title>In hóa đơn</title>
            <style>
                table {
                    width: 100%;
                    border-collapse: collapse;
                }
                table, th, td {
                    border: 1px solid black;
                }
                th, td {
                    padding: 8px;
                    text-align: left;
                }
            </style>
        </head>
        <body>
            ${invoice}
        </body>
        </html>
    `);
    printWindow.document.close();
    printWindow.print();
}

