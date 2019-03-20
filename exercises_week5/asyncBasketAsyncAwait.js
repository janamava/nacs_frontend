class AsyncBasketAsyncAwait {

    constructor() {
        this.products = [];
    }

    put(product) {
        let products = this.products;
        products.push(product);
        return new Promise(function (resolve) {
            resolve();
        });
    }

    get() {
        let products = this.products;
        return new Promise(function (resolve) {
            resolve(products);
        });
    }
}

const basket = new AsyncBasketAsyncAwait();

async function name() {
    await basket.put("Milk")
        .then(await basket.put("Cheese")
            .then(basket.get()
                .then(function (value) {
                    console.log(value);
                })
            ))
}

name();