const rectangle = {
    width: 10,
    height: 5,
    getArea: function () {
        return `Dien tich hinh chu nhat la: ${rectangle.width * rectangle.height}`
    }
}
console.log(rectangle.getArea())