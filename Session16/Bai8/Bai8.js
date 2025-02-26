let a = prompt("nhap so dau tien");
let b = prompt("nhap so thu hai");
let c = prompt("nhap so thu ba");

let max = a;

if (max > b || max > c ) {
    console.log("gia tri lon nhat la", max);
} else if (b > c) {
    console.log("gia tri lon nhat la", b);
    
} else if (c > b) {
    console.log("gia tri lon nhat la",c);
}
