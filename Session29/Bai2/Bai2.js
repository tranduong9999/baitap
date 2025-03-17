let products = [];

function addProduct(id, name, price, category, quantity) {
    products.push({ id, name, price, category, quantity });
    console.log("Sản phẩm đã được thêm.");
}

function displayProducts() {
    console.log("Danh sách tất cả sản phẩm:");
    products.forEach(product => {
        console.log(`ID: ${product.id}, Tên: ${product.name}, Giá: ${product.price}, Danh mục: ${product.category}, Số lượng: ${product.quantity}`);
    });
}

function displayProductById(id) {
    let product = products.find(p => p.id === id);
    if (product) {
        console.log(`Chi tiết sản phẩm: ID: ${product.id}, Tên: ${product.name}, Giá: ${product.price}, Danh mục: ${product.category}, Số lượng: ${product.quantity}`);
    } else {
        console.log("Không tìm thấy sản phẩm với ID: " + id);
    }
}

function updateProduct(id, name, price, category, quantity) {
    let product = products.find(p => p.id === id);
    if (product) {
        product.name = name;
        product.price = price;
        product.category = category;
        product.quantity = quantity;
        console.log(`Sản phẩm với ID ${id} đã được cập nhật.`);
    } else {
        console.log("Không tìm thấy sản phẩm với ID: " + id);
    }
}

function deleteProduct(id) {
    let index = products.findIndex(p => p.id === id);
    if (index !== -1) {
        products.splice(index, 1);
        console.log(`Sản phẩm với ID ${id} đã được xóa.`);
    } else {
        console.log("Không tìm thấy sản phẩm với ID: " + id);
    }
}

function filterProductsByPrice(minPrice, maxPrice) {
    let filteredProducts = products.filter(p => p.price >= minPrice && p.price <= maxPrice);
    if (filteredProducts.length > 0) {
        console.log("Danh sách sản phẩm trong khoảng giá từ " + minPrice + " đến " + maxPrice + ":");
        filteredProducts.forEach(product => {
            console.log(`ID: ${product.id}, Tên: ${product.name}, Giá: ${product.price}, Danh mục: ${product.category}, Số lượng: ${product.quantity}`);
        });
    } else {
        console.log("Không có sản phẩm nào trong khoảng giá từ " + minPrice + " đến " + maxPrice);
    }
}

function menu() {
    let option;
    do {
        option = parseInt(prompt(`
            Chọn chức năng:
            1. Thêm sản phẩm mới
            2. Hiển thị tất cả sản phẩm
            3. Hiển thị chi tiết sản phẩm theo id
            4. Cập nhật thông tin sản phẩm theo id
            5. Xóa sản phẩm theo id
            6. Lọc sản phẩm theo khoảng giá
            7. Thoát
        `));

        switch (option) {
            case 1:
                let id = parseInt(prompt("Nhập id của sản phẩm:"));
                let name = prompt("Nhập tên sản phẩm:");
                let price = parseFloat(prompt("Nhập giá sản phẩm:"));
                let category = prompt("Nhập danh mục sản phẩm:");
                let quantity = parseInt(prompt("Nhập số lượng sản phẩm:"));
                addProduct(id, name, price, category, quantity);
                break;
            case 2:
                displayProducts();
                break;
            case 3:
                let searchId = parseInt(prompt("Nhập id sản phẩm cần tìm:"));
                displayProductById(searchId);
                break;
            case 4:
                let updateId = parseInt(prompt("Nhập id sản phẩm muốn cập nhật:"));
                let updateName = prompt("Nhập tên mới:");
                let updatePrice = parseFloat(prompt("Nhập giá mới:"));
                let updateCategory = prompt("Nhập danh mục mới:");
                let updateQuantity = parseInt(prompt("Nhập số lượng mới:"));
                updateProduct(updateId, updateName, updatePrice, updateCategory, updateQuantity);
                break;
            case 5:
                let deleteId = parseInt(prompt("Nhập id sản phẩm muốn xóa:"));
                deleteProduct(deleteId);
                break;
            case 6:
                let minPrice = parseFloat(prompt("Nhập giá thấp nhất:"));
                let maxPrice = parseFloat(prompt("Nhập giá cao nhất:"));
                filterProductsByPrice(minPrice, maxPrice);
                break;
            case 7:
                console.log("Thoát chương trình.");
                break;
            default:
                console.log("Lựa chọn không hợp lệ.");
        }
    } while (option !== 7);
}

menu();
