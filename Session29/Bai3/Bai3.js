let menu = {
    "Món khai vị": [
        { name: "Gỏi cuốn", price: 50000, description: "Món ăn nhẹ, gồm tôm, rau và bánh tráng" },
        { name: "Chả giò", price: 40000, description: "Chả giò chiên giòn, nhân thịt và rau" }
    ],
    "Món chính": [
        { name: "Phở bò", price: 70000, description: "Món phở với thịt bò tươi, nước dùng đậm đà" },
        { name: "Cơm tấm", price: 60000, description: "Cơm tấm với sườn nướng, trứng ốp la" }
    ],
    "Món tráng miệng": [
        { name: "Bánh flan", price: 30000, description: "Bánh flan mềm mịn, thơm ngon" },
        { name: "Chè ba màu", price: 25000, description: "Chè với ba lớp màu sắc bắt mắt" }
    ]
};

function addDishToCategory(category, name, price, description) {
    if (!menu[category]) {
        menu[category] = [];
    }
    menu[category].push({ name, price, description });
    console.log(`Món ăn "${name}" đã được thêm vào danh mục "${category}".`);
}

function deleteDishByName(category, name) {
    let dishes = menu[category];
    if (dishes) {
        let index = dishes.findIndex(dish => dish.name === name);
        if (index !== -1) {
            dishes.splice(index, 1);
            console.log(`Món ăn "${name}" đã được xóa khỏi danh mục "${category}".`);
        } else {
            console.log(`Không tìm thấy món ăn "${name}" trong danh mục "${category}".`);
        }
    } else {
        console.log(`Danh mục "${category}" không tồn tại.`);
    }
}

function updateDishInfo(category, name, newName, newPrice, newDescription) {
    let dishes = menu[category];
    if (dishes) {
        let dish = dishes.find(d => d.name === name);
        if (dish) {
            dish.name = newName;
            dish.price = newPrice;
            dish.description = newDescription;
            console.log(`Thông tin món ăn "${name}" đã được cập nhật.`);
        } else {
            console.log(`Không tìm thấy món ăn "${name}" trong danh mục "${category}".`);
        }
    } else {
        console.log(`Danh mục "${category}" không tồn tại.`);
    }
}

function displayFullMenu() {
    console.log("Toàn bộ menu nhà hàng:");
    for (let category in menu) {
        console.log(`Danh mục: ${category}`);
        menu[category].forEach(dish => {
            console.log(`- Tên: ${dish.name}, Giá: ${dish.price}, Mô tả: ${dish.description}`);
        });
    }
}

function searchDishByName(name) {
    let found = false;
    for (let category in menu) {
        let dish = menu[category].find(d => d.name.toLowerCase().includes(name.toLowerCase()));
        if (dish) {
            found = true;
            console.log(`Tìm thấy món ăn trong danh mục "${category}":`);
            console.log(`- Tên: ${dish.name}, Giá: ${dish.price}, Mô tả: ${dish.description}`);
        }
    }
    if (!found) {
        console.log(`Không tìm thấy món ăn có tên "${name}" trong toàn bộ menu.`);
    }
}

function menu() {
    let option;
    do {
        option = parseInt(prompt(`
            Chọn chức năng:
            1. Thêm món ăn vào danh mục
            2. Xóa món ăn theo tên khỏi danh mục
            3. Cập nhật thông tin món ăn
            4. Hiển thị toàn bộ menu
            5. Tìm kiếm món ăn theo tên
            6. Thoát
        `));

        switch (option) {
            case 1:
                let categoryToAdd = prompt("Nhập danh mục món ăn (Khai vị, Món chính, Món tráng miệng):");
                let nameToAdd = prompt("Nhập tên món ăn:");
                let priceToAdd = parseFloat(prompt("Nhập giá món ăn:"));
                let descriptionToAdd = prompt("Nhập mô tả món ăn:");
                addDishToCategory(categoryToAdd, nameToAdd, priceToAdd, descriptionToAdd);
                break;
            case 2:
                let categoryToDelete = prompt("Nhập danh mục món ăn (Khai vị, Món chính, Món tráng miệng):");
                let nameToDelete = prompt("Nhập tên món ăn cần xóa:");
                deleteDishByName(categoryToDelete, nameToDelete);
                break;
            case 3:
                let categoryToUpdate = prompt("Nhập danh mục món ăn (Khai vị, Món chính, Món tráng miệng):");
                let nameToUpdate = prompt("Nhập tên món ăn cần cập nhật:");
                let newName = prompt("Nhập tên món ăn mới:");
                let newPrice = parseFloat(prompt("Nhập giá món ăn mới:"));
                let newDescription = prompt("Nhập mô tả món ăn mới:");
                updateDishInfo(categoryToUpdate, nameToUpdate, newName, newPrice, newDescription);
                break;
            case 4:
                displayFullMenu();
                break;
            case 5:
                let nameToSearch = prompt("Nhập tên món ăn cần tìm:");
                searchDishByName(nameToSearch);
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
