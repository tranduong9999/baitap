let n = parseInt(prompt("Nhập vào một số:"));

let sqrtN = Math.sqrt(n);
let result = (sqrtN === Math.floor(sqrtN)) ? `${n} là số chính phương` : `${n} không phải số chính phương`;

alert(result);
