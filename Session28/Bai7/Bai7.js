let students = [

    { name: "Trần Trí Dương", scores: { math: 9, english: 8, literature: 7 } },

    { name: "Hà Bích Ngọc", scores: { math: 3, english: 2, literature: 5 } },

    { name: "Bùi Thái Sơn", scores: { math: 9.5, english: 9, literature: 9 } }

];

function average(students) {
    return students.filter(student => {
        const scores = student.scores;
        const average = (scores.math + scores.english + scores.literature) / 3;
        return average >= 8;
    });
}
const result = average(students);
console.log(result)