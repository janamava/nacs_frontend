const fs = require("fs");

const text = "This file is going to be written with the async await based wrapper";
const filename = "wrappedInAsyncAwait.txt";


const writeWrapperPromise = function () {
    return new Promise(resolve => {
        fs.writeFile(filename, text, "utf8", resolve);
    });
}

const readWrapperPromise = function () {
    return new Promise(resolve => {
        fs.readFile(filename, "utf8", (error, text) => {
            if (error) throw error;
            resolve(text);
        });
    });
}

const wrapAll = async function () {
    await writeWrapperPromise();
    console.log(await readWrapperPromise());
}

wrapAll();