let time24 = prompt("Nhập thời gian theo định dạng 24 giờ (HH:MM:SS): "); 
let parts = time24.split(':');
let hour = parseInt(parts[0]);
let minute = parts[1];
let second = parts[2];
let period = hour >= 12 ? 'PM' : 'AM';
if (hour === 0) {
    hour = 12;
} else if (hour > 12) {
    hour -= 12; 
}

let hourFormatted = (hour < 10 ? '0' : '') + hour;
let time12 = hourFormatted + ':' + minute + ':' + second + ' ' + period;

console.log("Thời gian định dạng 12 giờ: " + time12);
alert("Thời gian định dạng 12 giờ: " + time12);
