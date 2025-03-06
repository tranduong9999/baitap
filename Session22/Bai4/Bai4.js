let input = prompt("Moi ban nhap day so:");
let numbers = input.split("").map(Number);

if (numbers.some(isNaN)) {
    console.log("day so ko hop le");
} else {
    let maxNumber = numbers[0];
    for(let i = 0; i < numbers.length; i++) {
        if(numbers[i] > maxNumber) {
            maxNumber = numbers[i];
        }
    }

    console.log(`${maxNumber} la so lon nhat trong day so`);
    
}