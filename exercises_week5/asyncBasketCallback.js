class AsyncBasketCallback {

    constructor() {
        this.products = [];
    }

    put(product, callback) {
        setTimeout(() => {
            this.products.push(product);
            callback();
        }, 1000);
    }

    get(callback) {
        setTimeout(() => {
            callback(this.products);
        }, 500);
    }
}

const basket = new AsyncBasketCallback();
basket.put("Cheese", () => {
    basket.put("Milk", () => {
        basket.get(products => console.log(products));
    });
});