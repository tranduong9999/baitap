let a = parseInt(prompt("Moi ban nhap vao 1 so nguyen"));
let isPrime = a > 0;

for(let i = 0; i < a; i++) {
    if(a % i === 0) {
        isPrime = false;
        break;
    }
}
console.log(isPrime ? a + " là số nguyên tố" : a + " không phải là số nguyên tố");
