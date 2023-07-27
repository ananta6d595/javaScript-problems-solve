/*
    Write a JavaScript program to find the most frequent element in an array and return it.
*/

function mostFrequentElement(numberList) {


    let countObj = new Map();
    let maxCount = 0, mostFrequentNumber;

    for (let i = 0; i < numberList.length; i++) {

        let count = countObj.get(numberList[i]) === undefined ? 0 : countObj.get(numberList[i]);
        count++;
        countObj.set(numberList[i], count);
    }

    for (let [key, value] of countObj) {
        if (value > maxCount) {
            maxCount = value;
            mostFrequentNumber = key;
        }
    }

    return mostFrequentNumber;
}

