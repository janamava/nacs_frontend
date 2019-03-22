class AsyncBasketPromise {

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

const basket = new PutIsAsyncPromise();

basket.put("Grapes")
.then(() => basket.put("Lemons"))
.then(() => basket.get())
.then(products => console.log(products));