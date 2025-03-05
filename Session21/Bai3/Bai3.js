let correctPassword = "abcxyz111";
let inputPassword = prompt("Moi ban nhap mat khau: ");

if (correctPassword === inputPassword) {
    console.log(`${inputPassword} la mat khau chinh xac`);
} else {
    console.log(`${inputPassword} ko phai la mat khau chinh xac. Moi nhap lai`);
}