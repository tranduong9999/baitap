function findMaxandPosition(arr) {
    if (!Array.isArray(arr)) {
        console.log("Du lieu ko hop le");
        
        return;
    }
    if (arr.length==0) {
        console.log("Mang ko co du lieu");
        
        return;
    }
    let max = arr[0];
    let position = 0;
    arr.forEach((num,index) => {
        if(num > max) {
            max = num;
            position = index;
        }
    });
    console.log(`max= ${max}`);
    console.log(`position= ${position}`);
    
}

findMaxandPosition("abc")
findMaxandPosition([])
findMaxandPosition([10, 9, 5, 11, 24, 5])