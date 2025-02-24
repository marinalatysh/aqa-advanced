function getRectangleArea1(width, height) {
    return width * height;
}

console.log(getRectangleArea1(2, 6)); // 50


const getRectangleArea2 = function(width, height) {
    return width * height;
};

console.log(getRectangleArea2(3, 5)); // 50


const getRectangleArea3 = (width, height) => width * height;

console.log(getRectangleArea3(4, 8)); // 50
