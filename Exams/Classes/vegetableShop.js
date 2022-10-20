class VegetableStore{
    constructor(owner, location){
        this.owner = owner;
        this.location = location;
        this.alailableProducts = [];
    }

    loadingVegetables (vegetables){
       let addedProducts = [];

        for (const vegetable of vegetables) {
            let type = vegetable.split(' ')[0];
            let quantity = Number(vegetable.split(' ')[1]);
            let price = Number(vegetable.split(' ')[2]);
            
            if (!this.alailableProducts.find(x => x.type == type)){
                this.alailableProducts.push({type,quantity,price});
                addedProducts.push(type);
            } else {
                this.alailableProducts.find(x => x.type == type).quantity += quantity;
                if (price > this.alailableProducts.find(x => x.type == type).price){
                    this.alailableProducts.find(x => x.type == type).price = price;
                }
            }
        }
        return `Successfully added ${addedProducts.join(', ')}`;
    };

    buyingVegetables (selectedProducts){
        let totalPrice = 0;

        for (const product of selectedProducts) {
            let productType = product.split(' ')[0];
            let productQuantity = Number(product.split(' ')[1]);
            let storeProduct = this.alailableProducts.find(x => x.type == productType);

            if (!storeProduct){
                throw new Error(`${productType} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
            };

            if (productQuantity > storeProduct.quantity){
                throw new Error(`The quantity ${productQuantity} for the vegetable ${productType} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
            };

            totalPrice += storeProduct.price * productQuantity;
            storeProduct.quantity -= productQuantity;
        };

        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`   
    };

    rottingVegetable (type, quantity){
        let storeProduct = this.alailableProducts.find(x => x.type == type);
        
        if (!storeProduct){
            throw new Error(`${type} is not available in the store.`);
        };

        if (quantity >= storeProduct.quantity){
            storeProduct.quantity = 0;
            return `The entire quantity of the ${type} has been removed.`;
        };

        storeProduct -= quantity;
        return `Some quantity of the ${type} has been removed.`;
    };

    revision (){
        let result = '';
        result += 'Available vegetables:';

        for (const storeProduct of this.alailableProducts.sort((a,b) => a.price - b.price)) {
            result += `\n${storeProduct.type}-${storeProduct.quantity}-$${storeProduct.price}`;
        }
        result += `\nThe owner of the store is ${this.owner}, and the location is ${this.location}.`;
        return result;
    };
};

let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());
