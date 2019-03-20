class AsyncBasketCallback {

    constructor() {
        this.products = [];
    }

    put(product, callback) {
        let products = this.products;
        setTimeout(function () {            
            products.push(product);
            callback();
        }, 1000);
    }

    get(callback) {
        let products = this.products;
        setTimeout(function () {
           callback(products);
        }, 500);
    }
}

const basket = new AsyncBasketCallback();
basket.put("Cheese", () => {
    basket.put("Milk", () => {
        basket.get(value => console.log(value));
    });
});