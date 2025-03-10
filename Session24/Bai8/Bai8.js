let str = "";
let choice;

do {
    choice = parseInt(prompt(
        "================== MENU ===================\n" +
        "1. Nhập chuỗi\n" +
        "2. Hiển thị chuỗi\n" +
        "3. Tìm tất cả các từ con trùng lặp trong chuỗi và số lần xuất hiện\n" +
        "4. Tìm các từ có độ dài lớn nhất và nhỏ nhất trong chuỗi\n" +
        "5. Tìm số lần xuất hiện nhiều nhất của các ký tự trong chuỗi\n" +
        "6. Chuyển đổi chuỗi ký tự thành dạng snake_case\n" +
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
            let words = str.toLowerCase().match(/\b\w+\b/g);
            let wordCount = {};
            words.forEach(word => {
                wordCount[word] = (wordCount[word] || 0) + 1;
            });
            console.log("Các từ con trùng lặp và số lần xuất hiện:", Object.entries(wordCount).filter(([_, count]) => count > 1));
            break;

        case 4:
            let wordList = str.match(/\b\w+\b/g);
            if (!wordList) {
                console.log("Không tìm thấy từ nào trong chuỗi.");
                break;
            }
            let longest = wordList.reduce((acc, word) => word.length > acc[0].length ? [word] : word.length === acc[0].length ? [...acc, word] : acc, [wordList[0]]);
            let shortest = wordList.reduce((acc, word) => word.length < acc[0].length ? [word] : word.length === acc[0].length ? [...acc, word] : acc, [wordList[0]]);
            console.log("Từ dài nhất:", longest);
            console.log("Từ ngắn nhất:", shortest);
            break;

        case 5:
            let charCount = {};
            for (let char of str.replace(/\s/g, '')) {
                charCount[char] = (charCount[char] || 0) + 1;
            }
            let maxFreq = Math.max(...Object.values(charCount));
            console.log("Ký tự xuất hiện nhiều nhất:", Object.entries(charCount).filter(([_, count]) => count === maxFreq));
            break;

        case 6:
            console.log("Chuỗi dạng snake_case:", str.toLowerCase().replace(/\s+/g, '_'));
            break;

        case 7:
            console.log("Thoát chương trình.");
            break;

        default:
            console.log("Lựa chọn không hợp lệ, vui lòng nhập lại.");
    }
} while (choice !== 7);
