class PutIsSyncPromise {

    constructor() {
        this.products = [];
    }

    put(product) {
        this.products.push(product);
    }

    get() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(this.products);
            }, 500);
        });
    }
}

const basket = new PutIsSyncPromise();

basket.put("Roses");
basket.put("Kamelias");
basket.get()
.then(products => console.log(products));