//
function area (shape, sides)  {
    //assume that sides is an array
    switch(shape) {
        case 'Circle': {
            //assume that sides is [r] where r is the radius
            return Math.PI * sides[0] * sides[0];
        }
        case 'Square': {
            //assume that sides is [a] where a is the side of the square
            return sides[0] * sides[0]
        }
        case 'Triangle': {
            //assume that sides is [a, b, c] where a, b, c are three sides
            //use Heron's formula 
            let a = sides[0];
            let b = sides[1];
            let c = sides[2];
            let s = (a + b + c) / 2
            return Math.sqrt(s * (s - a) * (s - b) * (s - c))
        }
    }
}