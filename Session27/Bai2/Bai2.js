let students = [];
let choice;

function addStudents() {
    let count = parseInt(prompt(`Moi ban nhap vao so luong sinh vien ban muon them`));
    for (let i = 0; i < count; i++) {
        let name = prompt(`Moi ban nhap vao ten sinh vien thu ${i + 1}`);
        students.push(name)
    }
}

function showStudents() {
    if (students.length === 0) {
        console.log("Mang ko hop le");
        return;
    } 
    console.log(`Danh sach sinh vien ban vua them la: ${students}`);
}

function findStudent() {
    let find = prompt("Moi ban nhap vao ten nguoi muon tim:");
    let found = null;

    for (let i = 0; i < students.length; i++) {
        if (students[i].toLowerCase() === find.toLowerCase()) {
            found = students[i];
            break;
        }
    }
    if (found) {
        console.log("Da tim thay sinh vien",found);
    } else {
        console.log("ko tim thay sinh vien")       
    }
}
do {
    choice = parseInt(prompt(
        "================== MENU ===================\n" +
        "1. Nhập danh sách sinh viên.\n" +
        "2. Hiển thị danh sách sinh viên.\n" +
        "3. Tìm sinh viên theo tên.\n" +
        "4. Xóa sinh viên khỏi danh sách.\n" +
        "5. Thoát.\n" +
        "============================================\n" +
        "Lựa chọn của bạn:"
    )); 
    switch (choice) {
        case 1:
            addStudents();

            break;
    
        case 2:
            showStudents();

            break;

        case 3:
            findStudent();

            break;
        default:
            break;
    }
} while (choice !== 5);