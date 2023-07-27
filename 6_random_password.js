/*
    Task 6: Create a program that generates a random password of a specified length.
    The password should include a mix of uppercase letters, lowercase letters, numbers,
    and special characters.
 */

function generateNumber() {

    let numbers = '2347890561';
    let randomNumber = Math.floor(Math.random() * numbers.length);
    let pickedNumber = numbers.charAt(randomNumber);

    return pickedNumber;
}
function generateSmallLetterAlphabets() {

    let smallLetterAlphabets = 'abcdefghijklmnopqrstuvwxyz';

    let randomNumber = Math.floor(Math.random() * smallLetterAlphabets.length);
    let smallLetter = smallLetterAlphabets.charAt(randomNumber);

    return smallLetter;
}
function generateCapitalLetterAlphabets() {

    let capitalLetterAlphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let randomNumber = Math.floor(Math.random() * capitalLetterAlphabets.length);
    let capitalLetter = capitalLetterAlphabets.charAt(randomNumber);

    return capitalLetter;
}
function generateSymbol() {

    let symbols = '!@#$%^&*()';
    let randomNumber = Math.floor(Math.random() * symbols.length);
    let pickedSymbols = symbols.charAt(randomNumber);

    return pickedSymbols;
}

function generatePassword(passwordLength) {
    let password = "";

    for (let i = 0; i < passwordLength; i++) {
        let randomNumber = Math.floor(Math.random() * 4) + 1;

        switch (randomNumber) {
            case 1:
                password += generateNumber();
                break;
            case 2:
                password += generateSmallLetterAlphabets();
                break;
            case 3:
                password += generateCapitalLetterAlphabets();
                break;
            case 4:
                password += generateSymbol();
                break;
            default:
                return 'password not generated';
        }
    }
    return password;
}
