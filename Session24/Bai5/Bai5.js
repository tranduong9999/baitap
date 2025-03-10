let matrix = [];
let choice;

do {
    choice = parseInt(prompt(
        "================== MENU ===================\n" +
        "1. Nhập mảng 2 chiều\n" +
        "2. Hiển thị mảng 2 chiều\n" +
        "3. Tính tổng các phần tử trong mảng\n" +
        "4. Tính tổng đường chéo chính\n" +
        "5. Tính tổng đường chéo phụ\n" +
        "6. Tính trung bình cộng các phần tử trong một hàng hoặc một cột\n" +
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
            let totalSum = 0;
            for (let row of matrix) {
                for (let num of row) {
                    totalSum += num;
                }
            }
            console.log("Tổng các phần tử trong mảng là:", totalSum);
            break;

        case 4:
            if (matrix.length && matrix.length === matrix[0].length) {
                let mainDiagonalSum = 0;
                for (let i = 0; i < matrix.length; i++) {
                    mainDiagonalSum += matrix[i][i];
                }
                console.log("Tổng đường chéo chính là:", mainDiagonalSum);
            } else {
                console.log("Mảng không phải là ma trận vuông!");
            }
            break;

        case 5:
            if (matrix.length && matrix.length === matrix[0].length) {
                let secondaryDiagonalSum = 0;
                let n = matrix.length;
                for (let i = 0; i < n; i++) {
                    secondaryDiagonalSum += matrix[i][n - 1 - i];
                }
                console.log("Tổng đường chéo phụ là:", secondaryDiagonalSum);
            } else {
                console.log("Mảng không phải là ma trận vuông!");
            }
            break;

        case 6:
            if (!matrix.length) {
                console.log("Mảng trống! Hãy nhập dữ liệu trước.");
                break;
            }
            let type = prompt("Nhập 'hàng' để tính trung bình hàng hoặc 'cột' để tính trung bình cột:");
            if (type === "hàng") {
                let rowIndex = parseInt(prompt("Nhập số hàng cần tính trung bình cộng:"));
                if (rowIndex >= 0 && rowIndex < matrix.length) {
                    let rowSum = matrix[rowIndex].reduce((acc, num) => acc + num, 0);
                    let avg = rowSum / matrix[rowIndex].length;
                    console.log(`Trung bình cộng của hàng ${rowIndex} là: ${avg}`);
                } else {
                    console.log("Số hàng không hợp lệ!");
                }
            } else if (type === "cột") {
                let colIndex = parseInt(prompt("Nhập số cột cần tính trung bình cộng:"));
                if (colIndex >= 0 && colIndex < matrix[0].length) {
                    let colSum = 0;
                    for (let i = 0; i < matrix.length; i++) {
                        colSum += matrix[i][colIndex];
                    }
                    let avg = colSum / matrix.length;
                    console.log(`Trung bình cộng của cột ${colIndex} là: ${avg}`);
                } else {
                    console.log("Số cột không hợp lệ!");
                }
            } else {
                console.log("Lựa chọn không hợp lệ!");
            }
            break;

        case 7:
            console.log("Thoát chương trình.");
            break;

        default:
            console.log("Lựa chọn không hợp lệ, vui lòng nhập lại.");
    }
} while (choice !== 7);
