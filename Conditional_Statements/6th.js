//6. Implement a switch statement in JavaScript to determine the name of the day based on its number representation (1 for Monday, 2 for Tuesday, etc.).

function day (dayNo)  {
    let name = '';
    switch(dayNo) {
        case 0: {
            name = 'Sunday';
            break;
        }
        case 1: {
            name = 'Monday';
            break;
        }
        case 2: {
            name = 'Tuesday';
            break;
        }
        case 3: {
            name = 'Wednesday';
            break;
        }
        case 4: {
            name = 'Thursday';
            break;
        }
        case 5: {
            name = 'Friday';
            break;
        }
        case 6: {
            name = 'Saturday';
            break;
        }
    }
    //return name
    return name;
}
console.log(day(0))
console.log(day(1))