
function callbackBased(callback) {
    setTimeout(function () {
        callback(1)
    }, 1000);
}

callbackBased(function (number) {
    console.log(number);
});