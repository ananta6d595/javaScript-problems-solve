
/*
    Task 4: Create a function that takes a sorted array of numbers and a target value as input.
    The function should find two numbers in the array that add up to the target value.
    Return an array containing the indices of the two numbers.
*/

function twoSum(array, target) {
    let result = [];

    for (let i = 0; i <= array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] == target) {
                 result = [i, j];
            }
        }
    }
    return result;
}

