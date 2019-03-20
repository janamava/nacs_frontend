class AsyncBasketPromise {

    constructor() {
        this.products = [];
    }

    put(product) {
        let products = this.products;
        return new Promise(function (resolve) {
            setTimeout(function () {
                products.push(product);
                resolve();
            }, 1000);
        });
    }

    get() {
        let products = this.products;
        return new Promise(function (resolve) {
            resolve(products);
        });
    }
}

const basket = new AsyncBasketPromise();

basket.put("Cheese")
.then(() => basket.put("Milk"))
.then(() => basket.get().then(value => console.log(value)));