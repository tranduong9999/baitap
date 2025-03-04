let n = parseInt(prompt("Nhập số lượng số Fibonacci cần hiển thị:"));

if (isNaN(n) || n <= 0) {
    console.log("Không hợp lệ");
} else {
    let fib = [1, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    console.log(fib.slice(0, n).join(" "));
}
