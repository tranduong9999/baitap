let products = [
    ["mì tôm", 5, 5000], 
    ["bánh mì", 12, 15000], 
    ["bánh bao", 5, 8000], 
    ["mèn mén", 30, 20000]
];

let cart = [];

function showProducts() {
    console.log(products.map(p => `${p[0]} - Số lượng: ${p[1]} - Giá: ${p[2]} VNĐ`).join("\n"));
}

function addToCart(name) {
    let product = products.find(p => p[0] === name);
    if (!product) return console.log("Sản phẩm không có trong cửa hàng!");
    if (product[1] === 0) return console.log("Sản phẩm đã hết hàng!");
    product[1]--;
    let cartItem = cart.find(c => c[0] === name);
    cartItem ? cartItem[1]++ : cart.push([name, 1, product[2]]);
    console.log(`Đã thêm ${name} vào giỏ hàng!`);
}

function showCart() {
    if (!cart.length) return alert("Giỏ hàng trống!");
    let total = cart.reduce((sum, item) => sum + item[1] * item[2], 0);
    console.log(cart.map(i => `${i[0]} - Số lượng: ${i[1]} - Giá: ${i[2]} VNĐ`).join("\n") + `\nTổng tiền: ${total} VNĐ`);
}

function shopping() {
    while (true) {
        let choice = prompt("1. Xem sản phẩm\n2. Mua hàng\n3. Xem giỏ\n4. Thoát");
        if (choice === "1") showProducts();
        else if (choice === "2") addToCart(prompt("Nhập tên sản phẩm muốn mua:"));
        else if (choice === "3") showCart();
        else if (choice === "4") return alert("Cảm ơn đã mua hàng!");
        else console.log("Lựa chọn không hợp lệ!");
    }
}

shopping();
