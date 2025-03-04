let a = parseInt(prompt("Moi ban nhap vao so nguyen a"));
let b = parseInt(prompt("Moi ban nhap vao so mu b"));

if (isNaN(a) || isNaN(b)) {
    console.log("ko phai so hop le");
} else {
    if (b > 0) {
        let result = 1;
        for (let i = 0; i < b ; i++){
            result *= a;
        }
        console.log(result);
        
    } else {
        console.log("ko ho tro so mu am");
    }
}