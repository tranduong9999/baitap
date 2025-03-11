function songuyento(a) {
    if (!isNaN(a) && a < 0) {
        console.log(`du lieu khong hop le`);
        return;
    }
    if (a % 1 === 0 && a % a === 0) {
        console.log(`so ${a} la so nguyen to`);
    } else {
        console.log(`so ${a} khong phai so nguyen to`)
    }
    return;
}
songuyento("text");
songuyento("-7");
songuyento("17")
songuyento("6")