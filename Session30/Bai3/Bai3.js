let phones = [
    { id: 1, name: "iPhone 13", price: 25000000, quantity: 30, company: "Apple" },
    { id: 2, name: "Galaxy S21", price: 20000000, quantity: 25, company: "Samsung" },
    { id: 3, name: "Mi 11", price: 15000000, quantity: 40, company: "Xiaomi" },
    { id: 4, name: "iPhone 12", price: 22000000, quantity: 20, company: "Apple" }
];

let cart = [];

function displayPhonesByCompany(company) {
    const filteredPhones = phones.filter(phone => phone.company.toLowerCase() === company.toLowerCase());
    if (filteredPhones.length > 0) {
        console.log(`Danh sách điện thoại của hãng ${company}:`);
        filteredPhones.forEach(phone => {
            console.log(`ID: ${phone.id}, Tên: ${phone.name}, Giá: ${phone.price}, Số lượng: ${phone.quantity}`);
        });
    } else {
        console.log(`Không có điện thoại nào của hãng ${company}.`);
    }
}

function addNewPhone(id, name, price, quantity, company) {
    phones.push({ id, name, price, quantity, company });
    console.log(`Điện thoại "${name}" đã được thêm vào cửa hàng.`);
}

function searchPhone(searchTerm) {
    const resultById = phones.find(phone => phone.id === parseInt(searchTerm));
    const resultByName = phones.filter(phone => phone.name.toLowerCase().includes(searchTerm.toLowerCase()));
    
    if (resultById) {
        console.log(`Tìm thấy điện thoại theo ID:`);
        console.log(`ID: ${resultById.id}, Tên: ${resultById.name}, Giá: ${resultById.price}, Số lượng: ${resultById.quantity}`);
    }
    
    if (resultByName.length > 0) {
        console.log(`Tìm thấy điện thoại theo tên:`);
        resultByName.forEach(phone => {
            console.log(`ID: ${phone.id}, Tên: ${phone.name}, Giá: ${phone.price}, Số lượng: ${phone.quantity}`);
        });
    }
    
    if (!resultById && resultByName.length === 0) {
        console.log("Không tìm thấy điện thoại theo tên hoặc ID.");
    }
}

function buyPhone(id, quantityToBuy) {
    const phone = phones.find(phone => phone.id === id);
    if (phone) {
        if (phone.quantity >= quantityToBuy) {
            phone.quantity -= quantityToBuy;
            cart.push({ ...phone, quantity: quantityToBuy });
            console.log(`Mua thành công ${quantityToBuy} chiếc điện thoại "${phone.name}".`);
        } else {
            console.log(`Số lượng điện thoại "${phone.name}" không đủ để mua.`);
        }
    } else {
        console.log("Không tìm thấy điện thoại với ID này.");
    }
}

function checkout() {
    let totalAmount = 0;
    cart.forEach(item => {
        totalAmount += item.price * item.quantity;
    });
    console.log(`Thanh toán thành công! Tổng tiền của giỏ hàng là ${totalAmount} VND.`);
    cart = [];
    console.log("Giỏ hàng đã được làm trống.");
}

function sortPhonesByPrice(order = "asc") {
    if (order === "asc") {
        phones.sort((a, b) => a.price - b.price);
        console.log("Danh sách điện thoại đã được sắp xếp theo giá tăng dần.");
    } else if (order === "desc") {
        phones.sort((a, b) => b.price - a.price);
        console.log("Danh sách điện thoại đã được sắp xếp theo giá giảm dần.");
    }
}

function displayTotalStockValue() {
    let totalValue = 0;
    phones.forEach(phone => {
        totalValue += phone.price * phone.quantity;
    });
    console.log(`Tổng giá trị của tất cả các điện thoại trong kho: ${totalValue} VND.`);
}

function displayTotalQuantityByCompany() {
    let quantityByCompany = {};
    phones.forEach(phone => {
        if (!quantityByCompany[phone.company]) {
            quantityByCompany[phone.company] = 0;
        }
        quantityByCompany[phone.company] += phone.quantity;
    });

    console.log("Tổng số lượng điện thoại theo từng hãng:");
    for (let company in quantityByCompany) {
        console.log(`${company}: ${quantityByCompany[company]} chiếc`);
    }
}

function menu() {
    let option;
    do {
        option = parseInt(prompt(`
            Chọn chức năng:
            1. Hiển thị các điện thoại theo hãng
            2. Thêm điện thoại mới vào cửa hàng
            3. Tìm kiếm điện thoại theo tên hoặc ID
            4. Mua điện thoại
            5. Thanh toán giỏ hàng
            6. Sắp xếp điện thoại theo giá
            7. Hiển thị tổng số tiền của các điện thoại trong kho
            8. Hiển thị tổng số lượng điện thoại theo từng hãng
            9. Thoát
        `));

        switch (option) {
            case 1:
                const company = prompt("Nhập hãng điện thoại bạn muốn xem:");
                displayPhonesByCompany(company);
                break;
            case 2:
                const id = parseInt(prompt("Nhập ID điện thoại:"));
                const name = prompt("Nhập tên điện thoại:");
                const price = parseFloat(prompt("Nhập giá điện thoại:"));
                const quantity = parseInt(prompt("Nhập số lượng điện thoại:"));
                const companyToAdd = prompt("Nhập hãng điện thoại:");
                addNewPhone(id, name, price, quantity, companyToAdd);
                break;
            case 3:
                const searchTerm = prompt("Nhập tên hoặc ID điện thoại để tìm kiếm:");
                searchPhone(searchTerm);
                break;
            case 4:
                const phoneId = parseInt(prompt("Nhập ID điện thoại bạn muốn mua:"));
                const quantityToBuy = parseInt(prompt("Nhập số lượng điện thoại muốn mua:"));
                buyPhone(phoneId, quantityToBuy);
                break;
            case 5:
                checkout();
                break;
            case 6:
                const sortOrder = prompt("Nhập 'asc' để sắp xếp tăng dần hoặc 'desc' để sắp xếp giảm dần:");
                sortPhonesByPrice(sortOrder);
                break;
            case 7:
                displayTotalStockValue();
                break;
            case 8:
                displayTotalQuantityByCompany();
                break;
            case 9:
                console.log("Thoát chương trình.");
                break;
            default:
                console.log("Lựa chọn không hợp lệ.");
        }
    } while (option !== 9);
}

menu();
