let books = [
    { id: 1, title: "JavaScript for Beginners", author: "John Doe", year: 2020, price: 200, isAvailable: true },
    { id: 2, title: "Learning Python", author: "Jane Smith", year: 2019, price: 250, isAvailable: false },
    { id: 3, title: "Advanced HTML & CSS", author: "Mark Brown", year: 2018, price: 150, isAvailable: true }
];

function addBook(id, title, author, year, price, isAvailable) {
    books.push({ id, title, author, year, price, isAvailable });
    console.log("Sách đã được thêm.");
}

function displayBooks() {
    console.log("Danh sách sách trong thư viện:");
    books.forEach(book => {
        console.log(`ID: ${book.id}, Tiêu đề: ${book.title}, Tác giả: ${book.author}, Năm xuất bản: ${book.year}, Giá: ${book.price}, Trạng thái: ${book.isAvailable ? "Có sẵn" : "Đã mượn"}`);
    });
}

function searchBookByTitle(title) {
    const result = books.filter(book => book.title.toLowerCase().includes(title.toLowerCase()));
    if (result.length > 0) {
        console.log("Sách tìm thấy:");
        result.forEach(book => console.log(`ID: ${book.id}, Tiêu đề: ${book.title}, Tác giả: ${book.author}, Năm xuất bản: ${book.year}, Giá: ${book.price}, Trạng thái: ${book.isAvailable ? "Có sẵn" : "Đã mượn"}`));
    } else {
        console.log("Không tìm thấy sách với tiêu đề: " + title);
    }
}

function updateBookStatus(id, isAvailable) {
    const book = books.find(book => book.id === id);
    if (book) {
        book.isAvailable = isAvailable;
        console.log(`Trạng thái sách "${book.title}" đã được cập nhật.`);
    } else {
        console.log("Không tìm thấy sách với ID: " + id);
    }
}

function deleteBookById(id) {
    const index = books.findIndex(book => book.id === id);
    if (index !== -1) {
        books.splice(index, 1);
        console.log(`Sách với ID ${id} đã được xóa.`);
    } else {
        console.log("Không tìm thấy sách với ID: " + id);
    }
}

function sortBooksByPrice() {
    books.sort((a, b) => a.price - b.price);
    console.log("Danh sách sách đã được sắp xếp theo giá.");
}

function menu() {
    let option;
    do {
        option = parseInt(prompt(`
            Chọn chức năng:
            1. Thêm sách mới
            2. Hiển thị danh sách sách
            3. Tìm kiếm sách theo tiêu đề
            4. Cập nhật trạng thái mượn/trả sách theo id
            5. Xóa sách theo id
            6. Sắp xếp sách theo giá tăng dần
            7. Thoát
        `));

        switch (option) {
            case 1:
                const id = parseInt(prompt("Nhập mã sách (id):"));
                const title = prompt("Nhập tiêu đề sách:");
                const author = prompt("Nhập tác giả sách:");
                const year = parseInt(prompt("Nhập năm xuất bản sách:"));
                const price = parseFloat(prompt("Nhập giá sách:"));
                const isAvailable = prompt("Sách có sẵn không? (true/false):") === 'true';
                addBook(id, title, author, year, price, isAvailable);
                break;
            case 2:
                displayBooks();
                break;
            case 3:
                const searchTitle = prompt("Nhập tiêu đề sách cần tìm:");
                searchBookByTitle(searchTitle);
                break;
            case 4:
                const updateId = parseInt(prompt("Nhập id sách muốn cập nhật trạng thái:"));
                const status = prompt("Nhập trạng thái sách (true: có sẵn, false: đã mượn):") === 'true';
                updateBookStatus(updateId, status);
                break;
            case 5:
                const deleteId = parseInt(prompt("Nhập id sách muốn xóa:"));
                deleteBookById(deleteId);
                break;
            case 6:
                sortBooksByPrice();
                displayBooks();
                break;
            case 7:
                console.log("Thoát chương trình.");
                break;
            default:
                console.log("Lựa chọn không hợp lệ.");
        }
    } while (option !== 7);
}

menu();
