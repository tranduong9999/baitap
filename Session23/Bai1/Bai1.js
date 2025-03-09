let number = [];
let count = 0;

for (let i = 0; i < 10; i++) {
    let num = parseInt(prompt(`Moi ban nhap vao so nguyen thu ${i + 1}`));
    number.push(num)
    if(num >= 10) {
        count++;
    }
}
console.log(`Co ${count} so lon hon 10`);