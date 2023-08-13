function mergeStrings(word1, word2) {
    let merged = '';
    let i = 0;
    let j = 0;

    while (i < word1.length || j < word2.length) {
        if (i < word1.length) {
            merged += word1[i];
            console.log(i);
            i++;
        }
        if (j < word2.length) {
            merged += word2[j];
            console.log(j);
            j++;
        }
    }

    return merged;
}

const word1 = "abc";
const word2 = "pqr";
const mergedSt = mergeStrings(word1, word2);
console.log(mergedSt); // Output: "apbqcr"

