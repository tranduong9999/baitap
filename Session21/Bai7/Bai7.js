let money = parseFloat(prompt("Nhap so tien ban dau:"));
let rate = parseFloat(prompt("Nhap lai suat:"));
let month = parseInt(prompt("Nhap so thang gui:"));

if (money > 0 && rate > 0 && month > 0) {
    let total = (money * rate) / (12 * month);
    console.log("So tien lai la:", total.toFixed(3));
    console.log("So tien nhan duoc la:", (total + money));
} else {
    console.log("Du lieu nhap vao ko hop le");
    
}