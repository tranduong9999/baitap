let str = [];
let choice;

do {
    choice = parseInt(prompt(
        "================== MENU ===================\n" +
        "1. Nhập mảng\n" +
        "2. Hiển thị mảng\n" +
        "3. Tìm phần tử lớn nhất và nhỏ nhất trong mảng\n" +
        "4. Tính tổng các phần tử trong mảng \n" +
        "5. Tìm số lần xuất hiện của một phần tử trong mảng\n" +
        "6. Sắp xếp mảng tăng dần \n" +
        "7. Thoát chương trình\n" +
        "============================================\n" +
        "Lựa chọn của bạn:"
    ));
    switch (choice) {
        case 1:
            let n = parseInt(prompt("Moi ban nhap vao so phan tu muon in vao mang"))    ;
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
            if(str.length) {
                let maxNumber = str[0]; 
                let minNumber = str[0];
                for (let i = 0; i < str.length; i++) {
                    if (str[i] > maxNumber) {
                        maxNumber = str[i];
                    }
                    if (str[i] < minNumber) {
                        minNumber = str[i]
                    }
                }
                console.log(`So lon nhat la ${maxNumber}`);
                console.log(`So nho nhat la ${minNumber}`);
            } else {
                console.log("Mang ban vua nhap ko hop le:")
            }

            break;

        case 4:
            if (str.length) {
                let sum = 0;
                for (let i = 0; i < str.length; i++) {
                    sum += str[i]; 
                }
                console.log(`Tổng các phần tử trong mảng là: ${sum}`);
            } else {
                console.log("Mảng chưa có dữ liệu!");
            }
            break;

        case 5:
            let input = parseInt(prompt("Moi ban nhap vao 1 so nguyen bat ki"));

            if (isNaN(input)) {
                console.log("ko phai so nguyen");
            } else {
                let count = 0;

                for (let i = 0; i < str.length; i++) {
                    if (str[i] === input) {
                        count++;
                    }
                }
                console.log(`So ${input} xuat hien ${count} trong vong lap`);
            }

            break;

        case 6:
            str.sort((a, b) => a - b);
            console.log(`Mang sau khi sap xep tang dan la: ${str}`);

            break;

        case 7:
            console.log("Thoat chuong trinh");

            break;
    
        default:
            console.log("Lua chon ko hop le, vui long nhap lai")
            break;
    }
} while (choice !== 7);