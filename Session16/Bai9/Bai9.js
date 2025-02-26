let input = prompt("Nhập một chuỗi:");
let output = input.replace(/\b\w/g, char => char.toUpperCase());

console.log(output);