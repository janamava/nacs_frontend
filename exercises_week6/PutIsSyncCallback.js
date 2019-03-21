class PutIsSyncCallback {

    constructor() {
        this.products = [];
    }

    put(product) {
        this.products.push(product);
    }

    get(callback) {
        setTimeout(() => {
            callback(this.products);
        }, 1000);
    }
}

const basket = new PutIsSyncCallback();
basket.put("Stickers");
basket.put("Glitter");
basket.get(products => console.log(products));