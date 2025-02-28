let banKinh = parseFloat(prompt("Nhập bán kính đáy hình trụ (r):"));
let chieuCao = parseFloat(prompt("Nhập chiều cao hình trụ (h):"));

if (isNaN(banKinh) || isNaN(chieuCao) || banKinh <= 0 || chieuCao <= 0) {
    alert("Vui lòng nhập giá trị hợp lệ!");
} else {
    let chuViDay = 2 * Math.PI * banKinh;
    let dienTichXungQuanh = 2 * Math.PI * banKinh * chieuCao;
    let dienTichToanPhan = dienTichXungQuanh + 2 * (Math.PI * Math.pow(banKinh, 2));
    let theTich = Math.PI * Math.pow(banKinh, 2) * chieuCao;
    console.log(`Chu vi đáy: ${chuViDay.toFixed(2)}`);
    console.log(`Diện tích xung quanh: ${dienTichXungQuanh.toFixed(2)}`);
    console.log(`Diện tích toàn phần: ${dienTichToanPhan.toFixed(2)}`);
    console.log(`Thể tích hình trụ: ${theTich.toFixed(2)}`);

    alert(`Chu vi đáy: ${chuViDay.toFixed(2)}\nDiện tích xung quanh: ${dienTichXungQuanh.toFixed(2)}\nDiện tích toàn phần: ${dienTichToanPhan.toFixed(2)}\nThể tích hình trụ: ${theTich.toFixed(2)}`);
}
