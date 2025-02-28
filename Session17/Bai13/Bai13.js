let soTienGui = parseFloat(prompt("Nhập số tiền gửi (VNĐ):"));

let soThangGui = parseInt(prompt("Nhập số tháng gửi:"));

let laiSuatThang = 4.3 / 100 / 12;

let tienLai = soTienGui * laiSuatThang * soThangGui;

console.log(`Số tiền lãi sau ${soThangGui} tháng là: ${tienLai.toLocaleString()} VNĐ`);
alert(`Số tiền lãi sau ${soThangGui} tháng là: ${tienLai.toLocaleString()} VNĐ`);
