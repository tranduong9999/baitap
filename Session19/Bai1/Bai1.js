let month = parseInt(prompt("Moi ban nhap so thang:"));

switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log("Thang " , month , "co 31 ngay");
        
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        console.log("Thang ", month , " co 30 ngay");
        
        break;
    case 2:
        let year = parseInt(prompt("Moi ban nhap so nam"));

        if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
            console.log("Thang ", month , "co 29 ngay vi la nam nhuan");
        } else {
            console.log("Thang", month , "co 28 ngay ");
        }

        break;
    default:
        console.log("Thang ko hop le");
        
        break;
}