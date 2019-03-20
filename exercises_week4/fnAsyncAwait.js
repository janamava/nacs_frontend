const promisedNumber = function () {
    return new Promise(function(resolve){
        resolve(1);
    }); 
};

async function getNumberWithAsync() {
    const number = await promisedNumber();
    console.log(number);
}

getNumberWithAsync();
