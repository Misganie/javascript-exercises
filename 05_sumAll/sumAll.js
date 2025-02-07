const sumAll = function(num1, num2) {
    let sum = 0;
    if (num1 <= 0 || num2 <= 0 || Math.floor(num1) !== num1 || Math.floor(num2) !== num2) {
        return "ERROR";
    }

    else if (num1 <= num2) {
        for(let i = num1; i <= num2; i++) {
            sum += i;
        }
        return sum;
    }


    else {
        for(let i = num2; i <= num1; i++) {
            sum += i;
        }
        return sum;

    }

};
// console.log(4+5+6+7+8+9+10+11);
// console.log(sumAll(4, 11));

// Do not edit below this line
module.exports = sumAll;
