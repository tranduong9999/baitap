let amount = parseInt(prompt("Moi ban nhap vao so tien can rut"));

if (amount % 1000 !== 0 || amount <= 0) {
    console.log("Moi ban nhap lai so tien");
} else {
    let cash = [500000, 200000, 100000, 50000, 20000, 10000, 5000, 2000, 1000];
    for(let i = 0; i < cash.length; i++) {
        let count = Math.floor(amount / cash[i]);
        if (count > 0) {
            console.log(cash[i].toLocaleString(), " - " , count, " to");;
            amount -= count * cash;
        }
    }
}
