//5. Develop a JavaScript function that converts a numerical grade into a letter grade (A, B, C, D, F) using if-else statements.

function toGrade (score)  {
    if( score >= 80) {
        return 'A';
    } else if( score >= 60 ) {
        return 'B';
    } else if( score >= 40 ) {
        return 'C';
    } else if(score >= 20) {
        return 'D'
    } else {
        return 'F'
    }
}
