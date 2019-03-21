class PutIsAsyncPromise {

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
        return this.products;
    }
}

const basket = new PutIsAsyncPromise();

basket.put("Shelves")
    .then(() => basket.put("Blanket"))
    .then(() => console.log(basket.get()));