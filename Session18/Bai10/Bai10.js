let number = parseInt(prompt("Nhập một số từ 0 đến 999: "));

if (isNaN(number) || number < 0 || number > 999) {
    console.log("Vui lòng nhập một số nguyên trong khoảng 0 - 999.");
} else {
    let ones = ["không", "một", "hai", "ba", "bốn", "năm", "sáu", "bảy", "tám", "chín"];

    let teens = ["mười", "mười một", "mười hai", "mười ba", "mười bốn", "mười lăm", "mười sáu", "mười bảy", "mười tám", "mười chín"];

    let tens = ["", "", "hai mươi", "ba mươi", "bốn mươi", "năm mươi", "sáu mươi", "bảy mươi", "tám mươi", "chín mươi"];

    let hundred = Math.floor(number / 100);
    let ten = Math.floor((number % 100) / 10);
    let one = number % 10;

    let result = "";

    if (hundred > 0) {
        result += ones[hundred] + " trăm";
        if (ten === 0 && one > 0) {
            result += " lẻ";
        }
    }

    if (ten === 1) {
        result += " " + teens[one]; 
    } else if (ten > 1) {
        result += " " + tens[ten]; 
        if (one === 1) {
            result += " mốt";
        } else if (one > 1) {
            result += " " + ones[one];
        }
    } else if (one > 0) {
        result += " " + ones[one];
    }

    if (number === 0) {
        result = "không";
    }

    console.log(`Số ${number} đọc là: ${result.trim()}`);
    alert(`Số ${number} đọc là: ${result.trim()}`);
}
