// problem where array of function [f1,f2,f3...fn]... that return a function
// ex-[f(x),g(x),h(x)] fn(X) = f(g(h(x)))
var compose = function (functions) {
    return function (x) {
        let result = x;

        for (let i = functions.length - 1; i >= 0; i--) {
            result = functions[i](result)
        };
        return result;
    }
}