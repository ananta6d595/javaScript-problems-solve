/*
    2.Create a function that takes an array of numbers as input and
    returns the sum of all positive numbers in the array.
 */

function sumOfPositiveNumber(num) {
    let sumfun = (pre, curr) => {
        return curr > 0 ? (pre + curr) : pre;
    };
    let result = num.reduce(sumfun, 0);
    return result;
}


