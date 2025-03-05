let number = parseInt(prompt("Moi ban nhap vao 1 so nguyen bat ki"));

for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
        console.log(`So ${i} la uoc cua ${number}`);
    }
}