let products = [
    { id: 1, name: "mèn mén", price: 20000, quantity: 20, category: "món ăn dân tộc Mông" },
    { id: 2, name: "mìt", price: 30000, quantity: 21, category: "món ăn dân tộc Mông" },
    { id: 3, name: "cơm lam", price: 40000, quantity: 15, category: "món ăn dân tộc Mường" },
    { id: 4, name: "bánh đậu xanh", price: 50000, quantity: 30, category: "món ăn dân tộc Kinh" }
];

let cart = [];

function displayProducts() {
    console.log("Danh sách sản phẩm:");
    products.forEach(product => {
        console.log(`ID: ${product.id}, Tên: ${product.name}, Giá: ${product.price}, Số lượng: ${product.quantity}, Danh mục: ${product.category}`);
    });
}

function addToCart(productId, quantity) {
    let product = products.find(p => p.id === productId);
    if (product) {
        if (product.quantity >= quantity) {
            cart.push({ ...product, quantity });
            product.quantity -= quantity;  
            console.log(`${quantity} ${product.name} đã được thêm vào giỏ hàng.`);
        } else {
            console.log("Sản phẩm này không đủ số lượng.");
        }
    } else {
        console.log("Sản phẩm không tồn tại.");
    }
}

function calculateTotal() {
    let total = 0;
    cart.forEach(item => {
        total += item.price * item.quantity;
    });
    console.log(`Tổng tiền trong giỏ hàng: ${total} VND`);
}

function sortCartByPrice() {
    cart.sort((a, b) => a.price - b.price);
    console.log("Sản phẩm trong giỏ hàng đã được sắp xếp theo giá.");
}

function displayCart() {
    if (cart.length === 0) {
        console.log("Giỏ hàng hiện tại rỗng.");
    } else {
        console.log("Giỏ hàng của bạn:");
        cart.forEach(item => {
            console.log(`Tên: ${item.name}, Giá: ${item.price}, Số lượng: ${item.quantity}, Tổng tiền: ${item.price * item.quantity}`);
        });
    }
}

function checkProductAvailability(productId, quantity) {
    let product = products.find(p => p.id === productId);
    if (product && product.quantity >= quantity) {
        return true;
    } else {
        return false;
    }
}

function menu() {
    let option;
    do {
        option = parseInt(prompt(`
            Chọn chức năng:
            1. Hiển thị các sản phẩm trong cửa hàng
            2. Chọn sản phẩm và thêm vào giỏ hàng
            3. Hiển thị giỏ hàng
            4. Sắp xếp giỏ hàng theo giá
            5. Tính tổng tiền trong giỏ hàng
            6. Thoát
        `));

        switch (option) {
            case 1:
                displayProducts();
                break;
            case 2:
                const productId = parseInt(prompt("Nhập ID sản phẩm bạn muốn thêm vào giỏ hàng:"));
                const quantity = parseInt(prompt("Nhập số lượng sản phẩm:"));
                if (checkProductAvailability(productId, quantity)) {
                    addToCart(productId, quantity);
                } else {
                    console.log("Không đủ số lượng sản phẩm trong cửa hàng.");
                }
                break;
            case 3:
                displayCart();
                break;
            case 4:
                sortCartByPrice();
                displayCart();
                break;
            case 5:
                calculateTotal();
                break;
            case 6:
                console.log("Thoát chương trình.");
                break;
            default:
                console.log("Lựa chọn không hợp lệ.");
        }
    } while (option !== 6);
}

menu();
