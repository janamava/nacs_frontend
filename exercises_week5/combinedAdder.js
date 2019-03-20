const firstNumberGetter = function (callback) { callback(1) };
const secondNumberGetter = () => new Promise(resolve => resolve(2));
const thirdNumberGetter = () => new Promise(resolve => resolve(3));

const combinedAdder = function () {

    let firstNumber = 0, secondNumber = 0; thirdNumber = 0;

    firstNumberGetter(function (value) {
        firstNumber = value;
        secondNumberGetter().then(async function (value) {
            secondNumber = value;
            thirdNumber = await thirdNumberGetter();
            const total = firstNumber + secondNumber + thirdNumber;
            console.log(total);

        });
    });
}

combinedAdder();