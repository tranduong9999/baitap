let day = parseInt(prompt("Moi ban nhap ngay sinh cua minh:"));
let month = parseInt(prompt("Moi ban nhap thang sinh cua minh"));
let text = " ";

if ((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
    text = "Bach Duong";
} else if ((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
    text = "Kim Nguu";
} else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
    text = "Song Tu";
} else if ((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
    text = "Cu Giai"
} else if ((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
    text = "Cu Giai"
} else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) {
    text = "Su Tu"
} else if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) {
    text = "Xu Nu"
} else if ((month == 9 && day >= 23) || (month == 10 && day <= 23)) {
    text = "Thien Binh"
} else if ((month == 10 && day >= 24) || (month == 11 && day <= 22)) {
    text = "Bo Cap"
} else if ((month == 11 && day >= 23) || (month == 12 && day <= 21)) {
    text = "Nhan Ma"
} else if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) {
    text = "Ma Ket"
} else if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) {
    text = "Bao Binh"
} else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
    text = "Song Ngu"
}
console.log(`Cung cua ban la: ${text}`);