var argumentLength = function (...args) {
    return args.length;
}

let arguArr = [5];
// let arguArr2 = {}, null, "3";

console.log(argumentLength(arguArr));
console.log(argumentLength({}, null, "3"));
