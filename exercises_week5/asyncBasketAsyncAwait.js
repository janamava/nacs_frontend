class AsyncBasketAsyncAwait {

    constructor() {
        this.products = [];
    }

    put(product) {
        return new Promise(resolve => {
            setTimeout(() => {
                this.products.push(product);
                resolve();
            }, 1000);
        });
    }

    get() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(this.products);
            }, 500);
        });
    }
}

const basket = new PutIsAsyncAwait();

const print = async function () {
    await basket.put("Jogurt");
    await basket.put("Kale");
    console.log (await basket.get());
}

print();