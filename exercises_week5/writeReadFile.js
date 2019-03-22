const fs = require("fs");

const text = "I am learning how to write a file. And it works, YAY!!! Each time i run it it adds new sentences! Yahoo!";
const filename = "writtenFile.txt";

fs.writeFile(filename, text, "utf8", () => {
    fs.readFile(filename, "utf8", (error, text) => {
        if (error) throw error;
        console.log(text);
    });
});
