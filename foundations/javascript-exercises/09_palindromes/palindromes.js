const palindromes = function (word) {
    word = word.toLowerCase()
    const regex = /[A-Za-z]/g;
    const wordArray = word.match(regex)
    return wordArray.reverse() === wordArray
};

// Do not edit below this line
module.exports = palindromes;
