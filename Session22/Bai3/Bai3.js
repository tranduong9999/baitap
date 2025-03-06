let input = prompt("Moi ban nhap: ");

if (!/^\d+$/.test(input) ) {
    console.log("day ko hop le");
} else {
    let ons = input.split("").reverse().join("")
    console.log(ons);
    
}