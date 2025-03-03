let a = parseFloat(prompt("Nhập giá trị a:"));
let b = parseFloat(prompt("Nhập giá trị b:"));
let c = parseFloat(prompt("Nhập giá trị c:"));

if (a > b && a > c) {
    console.log(a,"la so lon nhat");
    
} else if (b > a && b>c) {
    console.log(b, "la so lon nhat");
} else if (c>a && c>b) {
    console.log(c, "la so lon nhat");
} else {
    console.log("so ko hop le");
    
}