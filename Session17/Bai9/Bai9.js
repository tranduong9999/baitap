let a = parseFloat(prompt("Nhập giá trị a:"));
let b = parseFloat(prompt("Nhập giá trị b:"));
let c = parseFloat(prompt("Nhập giá trị c:"));

if (a === 0) {
    alert("Đây không phải phương trình bậc 2.");
} else {
    let delta = b * b - 4 * a * c;
    
    if (delta > 0) {
        let x1 = (-b + Math.sqrt(delta)) / (2 * a);
        let x2 = (-b - Math.sqrt(delta)) / (2 * a);
        alert(`Phương trình có hai nghiệm phân biệt:\nx1 = ${x1}\nx2 = ${x2}`);
    } else if (delta === 0) {
        let x = -b / (2 * a);
        alert(`Phương trình có nghiệm kép:\nx = ${x}`);
    } else {
        alert("Phương trình vô nghiệm.");
    }
}
