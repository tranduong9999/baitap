
//**1. `let result = “javascript” + 5;`**
//    - **Kết quả:** `"javascript5"`
//    - **Giải thích:** Trong JavaScript, khi một chuỗi được cộng với một giá trị khác (ở đây là số `5`), JavaScript sẽ chuyển số đó thành chuỗi và nối nó vào chuỗi ban đầu. Vậy nên kết quả sẽ là `"javascript5"`.

// **2. `let result = “javascript” - 1;`**
//    - **Kết quả:** `NaN` (Not-a-Number)
//    - **Giải thích:** Khi cố gắng trừ một chuỗi với một số, JavaScript không thể thực hiện phép trừ vì chuỗi không phải là giá trị số. Do đó, kết quả trả về sẽ là `NaN`, điều này có nghĩa là không phải một con số hợp lệ.

//  **3. `let result = “3” + 2;`**
//    - **Kết quả:** `"32"`
//    - **Giải thích:** Tương tự như phép cộng trong ví dụ đầu tiên, khi chuỗi `"3"` và số `2` được cộng lại, JavaScript sẽ chuyển số `2` thành chuỗi và nối chúng lại, tạo thành chuỗi `"32"`.

//  **4. `let result = “5” - 4;`**
//    - **Kết quả:** `1`
//    - **Giải thích:** Khi một chuỗi được trừ đi một số, JavaScript sẽ cố gắng chuyển chuỗi đó thành một giá trị số. Trong trường hợp này, `"5"` có thể được chuyển thành số `5`, sau đó thực hiện phép trừ với số `4`. Kết quả là `1`.

//  **5. `let result = isNaN(“123”);`**
//    - **Kết quả:** `false`
//    - **Giải thích:** Hàm `isNaN()` kiểm tra xem giá trị có phải là `NaN` (không phải là một con số hợp lệ) hay không. Vì `"123"` có thể được chuyển thành số `123`, nên kết quả là `false`, có nghĩa là `"123"` là một giá trị hợp lệ.

//  **6. `let result = isNaN(“hello”);`**
//    - **Kết quả:** `true`
//    - **Giải thích:** Hàm `isNaN()` trả về `true` khi giá trị không thể chuyển thành số. Chuỗi `"hello"` không thể chuyển thành số, vì vậy kết quả là `true`, nghĩa là `"hello"` không phải là một giá trị hợp lệ.

//  **7. `let result = Number.isNaN("123");`**
//    - **Kết quả:** `false`
//    - **Giải thích:** `Number.isNaN()` kiểm tra xem giá trị có phải là `NaN` không, và trong trường hợp này, `"123"` không phải là `NaN` (mặc dù đó là một chuỗi, nhưng có thể chuyển thành số). Kết quả là `false`.

//  **8. `let result = Number.isNaN(NaN);`**
//    - **Kết quả:** `true`
//    - **Giải thích:** `Number.isNaN()` xác định xem một giá trị có phải là `NaN` (Not-a-Number) hay không. Vì `NaN` là một giá trị đặc biệt trong JavaScript, kết quả sẽ là `true`.


