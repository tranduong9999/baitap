let a = parseFloat(prompt("moi ban nhap canh 1 cua tam giac"));
let b = parseFloat(prompt("moi ban nhap canh 2 cua tam giac"));
let c = parseFloat(prompt("moi ban nhap canh 3 cua tam giac"));

if (a*a==b*b+c*c || b*b==a*a+c*c || c*c==a*a+b*b) {
    console.log("day la tam giac vuong");
} else if (a == b && b == c ){
    console.log("day la tam giac deu");
} else if (a==b || a==c || b==c) {
    console.log("day la tam giac can");
} else if (a, b, c === 0) {
    console.log("Day la tam giac thuong");
}