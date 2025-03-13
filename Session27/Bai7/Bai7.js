function findMissingNumber(arr) {
    if (!Array.isArray(arr) || arr.length < 2) {
        console.log("Dữ liệu không hợp lệ");
        return;
    }
    
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i + 1] !== arr[i] + 1) {
            console.log(arr[i] + 1);
            return;
        }
    }
    console.log("Không có số bị thiếu");
}

findMissingNumber([1, 2, 3, 5]); 
findMissingNumber([1, 2, 4, 5]);
findMissingNumber("abc"); 
