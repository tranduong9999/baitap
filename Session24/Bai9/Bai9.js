let str = "";
let choice;

do {
    choice = parseInt(prompt(
        "================== MENU ===================\n" +
        "1. Nhập chuỗi\n" +
        "2. Hiển thị chuỗi\n" +
        "3. Đếm số lượng các ký tự là chữ và số trong chuỗi\n" +
        "4. Chuyển đổi chữ hoa thành chữ thường và ngược lại\n" +
        "5. Trộn lẫn chuỗi gốc với chuỗi thứ hai\n" +
        "6. Sắp xếp từ trong chuỗi theo độ dài tăng dần\n" +
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
            let letters = str.replace(/[^a-zA-Z]/g, "").length;
            let numbers = str.replace(/[^0-9]/g, "").length;
            console.log(`Số ký tự chữ: ${letters}, Số ký tự số: ${numbers}`);
            break;

        case 4:
            let toggledStr = str.split("").map(char => 
                char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
            ).join("");
            console.log("Chuỗi sau khi chuyển đổi:", toggledStr);
            break;

        case 5:
            let str2 = prompt("Nhập chuỗi thứ hai:");
            let mixed = str.split("").map((char, i) => char + (str2[i] || "")).join("") + str2.slice(str.length);
            console.log("Chuỗi sau khi trộn:", mixed);
            break;

        case 6:
            let sortedWords = str.split(" ").sort((a, b) => a.length - b.length);
            console.log("Chuỗi sau khi sắp xếp từ theo độ dài:", sortedWords.join(" "));
            break;

        case 7:
            console.log("Thoát chương trình.");
            break;

        default:
            console.log("Lựa chọn không hợp lệ, vui lòng nhập lại.");
    }
} while (choice !== 7);
