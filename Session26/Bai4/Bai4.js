function isPrime(num) {
    if (num < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0){
            return false;
        }
    }
    return true;
}

function filterPrimes(arr) {
    if (!Array.isArray(arr)) {
        console.log("Dữ liệu không hợp lệ");
        return;
    }
    if (arr.length === 0) {
        console.log("Mảng không có phần tử nào");
        return;
    }
    const primeNumbers = arr.filter(num => Number.isInteger(num) && isPrime(num));
    console.log(`Cac so nguyen to la: ${primeNumbers}`);
}

filterPrimes([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
filterPrimes([]);
filterPrimes("abc"); 
