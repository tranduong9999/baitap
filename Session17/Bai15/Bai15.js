let banKinh = parseFloat(prompt("Nhập bán kính của hình cầu (r):"));

if (isNaN(banKinh) || banKinh <= 0) {
    alert("Vui lòng nhập bán kính hợp lệ!");
} else {
    let theTich = (4 / 3) * Math.PI * Math.pow(banKinh, 3);
    let dienTichBeMat = 4 * Math.PI * Math.pow(banKinh, 2);
    let chuViLonNhat = 2 * Math.PI * banKinh;

    console.log(`Thể tích hình cầu: ${theTich.toFixed(2)}`);
    console.log(`Diện tích bề mặt: ${dienTichBeMat.toFixed(2)}`);
    console.log(`Chu vi lớn nhất: ${chuViLonNhat.toFixed(2)}`);

    alert(`Thể tích hình cầu: ${theTich.toFixed(2)}\nDiện tích bề mặt: ${dienTichBeMat.toFixed(2)}\nChu vi lớn nhất: ${chuViLonNhat.toFixed(2)}`);
}
