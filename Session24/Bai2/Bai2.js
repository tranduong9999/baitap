let str = [];
let choice;

do {
    choice = parseInt(prompt(
        "================== MENU ===================\n" +
        "1. Nhập mảng số nguyên\n" +
        "2. Hiển thị mảng\n" +
        "3. Tìm các phần tử chẵn và lẻ\n" +
        "4. Tính trung bình cộng của mảng\n" +
        "5. Xóa phần tử tại vị trí chỉ định\n" +
        "6. Tìm phần tử lớn thứ hai trong mảng\n" +
        "7. Thoát chương trình\n" +
        "============================================\n" +
        "Lựa chọn của bạn:"
    ));
    switch (choice) {
        case 1:
            let n = parseInt(prompt("Moi ban nhap vao so phan tu muon in vao mang"));
            for (let i = 0; i < n; i++) {
                let number = parseInt(prompt(`Moi ban nhap vao phan tu thu ${i + 1}`));
                if (!isNaN(number)) {
                    str.push(number);
                    console.log(`Da in vao mang thanh cong:`)
                } else {
                    console.log("Mang ko hop le")
                }
            }

            break;

        case 2:
            console.log(`Mang cua ban la: ${str}`)

            break;

        case 3:
            let evenNumbers = [];
            let oddNumbers = [];
            for (let num of str) {
                if (num % 2 === 0) {
                    evenNumbers.push(num);
                } else {
                    oddNumbers.push(num);
                }      
            }
            console.log("Các số chẵn:", evenNumbers.length ? evenNumbers.join(", ") : "Không có số chẵn");
            console.log("Các số lẻ:", oddNumbers.length ? oddNumbers.join(", ") : "Không có số lẻ");

            break;

        case 4:
            if (str.length) {
                let sum = 0;
                for (let num of str){
                    sum += num;
                }
                let avg = sum / str.length;
                console.log("Giá trị trung bình của mảng là:", avg);
            } else {
                console.log("Mảng trống!");
            }
            break;

        case 5:
            let deleteValue = parseInt(prompt("Nhập giá trị cần xóa:"));
            let newArr = numbers.filter(num => num !== deleteValue);
            if (newArr.length === str.length) {
                console.log("Không tìm thấy giá trị cần xóa!")
            } else {
                str = newArr;
                console.log("Mảng sau khi xóa giá trị", deleteValue, ":", numbers);
            }

            break;

        case 6:
            if (str.length < 2) {
                console.log("Không đủ phần tử để tìm số lớn thứ hai!");
            } else {
                let max = Math.max(...str);
                let secondMax = -Infinity;
                for (let num of str) {
                    if (num > secondMax && num < max) {
                        secondMax = num;
                    }
                }
                console.log(secondMax === -Infinity ? "Không có số lớn thứ hai!" : "Số lớn thứ hai là:", secondMax);
            }

            break;

        case 7:
            console.log("Thoat chuong trinh");

            break;

        default:
            console.log("Lua chon ko hop le, vui long nhap lai")
            break;
    }
} while (choice !== 7);