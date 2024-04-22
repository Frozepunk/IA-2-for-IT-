//7. Write a program that categorizes a given month into seasons (spring, summer, autumn, winter) using switch statements.

function season ( month )  {
    let name = '';
    switch(month) {
        case 'January': {
            name = 'Winter';
            break;
        }
        case 'February': {
            name = 'Spring';
            break;
        }
        case 'March': {
            name = 'Spring';
            break;
        }
        case 'April': {
            name = 'Summer';
            break;
        }
        case 'May': {
            name = 'Summer';
            break;
        }
        case 'June': {
            name = 'Summer';
            break;
        }
        case 'July': {
            name = 'Autumn';
            break;
        }
        case 'August': {
            name = 'Autumn';
            break;
        }
        case 'September': {
            name = 'Autumn';
            break;
        }
        case 'October': {
            name = 'Autumn';
            break;
        }
        case 'November': {
            name = 'Winter';
            break;
        }
        case 'December': {
            name = 'Winter';
            break;
        }
    }
    return name;
}
