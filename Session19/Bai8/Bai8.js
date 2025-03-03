let reason = parseInt(prompt("Moi ban nhap vao 1 thang bat ki"));
switch (reason) {
    case 1:
    case 2:
    case 3:
        console.log("Mua xuan");
    
        break;

    case 4:
    case 5:
    case 6:
        console.log("Mua ha");

        break;
    
    case 7:
    case 8:
    case 9:
        console.log("Mua thu");
        
        break;

    case 10:
    case 11:
    case 12:
        console.log("Mua dong");
        
        break;

    default:
        console.log("Nhap lai dung thang");
        
        break;
}