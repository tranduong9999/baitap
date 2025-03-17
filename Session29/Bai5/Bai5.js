let tasks = [];

function addTask(id, name, description, startTime, status) {
    tasks.push({ id, name, description, startTime, status });
    console.log("Công việc đã được thêm.");
}

function displayTasks() {
    console.log("Danh sách công việc:");
    tasks.forEach(task => {
        console.log(`ID: ${task.id}, Tên: ${task.name}, Mô tả: ${task.description}, Bắt đầu: ${task.startTime}, Trạng thái: ${task.status}`);
    });
}

function updateTaskStatus(id, newStatus) {
    const task = tasks.find(task => task.id === id);
    if (task) {
        task.status = newStatus;
        console.log(`Trạng thái công việc "${task.name}" đã được cập nhật thành "${newStatus}".`);
    } else {
        console.log("Không tìm thấy công việc với ID: " + id);
    }
}

function filterTasksByStatus(status) {
    const filteredTasks = tasks.filter(task => task.status === status);
    if (filteredTasks.length > 0) {
        console.log(`Danh sách công việc với trạng thái "${status}":`);
        filteredTasks.forEach(task => {
            console.log(`ID: ${task.id}, Tên: ${task.name}, Mô tả: ${task.description}, Bắt đầu: ${task.startTime}, Trạng thái: ${task.status}`);
        });
    } else {
        console.log(`Không có công việc nào với trạng thái "${status}".`);
    }
}

function sortTasksByStatus() {
    tasks.sort((a, b) => a.status.localeCompare(b.status));
    console.log("Danh sách công việc đã được sắp xếp theo trạng thái.");
}

function menu() {
    let option;
    do {
        option = parseInt(prompt(`
            Chọn chức năng:
            1. Thêm công việc mới
            2. Hiển thị tất cả các công việc
            3. Cập nhật trạng thái công việc theo id
            4. Lọc công việc theo trạng thái
            5. Sắp xếp công việc theo trạng thái
            6. Thoát
        `));

        switch (option) {
            case 1:
                const id = parseInt(prompt("Nhập id công việc:"));
                const name = prompt("Nhập tên công việc:");
                const description = prompt("Nhập mô tả công việc:");
                const startTime = prompt("Nhập thời gian bắt đầu (YYYY-MM-DD HH:MM):");
                const status = prompt("Nhập trạng thái công việc (Hoàn thành/Chưa hoàn thành):");
                addTask(id, name, description, startTime, status);
                break;
            case 2:
                displayTasks();
                break;
            case 3:
                const updateId = parseInt(prompt("Nhập id công việc muốn cập nhật trạng thái:"));
                const newStatus = prompt("Nhập trạng thái mới (Hoàn thành/Chưa hoàn thành):");
                updateTaskStatus(updateId, newStatus);
                break;
            case 4:
                const filterStatus = prompt("Nhập trạng thái để lọc (Hoàn thành/Chưa hoàn thành):");
                filterTasksByStatus(filterStatus);
                break;
            case 5:
                sortTasksByStatus();
                displayTasks();
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
