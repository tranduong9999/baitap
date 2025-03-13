function isArithmeticSequence(arr) {
    if (!Array.isArray(arr) || arr.length < 2) {
        console.log("Dữ liệu không hợp lệ");
        return;
    }
    
    let difference = arr[1] - arr[0];
    for (let i = 2; i < arr.length; i++) {
        if (arr[i] - arr[i - 1] !== difference) {
            console.log(false);
            return;
        }
    }
    console.log(true);
}

isArithmeticSequence([2, 4, 6, 8]);
isArithmeticSequence([3, 6, 9, 12, 14]); 
isArithmeticSequence("abc"); 
