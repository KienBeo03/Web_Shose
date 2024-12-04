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


