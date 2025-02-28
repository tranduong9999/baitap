let amount = prompt("Nhập số tiền (VNĐ):");

let formattedAmount = Number(amount).toLocaleString("vi-VN") + " VNĐ";

console.log(formattedAmount);
alert(formattedAmount);
