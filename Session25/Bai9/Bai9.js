let users = [];

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.(com|vn)$/.test(email);
}

function registerEmail(email) {
    if (!isValidEmail(email)) {
        console.log("Email không hợp lệ! Vui lòng nhập email có '@' và kết thúc bằng .com hoặc .vn");
        return;
    }
    if (users.includes(email)) {
        console.log("Tài khoản đã tồn tại!");
    } else {
        users.push(email);
        console.log("Đăng ký thành công!");
    }
}

let userEmail = prompt("Nhập email để đăng ký:");
