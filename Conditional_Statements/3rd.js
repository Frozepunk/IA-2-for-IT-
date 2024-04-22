//3. Implement a JavaScript function that calculates the grade of a student based on their score using if-else statements.
    
    function grade( score ){
    if( score >= 80) {
        return 'A';
    } else if( score >= 60 ) {
        return 'B';
    } else if( score >= 40 ) {
        return 'C';
    } else {
        return 'D'
    }
}