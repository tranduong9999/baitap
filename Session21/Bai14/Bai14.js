let width = parseInt(prompt("Nhập chiều ngang:"));
let height = parseInt(prompt("Nhập chiều dọc:"));

document.write("<pre>");

for (let i = 0; i < height; i++) {
    if (i === 0 || i === height - 1) {
        document.write("*".repeat(width) + "<br>");
    } else {
        document.write("*" + " ".repeat(width - 2) + "*<br>");
    }
}

document.write("</pre>"); 
