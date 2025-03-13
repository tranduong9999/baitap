function sortEvenNumbers(arr) {
    if (!Array.isArray(arr)) {
        console.log("Dữ liệu không hợp lệ");
        return;
    }
    
    let evenNumbers = arr.filter(num => num % 2 === 0).sort((a, b) => a - b);
    let evenIndex = 0;
    
    let sortedArray = arr.map(num => (num % 2 === 0 ? evenNumbers[evenIndex++] : num));
    
    console.log(sortedArray);
}

sortEvenNumbers([5, 8, 6, 3, 4, 2, 7]); 
sortEvenNumbers([5, 9, 6, 4, 1, 8, 3]); 
sortEvenNumbers("abc"); 
