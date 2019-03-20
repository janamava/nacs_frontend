function callbackBasedString(name, callback) {
    setTimeout(function () {
        callback(`Hello ${name}`);
    }, 1000);
}

const promise = new Promise(function(resolve){
    callbackBasedString("Rodrick", resolve);
});

promisedNumber.then(resolve => console.log(resolve));