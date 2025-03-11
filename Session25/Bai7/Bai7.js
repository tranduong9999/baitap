function capitalizeWords(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
}

let userInput = prompt("Nhập chuỗi:");
console.log("Chuỗi sau khi viết hoa chữ cái đầu mỗi từ: " + capitalizeWords(userInput));
