for (let num = 100; num <= 999; num++) {
    let hundred = Math.floor(num / 100);
    let teens = Math.floor((num % 10) / 10);
    let ones = num % 10;

    let result = hundred ** 3 + teens ** 3 + ones ** 3;
    if (result === num) {
        console.log(num);
    }
}