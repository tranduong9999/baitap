let str = [];
let choice;

do {
    choice = parseInt(prompt(
        "================== MENU ===================\n" +
        "1. Nhập mảng số nguyên\n" +
        "2. Hiển thị mảng\n" +
        "3. Tìm phần tử lớn nhất trong mảng và in ra chỉ số của nó\n" +
        "4. Tính tổng và trung bình cộng của các số dương trong mảng\n" +
        "5. Đảo ngược mảng\n" +
        "6. Kiểm tra mảng có đối xứng không\n" +
        "7. Thoát chương trình\n" +
        "============================================\n" +
        "Lựa chọn của bạn:"
    ));

    switch (choice) {
        case 1:
            let n = parseInt(prompt("Mời bạn nhập vào số phần tử muốn thêm vào mảng:"));
            str = [];
            for (let i = 0; i < n; i++) {
                let number = parseInt(prompt(`Mời bạn nhập vào phần tử thứ ${i + 1}:`));
                if (!isNaN(number)) {
                    str.push(number);
                } else {
                    console.log("Giá trị nhập không hợp lệ!");
                    i--;
                }
            }
            console.log("Mảng đã được cập nhật:", str);
            break;

        case 2:
            console.log(str.length ? "Mảng của bạn là: " + str.join(", ") : "Mảng trống!");
            break;

        case 3:
            if (str.length) {
                let maxNumber = str[0];
                let maxIndex = 0;
                for (let i = 1; i < str.length; i++) {
                    if (str[i] > maxNumber) {
                        maxNumber = str[i];
                        maxIndex = i;
                    }
                }
                console.log("Phần tử lớn nhất là:", maxNumber, "ở vị trí:", maxIndex);
            } else {
                console.log("Mảng trống!");
            }
            break;

        case 4:
            let positiveSum = 0;
            let positiveCount = 0;
            for (let num of str) {
                if (num > 0) {
                    positiveSum += num;
                    positiveCount++;
                }
            }
            if (positiveCount > 0) {
                let avg = positiveSum / positiveCount;
                console.log("Tổng các số dương:", positiveSum);
                console.log("Trung bình cộng các số dương:", avg);
            } else {
                console.log("Không có số dương trong mảng.");
            }
            break;

        case 5:
            if (str.length) {
                let reversedArray = [...str].reverse();
                console.log("Mảng sau khi đảo ngược:", reversedArray);
            } else {
                console.log("Mảng trống!");
            }
            break;

        case 6:
            let isSymmetric = true;
            for (let i = 0; i < Math.floor(str.length / 2); i++) {
                if (str[i] !== str[str.length - 1 - i]) {
                    isSymmetric = false;
                    break;
                }
            }
            console.log(isSymmetric ? "Mảng đối xứng." : "Mảng không đối xứng.");
            break;

        case 7:
            console.log("Thoát chương trình.");
            break;

        default:
            console.log("Lựa chọn không hợp lệ, vui lòng nhập lại.");
    }
} while (choice !== 7);
