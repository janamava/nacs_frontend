class PutIsAsyncAwait {

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

const basket = new PutIsAsyncAwait();

const print = async function () {
    await basket.put("Dress");
    await basket.put("Shoes");
    console.log(basket.get());
}

print();