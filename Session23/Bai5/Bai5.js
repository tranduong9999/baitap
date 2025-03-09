let n = parseInt(prompt("Nhập số phần tử của mảng:"));

if (n < 0) {
    console.log("Số lượng phần tử không được âm")
} else if (n === 0) {
    console.log("Mảng không có phần tử");
} else {
    let arr = [], sum = 0, hasNumber = false;

    for (let i = 0; i < n; i++) {
        let char = prompt(`Nhập phần tử thứ ${i + 1}:`);
        arr.push(char);
        if (!isNaN(char) && char.trim() !== "") {
            sum += parseFloat(char);
            hasNumber = true;
        }
    }

    console.log(`Mảng đã nhập: ${arr}`);
    
    if (hasNumber) {
        console.log(`Tổng các số trong mảng: ${sum}`);
    } else {
        console.log("Không có phần tử nào là số");
    }
}
