/*
    Task 8: Implement a JavaScript function to
    find the second smallest element in an array of numbers.
    The function should return the second smallest number.
*/



function secondSmallestNumber(numberArray) {
    var min = 99999999, secondSmallest;

    for (let i = 0; i < numberArray.length - 1; i++) {
        if (numberArray[i] < min) {
            secondSmallest = min;
            min = numberArray[i];
        }
    }
    return secondSmallest
}

