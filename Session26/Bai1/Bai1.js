function findArr(arr) {
    // kiem tra xem arr co phai la mang hay khong
    if(!Array.isArray(arr)) {
        console.log("du lieu ko hop le");
        
        return;
    }
    if(arr.length==0) {
        console.log("mang ko chua phan tu");

        return;
    }
    for (let i = 0; i < 10; i++) {
        if (arr[i] >= 10) {
            console.log(`cac so lon hon 10 la: ${arr[i]}`)
        }
    }
}
findArr([]);
findArr("abc");
findArr([1,22,10,9,8]);