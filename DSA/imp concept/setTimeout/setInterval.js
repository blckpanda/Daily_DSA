let seconds = 0;

function updateTimer() {
    console.log(`Seconds passed: ${seconds}`);
    seconds++;
}
const intervalId = setInterval(updateTimer, 1000);

setTimeout(() => {
    clearInterval(intervalId);
    console.log('Interval Stopped.');
}, 5000);
