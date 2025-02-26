let num1 = parseFloat(prompt("Nhập số thứ nhất:"));
let num2 = parseFloat(prompt("Nhập số thứ hai:"));
let randomNumber = Math.random() * (num2 - num1 ) + num1;
alert(randomNumber);
