function largestNumberFromDigits(num) {
    if (typeof num !== 'number' || num < 0 || !Number.isInteger(num)) {
        console.log("Dữ liệu không hợp lệ");
        return;
    }
    
    let largestNum = parseInt(num.toString().split('').sort((a, b) => b - a).join(''));
    console.log(largestNum);
}

largestNumberFromDigits(2941); 
largestNumberFromDigits(3875); 
largestNumberFromDigits("1h8t"); 
