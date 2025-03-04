let N = parseInt(prompt("Nhập vào một số nguyên dương N:"));

if (isNaN(N) || N <= 0) {
    console.log("Vui l òng nhập một số nguyên dương hợp lệ.");
} else {
    let sum = 0;
    for (let i = 1; i <= N; i++) {
        sum += i;
    }
    console.log(`Tổng các số từ 1 đến ${N} là: ${sum}`);
}
