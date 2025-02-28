let date1 = prompt("Nhập ngày thứ nhất (YYYY-MM-DD):");
let date2 = prompt("Nhập ngày thứ hai (YYYY-MM-DD):");

let firstDate = new Date(date1);
let secondDate = new Date(date2);

if (isNaN(firstDate) || isNaN(secondDate)) {
    alert("Ngày nhập vào không hợp lệ. Vui lòng nhập đúng định dạng YYYY-MM-DD.");
} else {
    let timeDiff = Math.abs(secondDate - firstDate); 
    let dayDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    alert(`Độ lệch là ${dayDiff} ngày`);
}
