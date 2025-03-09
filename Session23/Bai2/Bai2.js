let number = [];

for(let i = 0; i < 10; i++) {
    let num;
    do {
        num = parseInt(prompt(`Moi ban nhap vao so nguyen ${i + 1}`));
    } while (number.includes(num));
    number.push(num)
}
console.log(number);
let maxNumber = number[0];
let maxIndex = 0;

for (let i = 1; i < number.length; i++) {
    if(number[i] > maxNumber) {
        maxNumber = number[i];
        maxIndex = i + 1;
    }
}
console.log(`So lon nhat trong mang la ${maxNumber} va vi tri cua no la dung thu ${maxIndex}`);


