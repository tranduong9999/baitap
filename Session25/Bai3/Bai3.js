function sochan(arr) {
    if (!Array.isArray(arr)) {
        console.log("Dữ liệu không hợp lệ");
        return;
    }
    if (arr.length === 0) {
        console.log("Mảng không chứa phần tử");
        return;
    }
    let elements = [];
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number' && arr[i] % 2 === 0) {
            elements.push(arr[i]);
        }
    }
    if (elements.length > 0) {
        console.log(`Các số chẵn trong mảng: ${elements.join(", ")}`);
    } else {
        console.log("Mảng không chứa số chẵn");
    }
}

// Test case
sochan([11, 4, 65, 6]);
sochan([1, 3, 5, 17]);
