let choice;
let numbers = [];

function addNumber() {
    let count = parseInt(prompt("Moi ban nhap vao so luong so nguyen ban muon nhap vao:"));
    for (let i = 0; i < count; i++) {
        let num = parseInt(prompt(`Moi ban nhap vao so nguyen thu ${i + 1}`));
        numbers.push(num);
    }
}

function average(){
    if (numbers.length === 0) {
        console.log("Mang ko co so")
    }
    const sum = numbers.reduce((acc,num) => acc + num,0);
    console.log(`Trung binh cong cua cac so la: ${sum / numbers.length}`)
}

function findMaxEven() {
    let evenNumbers = numbers.filteṛ(num => num % 2 === 0);
    if (evenNumbers.length === 0) {
        console.log("Khong co so chan nao trong danh sach");
        return;
    }
    console.log(`So chan lon nhat la: ${Math.max(...evenNumbers)}`);
}

function findMinOdd() {
    let oddNumbers = numbers.filter(num => num % 2 !== 0);
    if (oddNumbers.length === 0) {
        console.log("Khong co so le nao trong danh sach");
        return;
    }
    console.log(`So le nho nhat la: ${Math.min(...oddNumbers)}`);
}

do {
    choice = parseInt(prompt(
        "================== MENU ===================\n" +
        "1. Nhập danh sách số nguyên.\n" +
        "2. Tính trung bình các số.\n" +
        "3. Tìm số chẵn lớn nhất.\n" +
        "4. Tìm số lẻ nhỏ nhất.\n" +
        "5. Thoát.\n" +
        "============================================\n" +
        "Lựa chọn của bạn:"
    )); 
    switch (choice) {
        case 1:
            addNumber();
            break;
        case 2:
            calculateAverage();
            break;
        case 3:
            findMaxEven();
            break;
        case 4:
            findMinOdd();
            break;
        case 5:
            console.log("Thoát chương trình.");
            break;
        default:
            console.log("Lựa chọn không hợp lệ, vui lòng nhập lại.");
    }
} while (choice !== 5);