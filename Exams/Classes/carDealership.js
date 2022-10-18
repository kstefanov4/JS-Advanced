class CarDealership {
    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    };

    addCar(model, horsepower, price, mileage) {
        if (!model || !horsepower || !price || !mileage || horsepower < 0 || price < 0 || mileage < 0) {
            throw new Error("Invalid input!");
        };

        let car = {
            model,
            horsepower: Number(horsepower),
            price: Number(price),
            mileage: Number(mileage)
        };
        this.availableCars.push(car);
        return `New car added: ${model} - ${car.horsepower} HP - ${car.mileage.toFixed(2)} km - ${car.price.toFixed(2)}$`
    };

    sellCar(model, desiredMileage) {
        let car = this.availableCars.find(x => x.model == model);

        if (!car) {
            throw new Error(`${model} was not found!`);
        };

        if (car.mileage > desiredMileage) {
            if (car.mileage - desiredMileage <= 40000) {
                car.price -= car.price * 0.05;
            } else {
                car.price -= car.price * 0.10;
            }
        };
        let carModel = car.model;
        let horsepower = car.horsepower;
        let soldPrice = car.price;

        this.soldCars.push({ model: carModel, horsepower, soldPrice });
        this.availableCars.splice(this.availableCars.findIndex(x => x.model == model), 1);
        this.totalIncome += soldPrice;
        return `${model} was sold for ${soldPrice.toFixed(2)}$`
    };

    currentCar() {
        if (this.availableCars.length > 0) {
            let result = '';
            result += `-Available cars:`;

            for (const car of this.availableCars) {
                result += `\n---${car.model} - ${car.horsepower} HP - ${car.mileage.toFixed(2)} km - ${car.price.toFixed(2)}$`;
            }
            return result;

        } else {
            return `There are no available cars`;
        }
    };

    salesReport (criteria) {
        let sortedArray = [];
        if (criteria != 'horsepower' && criteria != 'model'){
            throw new Error('Invalid criteria!');
        };
        
        if (criteria == 'horsepower') {
            sortedArray = this.soldCars.sort((a,b) => b.horsepower - a.horsepower);
        }else{
            sortedArray = this.soldCars.sort((a,b) => a.model.localeCompare(b.model));
        }

        let result = '';
        result += `-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`;
        result += `\n-${sortedArray.length} cars sold:`;

        for (const car of sortedArray) {
            result += `\n---${car.model} - ${car.horsepower} HP - ${car.soldPrice.toFixed(2)}$`;
        }
        return result;
    };
};

let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
dealership.sellCar('Toyota Corolla', 230000);
dealership.sellCar('Mercedes C63', 110000);
console.log(dealership.salesReport('horsepower'));


