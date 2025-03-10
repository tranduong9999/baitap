let matrix = [];
let choice;

do {
    choice = parseInt(prompt(
        "================== MENU ===================\n" +
        "1. Nhập mảng 2 chiều\n" +
        "2. Hiển thị mảng 2 chiều\n" +
        "3. Tính tổng các phần tử trong mảng\n" +
        "4. Tìm phần tử lớn nhất trong mảng và chỉ số của nó\n" +
        "5. Tính trung bình cộng các phần tử của một hàng cụ thể\n" +
        "6. Đảo ngược các hàng trong mảng\n" +
        "7. Thoát chương trình\n" +
        "============================================\n" +
        "Lựa chọn của bạn:"
    ));

    switch (choice) {
        case 1:
            let rows = parseInt(prompt("Nhập số hàng của mảng:"));
            let cols = parseInt(prompt("Nhập số cột của mảng:"));
            matrix = [];

            for (let i = 0; i < rows; i++) {
                let row = [];
                for (let j = 0; j < cols; j++) {
                    row.push(parseInt(prompt(`Nhập phần tử [${i}][${j}]:`)));
                }
                matrix.push(row);
            }
            console.log("Mảng 2 chiều đã được cập nhật:");
            console.table(matrix);
            break;

        case 2:
            if (matrix.length) {
                console.log("Mảng 2 chiều:");
                console.table(matrix);
            } else {
                console.log("Mảng trống! Hãy nhập dữ liệu trước.");
            }
            break;

        case 3:
            let sum = 0;
            for (let row of matrix) {
                for (let num of row) {
                    sum += num;
                }
            }
            console.log("Tổng các phần tử trong mảng là:", sum);
            break;

        case 4:
            if (matrix.length) {
                let max = matrix[0][0], maxRow = 0, maxCol = 0;
                for (let i = 0; i < matrix.length; i++) {
                    for (let j = 0; j < matrix[i].length; j++) {
                        if (matrix[i][j] > max) {
                            max = matrix[i][j];
                            maxRow = i;
                            maxCol = j;
                        }
                    }
                }
                console.log(`Phần tử lớn nhất là ${max} tại vị trí [${maxRow}][${maxCol}]`);
            } else {
                console.log("Mảng trống!");
            }
            break;

        case 5:
            let rowIndex = parseInt(prompt("Nhập số hàng cần tính trung bình cộng:"));
            if (rowIndex >= 0 && rowIndex < matrix.length) {
                let rowSum = matrix[rowIndex].reduce((acc, num) => acc + num, 0);
                let avg = rowSum / matrix[rowIndex].length;
                console.log(`Trung bình cộng của hàng ${rowIndex} là: ${avg}`);
            } else {
                console.log("Số hàng không hợp lệ!");
            }
            break;

        case 6:
            if (matrix.length) {
                matrix.reverse();
                console.log("Mảng sau khi đảo ngược các hàng:");
                console.table(matrix);
            } else {
                console.log("Mảng trống!");
            }
            break;

        case 7:
            console.log("Thoát chương trình.");
            break;

        default:
            console.log("Lựa chọn không hợp lệ, vui lòng nhập lại.");
    }
} while (choice !== 7);
