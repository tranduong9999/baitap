let users = [];

function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.(com|vn)$/;
    return emailPattern.test(email);
}

function validatePassword(password) {
    const passwordPattern = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z!@#$%^&*]{6,}$/;
    return passwordPattern.test(password);
}

function registerUser(name, email, password) {
    if (users.find(user => user.email === email)) {
        console.log("Email đã tồn tại. Vui lòng chọn email khác.");
        return;
    }

    if (!validateEmail(email)) {
        console.log("Email không hợp lệ. Vui lòng nhập email hợp lệ.");
        return;
    }

    if (!validatePassword(password)) {
        console.log("Mật khẩu không hợp lệ. Mật khẩu phải từ 6 ký tự trở lên, có ít nhất 1 ký tự viết hoa và 1 ký tự đặc biệt.");
        return;
    }

    users.push({ name, email, password });
    console.log(`Đăng ký thành công! Chào mừng ${name} đến với hệ thống.`);
}

function loginUser(email, password) {
    const user = users.find(user => user.email === email);

    if (user && user.password === password) {
        console.log(`Đăng nhập thành công! Chào mừng ${user.name}.`);
    } else {
        console.log("Đăng nhập không thành công. Email hoặc mật khẩu không chính xác.");
    }
}

function menu() {
    let option;
    do {
        option = parseInt(prompt(`
            Chọn chức năng:
            1. Đăng ký người dùng mới
            2. Đăng nhập người dùng
            3. Thoát
        `));

        switch (option) {
            case 1:
                const name = prompt("Nhập tên người dùng:");
                const email = prompt("Nhập email:");
                const password = prompt("Nhập mật khẩu:");
                registerUser(name, email, password);
                break;
            case 2:
                const loginEmail = prompt("Nhập email để đăng nhập:");
                const loginPassword = prompt("Nhập mật khẩu để đăng nhập:");
                loginUser(loginEmail, loginPassword);
                break;
            case 3:
                console.log("Thoát chương trình.");
                break;
            default:
                console.log("Lựa chọn không hợp lệ.");
        }
    } while (option !== 3);
}

menu();
