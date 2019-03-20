function callbackBasedString(name, callback) {
    setTimeout(function () {
        callback(`Hello ${name}`);
    }, 1000);
}

callbackBasedString("Rodrick", function (string) {
    console.log(string);
});