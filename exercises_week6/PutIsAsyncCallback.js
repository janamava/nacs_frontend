class PutIsAsyncCallback {

    constructor() {
        this.products = [];
    }

    put(product, callback) {
        setTimeout(() => {
            this.products.push(product);
            callback();
        }, 1000);
    }

    get() {
        return this.products;
    }
}

const basket = new PutIsAsyncCallback();

basket.put("Books", () => {
    basket.put("Socks", () => {
        console.log(basket.get());
    });
});