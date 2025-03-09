let n = parseInt(prompt("Nhập số lượng phần tử của mảng:"));

if (n < 0){
    console.log("Số lượng phần tử không được nhỏ hơn 0");
} else if (n === 0) {
    console.log("Mảng không có phần tử nào");
} else {
    let arr = [];
    for (let i = 0; i < n; i++) arr.push(parseInt(prompt(`Nhập phần tử thứ ${i + 1}:`)));

    let max = -Infinity, secondMax = -Infinity;
    for (let num of arr) {
        if (num > max) {
            secondMax = max;
            max = num;
        } else if (num > secondMax && num < max) {
            secondMax = num;
        }
    }

    console.log(secondMax === -Infinity ? "Không có số lớn thứ hai" : `Số lớn thứ hai là: ${secondMax}`);
}


