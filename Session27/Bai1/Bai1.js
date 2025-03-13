function sum(a,b){
    return a+b;
}
function minus(a,b) {
    return a-b;
}
function multi(a,b) {
    return a*b;
}
function divide(a,b) {
    return a/b;
}
let choice;

do {
    let firstNumber = parseInt(prompt("Moi ban nhap vao so thu 1"));;
    let secondNumber = parseInt(prompt("Moi ban nhap vao so thu 2"));

    choice = parseInt(prompt(
        "================== MENU ===================\n" +
        "1. Cộng hai số.\n" +
        "2. Trừ hai số.\n" +
        "3. Nhân hai số.\n" +
        "4. Chia hai số.\n" +
        "5. Thoát.\n" +
        "============================================\n" +
        "Lựa chọn của bạn:"
    ));
    switch (choice) {
        case 1:
            console.log("Tong 2 so la:", sum(firstNumber,secondNumber));

            break;
    
        case 2:
            console.log(`Hieu 2 so la: ${minus(firstNumber,secondNumber)}`)

            break;

        case 3:
            console.log(`Tich 2 so la: ${multi(firstNumber,secondNumber)}`);

            break;

        case 4:
            if (secondNumber === 0) {
                console.log(`so chia phai khac 0`);
            } else {
                console.log(`Thuong 2 so la: ${divide(firstNumber,secondNumber)}`)
            }
        default:
            break;
    }
} while (choice !== 5);