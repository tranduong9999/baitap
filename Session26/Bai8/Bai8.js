function findOddPrimes(arr) {
    if (!Array.isArray(arr)) {
        console.log("Dữ liệu không hợp lệ");
        return;
    }
    if (arr.length === 0) {
        console.log("Mảng không có dữ liệu");
        return;
    }
    
    function isPrime(num) {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }
    
    const oddPrimes = arr.filter(num => isPrime(num) && num % 2 !== 0);
    console.log(oddPrimes);
}

findOddPrimes([10, 2, 3, 5, 7, 9]); 
findOddPrimes([]);
findOddPrimes("abc");