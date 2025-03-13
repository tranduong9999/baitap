function findMethod(arr) {
    if (!Array.isArray(arr)) {
        console.log("Du lieu ko hop le");
        
    }
    if (arr.length === 0) {
        console.log("Mang ko co du lieu");
        
    }
    const squaredEvenNumbers = arr.map(num => num * num).filter(num => num % 2 === 0);
    console.log(squaredEvenNumbers);
}
findMethod("abc");
findMethod([]);