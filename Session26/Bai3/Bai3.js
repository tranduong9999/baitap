function findCorrectEmail(param) {
    // kiem tra xem arr co phai la mang hay khong
    if(!Array.isArray(param)) {
        console.log("du lieu ko hop le");
        
        return;
    }
    if(param.length==0) {
        console.log("mang ko chua phan tu");

        return;
    }
    const correctEmail = param.filter(param => param.includes("@") && !param.includes(" "))
    console.log(`Tai khoan email hop le la: ${correctEmail}`)
}
findCorrectEmail([]);
findCorrectEmail("abc");
findCorrectEmail(["john.doe@gmail.com", "invalidemail.com", "hello@domain.net", "space@out.com"]);

