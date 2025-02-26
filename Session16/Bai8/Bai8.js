let a = prompt("nhap so dau tien");
let b = prompt("nhap so thu hai");
let c = prompt("nhap so thu ba");

if (a > b  && a > c) {
    console.log("so lon nhat la", a);
} else if (b > a && b > c ) {
    console.log("so lon nhat la", b);
} else if (c > a && c > b) {
    console.log("so lon nhat la", c);
}