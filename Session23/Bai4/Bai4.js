let n = parseInt(prompt("Nhập số phần tử của mảng:"));
let arr = [], digits = [];

for (let i = 0; i < n; i++) {
    let char = prompt(`Nhập ký tự thứ ${i + 1}:`);
    arr.push(char);
    if (!isNaN(char) && char.trim()) digits.push(char);
}

console.log(`Mảng đã nhập: ${arr}`);
console.log(digits.length ? `Ký tự số trong mảng: ${digits.join(" ")}` : "Không có ký tự số");
