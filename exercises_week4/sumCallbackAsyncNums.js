function callbackBasedNumber(callback) {
    setTimeout(() => {
        callback(1);
    }, 1000);
}

async function asyncBasedNumber() {
    const number = await new Promise(function (resolve) {
        setTimeout(function () {
            resolve(5);
        }, 3000);
    });
    return number;
}

asyncBasedNumber().then(function(asyncNumber){
    callbackBasedNumber(function (callbackNumber) {
        const total = asyncNumber + callbackNumber;
        console.log(total);
        return total;
    });
});