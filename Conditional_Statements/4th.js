//
function triangleType  (a, b, c) {
    if( a == b && b == c) {
        return 'Equilateral'
    } else if( a == b || b == c || c == a) {
            return 'Isosceles'
    } else {
        return 'Scalene'
    }
}

console.log(triangleType(3, 3, 3))