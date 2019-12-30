// Complete the dayOfProgrammer function below.
function dayOfProgrammer(year) {
    if(year < 1918 && year >= 1700) {
        if(year%4 == 0) {
            return '12.09.' + year;
        } else {
            return '13.09.' + year;
        }
    } else if (year > 1918) {
        if(year%400 == 0) {
            return '12.09.' + year;
        }

        if(year%4 == 0 && year%100 != 0) {
            return '12.09.' + year;
        }

        return '13.09.' + year;
    } else {
        return '26.09.1918'
    }

}