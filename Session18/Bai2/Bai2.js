let math = parseFloat(prompt("nhap diem toan cua ban:"));
let literature = parseFloat(prompt("moi nhap diem van"));
let english = parseFloat(prompt("moi ban nhap diem anh"));

let trungbinh = (math + literature + english) / 3;

if (trungbinh >= 8.0) {
    console.log("Ban xep hoc luc gioi");
    
} else if (6.5 < trungbinh && trungbinh < 7.9) {
    console.log("Ban xep loai kha");
} else if (5.0 < trungbinh && trungbinh < 6.4) {
    console.log("Ban xep loai trung binh");
    
} else {
    console.log("hoc lai di yeu lam roi");
    
}