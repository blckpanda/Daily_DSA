function repeatTaskFunction(fn, args, t) {
    fn(...args);

    const intervalId = setInterval(() => {
        fn(...args)
    }, t);
    const cancelFn = () => {
        clearInterval(intervalId);
        console.log('Interval cancelled.')
    };
    return cancelFn;
};

function printName(name) {
    console.log(`Hello ${name}`);
}
const cancelFunction = repeatTaskFunction(printName, ['saurabh'], 1000);
setTimeout(cancelFunction, 5000);