//Create a function that determines whether a given year is a leap year using if-else statements.
function isLeapYear(year){
    if (year % 4 == 0) {
        if (year % 100 == 0) {
            if (year % 400 == 0) {
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    } else {
        return false;
    }
}

console.log(isLeapYear(2020));