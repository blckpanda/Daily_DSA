function reverseWords(s) {
    const trimmedString = s.trim();

    // Split the trimmed string into words using spaces as delimiters
    const words = trimmedString.split(' ');

    // Filter out any empty words
    const filteredWords = words.filter(word => word !== '');

    // Reverse the array of words and join with a single space
    return filteredWords.reverse().join(' ');
};

const inputString = "a good  example";
const reversedWords = reverseWords(inputString);
console.log(reversedWords);
