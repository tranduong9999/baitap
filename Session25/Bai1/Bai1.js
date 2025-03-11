function findMin(arr) {
    // kiem tra xem arr co phai la mang hay khong
    if(!Array.isArray(arr)) {
        console.log("du lieu ko hop le");
        
        return;
    }
    if(arr.length==0) {
        console.log("mang ko chua phan tu");

        return;
    }
    let minElement = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if(minElement > arr[i]){
            minElement = arr[i];
        }
        
    }
    return minElement;
}
findMin("abc");