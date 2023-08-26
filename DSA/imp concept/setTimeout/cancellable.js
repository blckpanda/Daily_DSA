
const cancellable = function (fn, args, t) {
    fn(...args);
    const timer = setInterval(() => fn(...args), t);

    const cancelFn = () => clearInterval(timer);
    return cancelFn;
}
function printM(message) {
    console.log(message);  // this is the context of the caller
}

const t = 1000;

const cancelFunction = cancellable(printM, ['hello world!!'], t);
setTimeout(cancelFunction, 5000);