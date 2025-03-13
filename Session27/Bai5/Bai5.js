function splitArray(arr, n) {
    if (!Array.isArray(arr) || typeof n != 'number' || n <= 0) {
        console.log("Du lieu ko hop le");
        return;
    }
    if (arr.length === 0) {
        console.log("Mang ko co du lieu");
        return;
    }

    let result = [];
    for (let i = 0; i < arr.length; i+= n) {
        result.push(arr.slice(i, i + n));
        
    }
    console.log(result);
}

splitArray([1, 2, 3, 4, 5, 6, 7, 8], 3); 
splitArray([1, 2, 3, 4, 5, 6, 7, 8], 2); 
splitArray("abc", 3);