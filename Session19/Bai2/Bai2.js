let input = prompt("Nhập vào một ký tự:");

if (input.length === 1 && /^[a-zA-Z]$/.test(input)) {
    console.log("Ký tự ", input , " là chữ cái");
} else {
    console.log("Ký tự " , input , " không phải chữ cái");
}