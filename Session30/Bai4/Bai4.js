let courses = [
    { id: 1, name: "Lập trình JavaScript", instructor: "Nguyễn Văn A", students: [] },
    { id: 2, name: "Lập trình Python", instructor: "Trần Thị B", students: [] },
    { id: 3, name: "Thiết kế web", instructor: "Lê Quang C", students: [] }
];

let users = [
    { id: 1, name: "Nguyễn Thị D", registeredCourses: [1] },
    { id: 2, name: "Trần Hoàng E", registeredCourses: [2] }
];

function addCourse(id, name, instructor) {
    courses.push({ id, name, instructor, students: [] });
    console.log(`Khóa học "${name}" đã được thêm.`);
}

function findCourseByName(name) {
    const course = courses.find(course => course.name.toLowerCase() === name.toLowerCase());
    if (course) {
        console.log(`Tìm thấy khóa học: ID: ${course.id}, Tên: ${course.name}, Giáo viên: ${course.instructor}`);
    } else {
        console.log("Không tìm thấy khóa học.");
    }
}

function deleteCourse(id) {
    const courseIndex = courses.findIndex(course => course.id === id);
    if (courseIndex !== -1) {
        const deletedCourse = courses.splice(courseIndex, 1)[0];

        users.forEach(user => {
            user.registeredCourses = user.registeredCourses.filter(courseId => courseId !== deletedCourse.id);
        });

        console.log(`Khóa học "${deletedCourse.name}" đã được xóa và tất cả người dùng đã hủy đăng ký.`);
    } else {
        console.log("Không tìm thấy khóa học để xóa.");
    }
}

function addUser(id, name) {
    users.push({ id, name, registeredCourses: [] });
    console.log(`Người dùng "${name}" đã được thêm.`);
}

function registerForCourse(userId, courseId) {
    const user = users.find(user => user.id === userId);
    const course = courses.find(course => course.id === courseId);

    if (user && course) {
        if (!user.registeredCourses.includes(courseId)) {
            user.registeredCourses.push(courseId);
            course.students.push(userId);
            console.log(`Người dùng "${user.name}" đã đăng ký khóa học "${course.name}".`);
        } else {
            console.log(`Người dùng "${user.name}" đã đăng ký khóa học "${course.name}" rồi.`);
        }
    } else {
        console.log("Người dùng hoặc khóa học không hợp lệ.");
    }
}

function unregisterFromCourse(userId, courseId) {
    const user = users.find(user => user.id === userId);
    const course = courses.find(course => course.id === courseId);

    if (user && course) {
        if (user.registeredCourses.includes(courseId)) {
            user.registeredCourses = user.registeredCourses.filter(id => id !== courseId);
            course.students = course.students.filter(id => id !== userId);
            console.log(`Người dùng "${user.name}" đã hủy đăng ký khóa học "${course.name}".`);
        } else {
            console.log(`Người dùng "${user.name}" chưa đăng ký khóa học "${course.name}".`);
        }
    } else {
        console.log("Người dùng hoặc khóa học không hợp lệ.");
    }
}

function displayUserCourses(userId) {
    const user = users.find(user => user.id === userId);
    if (user) {
        console.log(`Danh sách khóa học của người dùng "${user.name}":`);
        user.registeredCourses.forEach(courseId => {
            const course = courses.find(course => course.id === courseId);
            if (course) {
                console.log(`- ID: ${course.id}, Tên: ${course.name}, Giáo viên: ${course.instructor}`);
            }
        });
    } else {
        console.log("Người dùng không hợp lệ.");
    }
}

function menu() {
    let option;
    do {
        option = parseInt(prompt(`
            Quản lý khóa học và người dùng:
            1. Quản lý khóa học
            2. Quản lý người dùng
            3. Thoát
        `));

        switch (option) {
            case 1:
                let courseOption;
                do {
                    courseOption = parseInt(prompt(`
                        Quản lý khóa học:
                        1. Thêm khóa học
                        2. Tìm kiếm khóa học theo tên
                        3. Xóa khóa học
                        4. Quay lại
                    `));

                    switch (courseOption) {
                        case 1:
                            const id = parseInt(prompt("Nhập ID khóa học:"));
                            const name = prompt("Nhập tên khóa học:");
                            const instructor = prompt("Nhập tên giáo viên:");
                            addCourse(id, name, instructor);
                            break;
                        case 2:
                            const searchName = prompt("Nhập tên khóa học cần tìm:");
                            findCourseByName(searchName);
                            break;
                        case 3:
                            const deleteId = parseInt(prompt("Nhập ID khóa học cần xóa:"));
                            deleteCourse(deleteId);
                            break;
                        case 4:
                            break;
                        default:
                            console.log("Lựa chọn không hợp lệ.");
                    }
                } while (courseOption !== 4);
                break;
            case 2:
                let userOption;
                do {
                    userOption = parseInt(prompt(`
                        Quản lý người dùng:
                        1. Thêm người dùng
                        2. Đăng ký khóa học
                        3. Hủy đăng ký khóa học
                        4. Hiển thị danh sách khóa học của người dùng
                        5. Quay lại
                    `));

                    switch (userOption) {
                        case 1:
                            const userId = parseInt(prompt("Nhập ID người dùng:"));
                            const userName = prompt("Nhập tên người dùng:");
                            addUser(userId, userName);
                            break;
                        case 2:
                            const registerUserId = parseInt(prompt("Nhập ID người dùng muốn đăng ký:"));
                            const registerCourseId = parseInt(prompt("Nhập ID khóa học cần đăng ký:"));
                            registerForCourse(registerUserId, registerCourseId);
                            break;
                        case 3:
                            const unregisterUserId = parseInt(prompt("Nhập ID người dùng muốn hủy đăng ký:"));
                            const unregisterCourseId = parseInt(prompt("Nhập ID khóa học cần hủy đăng ký:"));
                            unregisterFromCourse(unregisterUserId, unregisterCourseId);
                            break;
                        case 4:
                            const displayUserId = parseInt(prompt("Nhập ID người dùng để xem danh sách khóa học:"));
                            displayUserCourses(displayUserId);
                            break;
                        case 5:
                            break;
                        default:
                            console.log("Lựa chọn không hợp lệ.");
                    }
                } while (userOption !== 5);
                break;
            case 3:
                console.log("Thoát chương trình.");
                break;
            default:
                console.log("Lựa chọn không hợp lệ.");
        }
    } while (option !== 3);
}

menu();
