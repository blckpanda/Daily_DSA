// var kidsWithCandies = function (candies, extraCandies) {
//     let maxCandies = Math.max(...candies);

//     const result = [];
//     for (let i = 0; i < candies.length; i++) {

//         result[i] = candies[i] + extraCandies >= maxCandies
//     }
//     return result;
// };



// const candies = [2, 3, 5, 1, 3];
// const extraCandies = 3;
// const result = kidsWithCandies(candies, extraCandies);
// console.log(result);

var kidsWithCandies = function (candies, extraCandies) {
    let maxCandies = 0;
    for (let i = 0; i < candies.length; i++) {
        if (candies[i] > maxCandies) { // compare that currentKid have maxCandies or not
            maxCandies = candies[i];// if it have not than we update maxCandies.
        }
        console.log(maxCandies);
    }

    // Iterate through the candies array and modify it in place
    for (let i = 0; i < candies.length; i++) {
        candies[i] = candies[i] + extraCandies >= maxCandies;
        console.log(candies[i]);
    }

    return candies;
};
const candies = [2, 3, 5, 1, 3];
const extraCandies = 3;
const result = kidsWithCandies(candies, extraCandies);
console.log(result);
