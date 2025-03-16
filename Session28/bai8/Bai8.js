let employees = [
    { id: 1, name: "Trần Trí Dương", position: "Developer", salary: 1000 },
    { id: 2, name: "Hà Bích Ngọc", position: "Designer", salary: 900 },
    { id: 3, name: "Bùi Thái Sơn", position: "Manager", salary: 1500 }
];

function addEmployee(id, name, position, salary) {
    employees.push({ id, name, position, salary });
}

function deleteEmployee(id) {
    const index = employees.findIndex(emp => emp.id === id);
    if (index === -1) {
        console.log("Không tìm thấy nhân viên có id " + id);
    } else {
        const confirmDelete = confirm("Bạn có chắc chắn muốn xóa nhân viên có id " + id + " không?");
        if (confirmDelete) {
            employees.splice(index, 1);
            console.log("Nhân viên với id " + id + " đã được xóa.");
        } else {
            console.log("Xóa nhân viên bị hủy.");
        }
    }
}

function updateSalary(id, newSalary) {
    const employee = employees.find(emp => emp.id === id);
    if (employee) {
        employee.salary = newSalary;
        console.log(`Lương của nhân viên ${employee.name} đã được cập nhật thành ${newSalary}.`);
    } else {
        console.log("Không tìm thấy nhân viên có id " + id);
    }
}

function searchEmployeeByName(name) {
    const result = employees.filter(emp => emp.name.toLowerCase().includes(name.toLowerCase()));
    if (result.length > 0) {
        console.log("Nhân viên tìm thấy:");
        result.forEach(emp => console.log(`ID: ${emp.id}, Tên: ${emp.name}, Vị trí: ${emp.position}, Lương: ${emp.salary}`));
    } else {
        console.log("Không tìm thấy nhân viên với tên " + name);
    }
}

function menu() {
    let option;
    do {
        option = parseInt(prompt(`
            Chọn chức năng:
            1. Thêm nhân viên mới
            2. Xóa nhân viên theo id
            3. Cập nhật mức lương của nhân viên theo id
            4. Tìm kiếm nhân viên theo tên
            5. Thoát
        `));

        switch (option) {
            case 1:
                const id = parseInt(prompt("Nhập id nhân viên:"));
                const name = prompt("Nhập tên nhân viên:");
                const position = prompt("Nhập vị trí của nhân viên:");
                const salary = parseFloat(prompt("Nhập lương của nhân viên:"));
                addEmployee(id, name, position, salary);
                console.log("Nhân viên đã được thêm.", employees);
                break;
            case 2:
                const deleteId = parseInt(prompt("Nhập id nhân viên muốn xóa:"));
                deleteEmployee(deleteId);
                break;
            case 3:
                const updateId = parseInt(prompt("Nhập id nhân viên muốn cập nhật lương:"));
                const newSalary = parseFloat(prompt("Nhập mức lương mới:"));
                updateSalary(updateId, newSalary);
                break;
            case 4:
                const searchName = prompt("Nhập tên nhân viên cần tìm:");
                searchEmployeeByName(searchName);
                break;
            case 5:
                console.log("Thoát chương trình.");
                break;
            default:
                console.log("Lựa chọn không hợp lệ.");
        }
    } while (option !== 5);
}

menu();
