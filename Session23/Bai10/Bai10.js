let numbers = [];
let choice;

do {
    choice = parseInt(prompt(
        "================== MENU ===================\n" +
        "1. Nhập số phần tử và giá trị các phần tử\n" +
        "2. In ra giá trị các phần tử đang quản lý\n" +
        "3. In ra các phần tử chẵn, tính tổng và sắp xếp giảm dần\n" +
        "4. In ra giá trị lớn nhất, nhỏ nhất trong mảng và vị trí của chúng \n" +
        "5. In ra các số nguyên tố và tính tổng\n" +
        "6. Nhập một số và đếm số lần xuất hiện trong mảng \n" +
        "7. Thêm một phần tử vào vị trí chỉ định\n" +
        "8. Xóa một phần tử theo giá trị \n" +
        "9. Sắp xếp mảng theo thứ tự tăng dần hoặc giảm dần " +
        "0. Thoát " +
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
            evenNumbers.sort((a, b) => b - a);
            console.log("Các số chẵn (giảm dần):", evenNumbers);
            console.log("Tổng các số chẵn:", evenSum);
            break;

        case 4:
            if (numbers.length) {
                let max = numbers[0], min = numbers[0], maxIndex = 0, minIndex = 0;
                for (let i = 0; i < numbers.length; i++) {
                    if (numbers[i] > max) {
                        max = numbers[i];
                        maxIndex = i;
                    }
                    if (numbers[i] < min) {
                        min = numbers[i];
                        minIndex = i;
                    }
                }
                console.log("Số lớn nhất:", max, "vị trí:", maxIndex);
                console.log("Số nhỏ nhất:", min, "vị trí:", minIndex);
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
            let count = numbers.filter(num => num === searchNumber).length;
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
            let deleteValue = parseInt(prompt("Nhập giá trị cần xóa:"));
            let newArr = numbers.filter(num => num !== deleteValue);
            if (newArr.length === numbers.length) console.log("Không tìm thấy giá trị cần xóa!");
            else {
                numbers = newArr;
                console.log("Mảng sau khi xóa giá trị", deleteValue, ":", numbers);
            }
            break;

        case 9:
            let sortType = prompt("Nhập 'tăng' để sắp xếp tăng dần, 'giảm' để sắp xếp giảm dần:");
            if (sortType === "tăng") {
                numbers.sort((a, b) => a - b);
                console.log("Mảng sau khi sắp xếp tăng dần:", numbers);
            } else if (sortType === "giảm") {
                numbers.sort((a, b) => b - a);
                console.log("Mảng sau khi sắp xếp giảm dần:", numbers);
            } else console.log("Lựa chọn không hợp lệ!");
            break;

        case 0:
            console.log("Thoát chương trình!");
            break;

        default:
            console.log("Lựa chọn không hợp lệ, vui lòng nhập lại!");
    }

} while (choice !== 0);
