function isStrongPassword(password) {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(password);
}

let userPassword = prompt("Nhập mật khẩu để kiểm tra:");