let input = prompt("Nhập ten cua ban:");
let output = input.replace(/\w/g, char => char.toUpperCase());
console.log(output);
