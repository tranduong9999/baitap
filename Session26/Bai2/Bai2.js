function findLongString(arr) {
    // kiem tra xem arr co phai la mang hay khong
    if(!Array.isArray(arr)) {
        console.log("du lieu ko hop le");
        
        return;
    }
    if(arr.length==0) {
        console.log("mang ko chua phan tu");

        return;
    }
    const longNames = arr.filter((arr) => arr.length > 5);
    console.log(longNames)
}
findLongString([]);
findLongString("abc");
findLongString(["apple", "banana", "cat", "elephant", "dog"]);