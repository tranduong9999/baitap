let numbers = [];
let choice;

do {
    choice = parseInt(prompt(
        "================== MENU ===================\n" +
        "1. Nhập số phần tử và giá trị các phần tử\n" +
        "2. In ra giá trị các phần tử đang quản lý\n" +
        "3. In ra giá trị các phần tử chẵn và tính tổng\n" +
        "4. In ra giá trị lớn nhất và nhỏ nhất trong mảng\n" +
        "5. In ra các phần tử là số nguyên tố và tính tổng\n" +
        "6. Nhập vào một số và thống kê số lần xuất hiện trong mảng\n" +
        "7. Thêm một phần tử vào vị trí chỉ định\n" +
        "8. Thoát\n" +
        "============================================\n" +
        "Lựa chọn của bạn:"
    ));

    switch (choice) {
        case 1:
            let n = parseInt(prompt("Nhập số phần tử của mảng:"));
            numbers = [];
            for (let i = 0; i < n; i++) {
                numbers.push(parseInt(prompt(`Nhập phần tử thứ ${i + 1}:`)));
            }
            console.log("Mảng đã được cập nhật:", numbers);
            break;

        case 2:
            console.log(numbers.length ? "Mảng hiện tại: " + numbers.join(", ") : "Mảng trống!");
            break;

        case 3:
            let evenNumbers = [], evenSum = 0;
            for (let num of numbers) {
                if (num % 2 === 0) {
                    evenNumbers.push(num);
                    evenSum += num;
                }
            }
            console.log("Các số chẵn:", evenNumbers);
            console.log("Tổng các số chẵn:", evenSum);
            break;

        case 4:
            if (numbers.length) {
                let max = numbers[0], min = numbers[0];
                for (let num of numbers) {
                    if (num > max) max = num;
                    if (num < min) min = num;
                }
                console.log("Số lớn nhất:", max);
                console.log("Số nhỏ nhất:", min);
            } else console.log("Mảng trống!");
            break;

        case 5:
            let primeNumbers = [], primeSum = 0;
            for (let num of numbers) {
                let isPrime = num > 1;
                for (let i = 2; i <= Math.sqrt(num); i++) {
                    if (num % i === 0) {
                        isPrime = false;
                        break;
                    }
                }
                if (isPrime) {
                    primeNumbers.push(num);
                    primeSum += num;
                }
            }
            console.log("Các số nguyên tố:", primeNumbers);
            console.log("Tổng các số nguyên tố:", primeSum);
            break;

        case 6:
            let searchNumber = parseInt(prompt("Nhập số cần thống kê:"));
            let count = 0;
            for (let num of numbers) {
                if (num === searchNumber) count++;
            }
            console.log("Số", searchNumber, "xuất hiện", count, "lần trong mảng.");
            break;

        case 7:
            let newValue = parseInt(prompt("Nhập số cần thêm:"));
            let index = parseInt(prompt(`Nhập vị trí (0 đến ${numbers.length}):`));
            if (index >= 0 && index <= numbers.length) {
                numbers.splice(index, 0, newValue);
                console.log("Đã thêm", newValue, "vào vị trí", index);
                console.log("Mảng hiện tại:", numbers);
            } else console.log("Vị trí không hợp lệ!");
            break;

        case 8:
            console.log("Thoát chương trình!");
            break;

        default:
            console.log("Lựa chọn không hợp lệ, vui lòng nhập lại!");
    }

} while (choice !== 8);