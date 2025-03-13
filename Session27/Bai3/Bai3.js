let choice;

function circularArea(radius) {
    return Math.PI * radius * radius
}

function circularCircumference(radius) {
    return 2 * Math.PI * radius
}

function AreaofRectangle(width,height) {
    return width * height;
}

function PerimeterofRectangle(width,height) {
    return 2 * (width + height) ;
}

do {
    choice = parseInt(prompt(
        "================== MENU ===================\n" +
        "1. Tính diện tích hình tròn.\n" +
        "2. Tính chu vi hình tròn.\n" +
        "3. Tính diện tích hình chữ nhật.\n" +
        "4. Tính chu vi hình chữ nhật.\n" +
        "5. Thoát.\n" +
        "============================================\n" +
        "Lựa chọn của bạn:"
    )); 
    switch (choice) {
        case 1:
            let radius1 = parseFloat(prompt("Moi ban nhap vao ban kinh hinh tron"));
            console.log(`Dien tich hinh tron la: ${circularArea(radius1)}`)

            break;
        
        case 2:
            let radius2 = parseFloat(prompt("Moi ban nhap vao ban kinh hinh tron"));
            console.log(`Chu vi hinh tron la: ${circularCircumference(radius2)}`)

            break;
    
        case 3:
            let width1 = parseFloat(prompt("Moi ban nhap vao chieu dai hinh chu nhat"));
            let height1 = parseFloat(prompt("Moi ban nhap vao chieu rong hinh chu nhat"));
            console.log(`Dien tich hinh chu nhat la: ${AreaofRectangle(width1,height1)}`)
    
            break;

        case 4:
            let width2 = parseFloat(prompt("Moi ban nhap vao chieu dai hinh chu nhat"));
            let height2 = parseFloat(prompt("Moi ban nhap vao chieu rong hinh chu nhat"));
            console.log(`Chu vi hinh chu nhat la: ${PerimeterofRectangle(width2,height2)}`);

            break;

        case 5:
            console.log("Da thoat chuong trinh");

            break;
        default:
            console.log("Lua chon ko hop le! Vui long chon lai")
            break;
    }
} while (choice !== 5);