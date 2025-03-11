function isPalindrome(str) {
    str = str.toLowerCase().replace(/\s+/g, '');
    return str === str.split('').reverse().join('');
}

let userInput = prompt("Nhập chuỗi để kiểm tra đối xứng:");