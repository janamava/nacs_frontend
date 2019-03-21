class PutIsSyncAwait {

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
            }, 1000);
        });
    }
}

const basket = new PutIsSyncAwait();

const print = async function () {
    basket.put("Ruby");
    basket.put("Emerald");
    console.log(await basket.get());
}

print();