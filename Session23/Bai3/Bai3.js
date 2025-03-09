let number = [];
let n = parseInt(prompt("Moi ban nhap vao so phan tu ban muon them vao mang"));
let count = 0;

for(let i = 0; i < n; i++){
    let numbers = parseInt(prompt(`Moi ban nhap vao phan tu thu ${i+1}`));
    number.includes(numbers);
    number.push(numbers);
    if(numbers < 0) {
        count++;
        console.log(`Co ${count} so nguyen am trong mang`);
    } else {
        console.log("Ko co so nguyen am trong mang");
    }
}