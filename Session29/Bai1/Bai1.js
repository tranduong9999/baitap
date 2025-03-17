let contact = [];

function addContact(id,name,email,phone) {
    contact.push({id,name,email,phone});
    console.log("Da them vao danh sach lien he");
}

function displayContact() {
    console.log("Danh sach danh ba:");
    contact.forEach(contacts => {
        console.log(`ID: ${contacts.id}, Ten: ${contacts.name}, Email: ${contacts.email}, So dien thoai: ${contacts.phone}`);
    })
};

function searchPhone(phone) {
    let result = contact.filter(contactt => contactt.phone.toLowerCase().includes(phone.toLowerCase()));
    if (result.length > 0) {
        console.log("So dien thoai da tim thay:");
        result.forEach(contactt => console.log(`ID: ${contactt.id}, Ten: ${contactt.name}, Email: ${contactt.email}, So dien thoai: ${contactt.phone}`))
    } else {
        console.log("ko tim thay so dien thoai", phone);
    }
}

function updateContact(id,name,email,phone) {
    let contacts = contact.find(contacts => contacts.id === id);
    if (contacts) {
        contacts.name = name;
        contacts.email =email;
        contacts.phone = phone;
        console.log("Danh sach da duoc cap nhat");
    } else {
        console.log("Khong tim thay id:",id);
    }
};

function deleteId(id) {
    let index = contact.findIndex(contacts => contacts.id === id);
    if (index !== -1) {
        contact.splice(index,1);
        console.log(`Contact voi ID ${id} da duoc xoa`);
    } else {
        console.log("Ko tim thay contact voi ID:",id);
    }
}

function menu() {
    let option;
    do {
        option = parseInt(prompt(`
            Chọn chức năng:
            1. Thêm đối tượng Contact vào danh sách liên hệ.
            2. Hiển thị danh sách danh bạ.
            3. Tìm kiếm thông tin Contact theo số điện thoại.
            4. Cập nhật thông tin Contact(name, email, phone) theo id.
            5. Xóa một đối tượng Contact  khỏi danh sách danh bạ theo id.
            6. Thoát`
        ));

        switch (option) {
            case 1:
                let id = parseInt(prompt("Moi ban nhap vao id"))    ;
                let name = prompt("Moi ban nhap ten cua nguoi lien he");
                let email = prompt("Moi ban nhap vao email cua nguoi lien he");
                let phone = prompt("Moi ban nhap vao so dien thoai cua nguoi do");
                addContact(id,name,email,phone);

                break;
        
            case 2:
                displayContact();

                break;

            case 3:
                let searchPhonenumber = prompt("Nhap so dien thoai can tim");
                searchPhone(searchPhonenumber);

                break;

            case 4:
                let updateID = parseInt(prom("Nhap ID ban muon cap nhap vao lien he"));
                let updateName = prompt("Moi ban nhap vao ten ba muon cap nhap");
                let updateEmail = prompt("Moi ban nhap vao email ban muon cap nhap");
                let updatePhone = prompt("Moi ban nhap vao so dien thoai ban muon cap nhap");
                updateContact(updateID,updateEmail,updateName,updatePhone);

                break;

            case 5:
                let deleteID = parseInt(prompt("Nhap ID contact ban muon xoa:"));
                deleteId(deleteID);
                
                break;

            case 6:
                console.log("Da thoat chuong trinh");

                break;
            default:
                console.log("Lua chon ko hop le!")
                break;
        }
    } while (option !== 6);
}
menu();