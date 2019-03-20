const fs = require('fs');

//write the file

const data = new Uint8Array(Buffer.from('Every wall is a door. Ralph Waldo Emerson'));

fs.writeFile("/home/jucha/nacs_frontend/exercises_week5/file", data, (error) => {
    if (error) throw error;
    console.log('The file has been saved!');
});


//read the file

fs.readFile("/home/jucha/nacs_frontend/exercises_week5/file", "utf8", (error, data) => {
    if (error) console.log(error.message);
        console.log(data)
});