function convertVNDToUSD(vnd) {
    const rate = 23000;
    return vnd / rate;
}

function convertUSDToVND(usd) {
    const rate = 23000; 
    return usd * rate;
}

let currency = prompt("Nhập loại tiền (VND-->USD hoặc USD-->VND):");
let amount = parseFloat(prompt("Nhập số tiền:"));

if (currency === "VND-->USD") {
    let result = convertVNDToUSD(amount);
    console.log(amount + " VND = " + result.toFixed(2) + " USD");
} else if (currency === "USD-->VND") {
    let result = convertUSDToVND(amount);
    console.log(amount + " USD = " + result.toFixed(0) + " VND");
} else {
    console.log("Loại tiền không hợp lệ");
}
