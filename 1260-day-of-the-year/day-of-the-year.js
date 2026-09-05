/**
 * @param {string} date
 * @return {number}
 */



var dayOfYear = function(date) {
    const resul = date.split("-").map(Number);

    let year = resul[0];
    let result = resul[2];
    let m = resul[1];

    for (let k = 1; k < m; k++) {

        if (k == 2) {
            if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
                result += 29;
            } else {
                result += 28;
            }
        }
        else if (k == 1 || k == 3 || k == 5 || k == 7 || k == 8 || k == 10) {
            result += 31;
        }
        else {
            result += 30;
        }
    }

    return result;
};




