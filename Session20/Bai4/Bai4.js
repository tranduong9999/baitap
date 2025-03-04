let str = prompt("Moi ban nhap vao 1 chuoi");
let search = prompt("Moi ban nhap vao tu can tim kiem");

let found = false;

let words = str.split(" ")

for (let i = 0; i < str.length; i++) {
    if (words[i] === search) {
        found = true;
        break;
    }
}

if (found) {
    console.log("Ton tai tu can tim kiem");
    
} else {
    console.log("Ko ton tai tu can tim kiem");
    
}