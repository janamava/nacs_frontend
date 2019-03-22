const fs = require("fs");

const text = "This file is going to be written with the promise based wrapper";
const filename = "wrappedInPromise.txt";


const writeWrapperPromise = function () {
    return new Promise(resolve => {
        fs.writeFile(filename, text, "utf8", resolve);
    });
}

const readWrapperPromise = function () {
    return new Promise(resolve => {
        fs.readFile(filename, "utf8", (error, text) => {
            if(error) throw error;
            resolve(text);
        });
    });
}

const wrapAll = function () {
    writeWrapperPromise()
        .then(() => readWrapperPromise())
        .then(text => console.log(text));
}

wrapAll();


