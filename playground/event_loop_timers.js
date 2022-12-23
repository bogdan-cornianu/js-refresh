/**
 * Small program to see that when using timers, the callback will be executed
 * as soon as possible after the set treshold.
 * In this example, the time after which the callback gets execute varies from
 * 102ms to 109ms.
 */

const fs = require('fs');

function readFromFile(callback) {
    fs.readFile('../notes/event loop.md', callback);
}

const timeoutScheduled = Date.now();

setTimeout(() => {
    const delay = Date.now() - timeoutScheduled;

    console.log(`${delay}ms have passed since I was scheduled`);
}, 100);

readFromFile(() => {
    const startCallback = Date.now();

    while (Date.now() - startCallback < 10) {
        // do nothing
    }
});
