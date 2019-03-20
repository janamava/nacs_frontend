const promise = new Promise(function (resolve) {
    resolve(1);
});

promise.then(function (number) {
    console.log(number);
});