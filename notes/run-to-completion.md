# Run to completion
JavaScript has so-called run-to-completion semantics: The current task is always finished before the next task is executed. That means that each task has complete control over all current state and doesn’t have to worry about concurrent modification.

Let’s look at an example:
```javascript
setTimeout(function () { // (A)
    console.log('Second');
}, 0);
console.log('First'); // (B)
```

The function starting in line A is added to the task queue immediately, but only executed after the current piece of code is done (in particular line B!). That means that this code’s output will always be:
```
First
Second
```


## References https://exploringjs.com/es6/ch_async.html