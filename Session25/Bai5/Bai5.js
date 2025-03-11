function songuyenduong(arr) {
    // Kiểm tra xem arr có phải là mảng hay không
    if (!Array.isArray(arr)) {
        console.log("Dữ liệu không hợp lệ");
        return;
    }
    if (arr.length === 0) {
        console.log("Mảng không chứa phần tử");
        return;
    }
    
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0 && Number.isInteger(arr[i])) {
            count++;
        }
    }
    console.log(`Có ${count} số nguyên dương`);
}

// Test case
songuyenduong([4, 5.4, 6, -2]);
songuyenduong([1,2,5,7,-8,6])