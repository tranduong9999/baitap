let n = parseInt(prompt("Nhập số nguyên tố cần hiển thị:"));

if (isNaN(n) || n <= 0) {
    console.log("Không hợp lệ");
} else {
    let count = 0, num = 2;
    while (count < n) {
        let isPrime = num > 1;
        for (let i = 2; i * i <= num; i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            console.log(num);
            count++;
        }
        num++;
    }
}
