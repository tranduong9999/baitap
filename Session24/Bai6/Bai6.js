let str = "";
let choice;

do {
    choice = parseInt(prompt(
        "================== MENU ===================\n" +
        "1. Nhập chuỗi\n" +
        "2. Hiển thị chuỗi\n" +
        "3. Tính độ dài của chuỗi\n" +
        "4. Đếm số lần xuất hiện của một ký tự\n" +
        "5. Kiểm tra chuỗi có phải là chuỗi đối xứng không\n" +
        "6. Chuyển đổi chuỗi thành chữ in hoa các ký tự đầu tiên của từ\n" +
        "7. Thoát chương trình\n" +
        "============================================\n" +
        "Lựa chọn của bạn:"
    ));

    switch (choice) {
        case 1:
            str = prompt("Nhập chuỗi của bạn:");
            console.log("Chuỗi đã được cập nhật:", str);
            break;

        case 2:
            console.log(str.length ? "Chuỗi hiện tại: " + str : "Chưa có chuỗi nào được nhập!");
            break;

        case 3:
            console.log("Độ dài của chuỗi là:", str.length);
            break;

        case 4:
            if (str.length) {
                let charToFind = prompt("Nhập ký tự cần đếm:");
                let count = str.split("").filter(char => char === charToFind).length;
                console.log(`Ký tự '${charToFind}' xuất hiện ${count} lần trong chuỗi.`);
            } else {
                console.log("Chưa có chuỗi nào được nhập!");
            }
            break;

        case 5:
            if (str.length) {
                let reversedStr = str.split("").reverse().join("");
                console.log(reversedStr === str ? "Chuỗi đối xứng." : "Chuỗi không đối xứng.");
            } else {
                console.log("Chưa có chuỗi nào được nhập!");
            }
            break;

        case 6:
            if (str.length) {
                let capitalizedStr = str
                    .split(" ")
                    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" ");
                console.log("Chuỗi sau khi chuyển đổi:", capitalizedStr);
            } else {
                console.log("Chưa có chuỗi nào được nhập!");
            }
            break;

        case 7:
            console.log("Thoát chương trình.");
            break;

        default:
            console.log("Lựa chọn không hợp lệ, vui lòng nhập lại.");
    }
} while (choice !== 7);
