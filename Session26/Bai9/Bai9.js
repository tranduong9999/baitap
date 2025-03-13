function calculateSumEvenOdd(arr) {
    if (!Array.isArray(arr)) {
        console.log("Dữ liệu không hợp lệ");
        return;
    }
    if (arr.length === 0) {
        console.log("Mảng không có dữ liệu");
        return;
    }
    
    const totalEven = arr.filter(num => num % 2 === 0).reduce((sum, num) => sum + num, 0);
    const totalOdd = arr.filter(num => num % 2 !== 0).reduce((sum, num) => sum + num, 0);
    
    console.log("totalEven =", totalEven);
    console.log("totalOdd =", totalOdd);
}

calculateSumEvenOdd([1, 2, 3, 4, 5, 6, 7, 8, 9]); 
calculateSumEvenOdd([]);
calculateSumEvenOdd("abc");
