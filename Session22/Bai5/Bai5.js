let input = [9,2,6,8,5]
let sumOdd = 0;
let countEvent = 0;

for (let num of input) {
    if (num % 2 === 0) {
        sumOdd += num;
    } else {
        countEvent += num;
    }
}
console.log(`Tong cac so chan la: ${sumOdd}`);
console.log(`Tong cac so chan la: ${countEvent}`);