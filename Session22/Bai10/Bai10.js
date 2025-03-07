let numbers = [];
let choice;

do {
    choice = parseInt(prompt(
        "MENU\n\n" +
        "1. Nhập vào mảng\n" +
        "2. Hiển thị mảng\n" +
        "3. Thêm phần tử\n" +
        "4. Sửa phần tử\n" +
        "5. Xóa phần tử\n" +
        "6. Thoát\n\n" +
        "Lựa chọn của bạn:"
    ));
    switch (choice) {
        case 1:
            let n = parseInt(prompt("Moi ban nhap vao so phan tu muon nhap vao mang"));
            for(let i = 0; i < n; i++) {
                let num = parseInt(prompt(`Nhap vao phan tu thu ${i + 1}`))
                if (!isNaN(num)) {
                    numbers.push(num)
                } else {
                    console.log("So ko hop le moi nhap lai");
                }
            }
            break;
        
        case 2:
            console.log(`Mang cua ban la: ${numbers}`);

            break;

        case 3:
            let newNumbersinput = parseInt(prompt("Nhap so phan tu can them vao mang:"));
            for(let j = 0; j < newNumbersinput; j++) {
                let number = parseInt(prompt(`Nhap vao phan tu thu ${j + 1}`))
                if (!isNaN(number)) {
                    numbers.push(number)
                } else {
                    console.log("So ko hop le moi nhap lai");
                }
            }

            break;

        case 4:
            let indexEdit = parseInt(prompt(`Nhap vao phan tu ban muon sua doi (tu 0 den ${numbers.length - 1})`));
            if(indexEdit >= 0 && indexEdit < numbers.length) {
                let newValue = parseInt(prompt(`Nhap phan tu moi`));
                if(!isNaN(newValue)){
                    numbers[indexEdit] = newValue;
                    console.log("Da cap nhat phan tu");
                } else { 
                    console.log("So ko hop le");
                    
                }
            }
            
            break;
            
        case 5: 
            let indexDelete = parseInt(prompt(`Nhap vao phan tu ban muon xoa (tu 0 den ${numbers.length - 1})`));
            if (indexDelete >= 0 && indexDelete < numbers.length) {
                let deleted = numbers.splice(indexDelete,1);
                console.log(`phan tu ${deleted} da bi xoa`);
            } else {
                console.log("Phan tu ko hop le");
            }

            break;

        case 6:
            console.log("Da thoat chuong trinh");
                
            break;

        default:
            console.log("Lua chon ko hop le");
            
            break;
    }
} while (choice !==6);