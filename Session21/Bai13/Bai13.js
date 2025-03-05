let a = 7;
for (let i = 1; i <= a; i++) {
    console.log("*".repeat(i));
}

let b = 7;
for (let i = b; i >= 1; i--) {
    console.log("*".repeat(i));
}

let c = 7;
for (let i = 1; i <= c; i++) {
    console.log(" ".repeat(c - i) + "*".repeat(i));
}

let d = 7;
for (let i = d; i >= 1; i--) {
    console.log(" ".repeat(d - i) + "*".repeat(i));
}
