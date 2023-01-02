// 1
const testPromise = nr => {
    return new Promise((resolve, reject) => {
        if (nr === 4) {
            reject("Failed!");
        } else {
            resolve("Passed!");
        }
    });
};


testPromise(1).then(value => {
    console.log("I have... ", value);
    return testPromise(4);
}).then(value => {
    console.log("Now I have... ", value);
}).catch(error => {
    console.log("There's been an error :( ", error);
});


// 2
const promiseOne = new Promise(resolve => {
    setTimeout(() => resolve('Done'), 1000);
});

console.log(promiseOne);
promiseOne.then((result => {
    console.log(result);
    return promiseOne;
})).finally(() => console.log(promiseOne));

Promise.resolve('test')
    .then(val => console.log(val))
    .then(() => {
            console.log('nothing');
            throw new Error('Bogdi was here!');
    })
    .then(() => {console.log('fulfilled')}, () => {console.log('rejected')})
    .then(() => {console.log('second fulfilled')}, () => {console.log('second rejected')});
