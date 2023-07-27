/*
    Task 1 : Create a function that takes a string as input and returns the reversed version of the string
    without using the built-in reverse() method.
*/


let reverseString = function (str) {

    let arr = str.split('');
    for (let left = 0, right = arr.length - 1; left < right; left++, right--) {
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
    }

    return arr.join('');
};



















// Note for me:  strings are immutable so without splitting the string it won't be possible to change the string.