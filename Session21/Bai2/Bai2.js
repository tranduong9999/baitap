let sumOdd = 0;
let countEvent = 0;

for (let i = 1; i <= 5; i++) {
    let num = parseInt(prompt(`Moi ban nhap vao so nguyen ${i}:`))
    if(!isNaN(num)) {
        if(num % 2 === 0) {
            sumOdd ++;
        } else {
            countEvent ++;
        }
    }
}
console.log(`So luong so chan la: ${sumOdd}`);
console.log(`So luong so le la: ${countEvent}`);

