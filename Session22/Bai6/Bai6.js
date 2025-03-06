let numbers = [2,5,7,4,1,8,6,2,5,7];
let input = parseInt(prompt("Moi ban nhap vao 1 so nguyen bat ki"));

if (isNaN(input)) {
    console.log("ko phai so nguyen");
} else {
    let count = 0;

    for(let i = 0; i < numbers.length; i++) {
        if (numbers[i] === input) {
            count++;
        }
    }
    console.log(`So ${input} xuat hien ${count} trong vong lap`);
    
}