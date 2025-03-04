let N = parseInt(prompt("Nhập vào một số nguyên dương N:"));

if (isNaN(N) || N <= 0) {
    console.log("Vui lòng nhập một số nguyên dương hợp lệ.");
} else {
    console.log("Cac so chia het cho 5 la: ");
    
    for (let sum = 0; sum < N; sum++) {
        if (sum % 5 ==0){
            console.log(sum)
        }
    }
}
