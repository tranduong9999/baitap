let sumOdd = 0;

for (let i = 1; i <= 5; i++) {
    let num = parseInt(prompt(`Nhập số nguyên thứ ${i}:`));

    if (!isNaN(num) && num % 2 !== 0) {
        sumOdd += num;
    }
}

console.log("Tổng các số lẻ là :", sumOdd);