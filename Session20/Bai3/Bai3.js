let num = prompt("Moi ban nhap chuoi");
let strNum = num.toString();

let reversedStr = strNum.split('').reverse().join('');

if (num === reversedStr) {
    console.log(num," la so doi xung");
    
} else {
    console.log(num, " ko phai la so doi xung");
    
}