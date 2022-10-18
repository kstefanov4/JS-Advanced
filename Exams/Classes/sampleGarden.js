class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable = Number(spaceAvailable);
        this.plants = [];
        this.storage = [];
    }

    addPlant(plantName, spaceRequired) {
        if (spaceRequired > this.spaceAvailable) {
            throw new Error(`Not enough space in the garden.`);
        }

        this.plants.push({ plantName, spaceRequired, ripe: false, quantity: 0 });
        this.spaceAvailable -= spaceRequired;
        return `The ${plantName} has been successfully planted in the garden.`
    };

    ripenPlant(plantName, quantity) {
        let plant = this.plants.find(x => x.plantName == plantName);

        if (plant == undefined) {
            throw new Error(`There is no ${plantName} in the garden.`);
        };

        if (plant.ripe) {
            throw new Error(`The ${plantName} is already ripe.`);
        };

        if (quantity <= 0) {
            throw new Error(`The quantity cannot be zero or negative.`);
        }

        plant.ripe = true;
        plant.quantity = quantity;
        if (quantity == 1) {
            return `${quantity} ${plantName} has successfully ripened.`
        } else {
            return `${quantity} ${plantName}s have successfully ripened.`
        }
    };

    harvestPlant(plantName) {
        let plant = this.plants.find(x => x.plantName == plantName);

        if (plant == undefined) {
            throw new Error(`There is no ${plantName} in the garden.`);
        };

        if (!plant.ripe) {
            throw new Error(`The ${plantName} cannot be harvested before it is ripe.`);
        };

        let plantIndex = this.plants.indexOf(plant);
        this.plants.splice(plantIndex, 1);
        this.storage.push({ plantName, quantity: plant.quantity });
        this.spaceAvailable += plant.spaceRequired;
        return `The ${plantName} has been successfully harvested.`;
    };

    generateReport() {
        let result = '';
        result += `The garden has ${this.spaceAvailable} free space left.`;

        result += `\nPlants in the garden: ${this.plants.sort((a, b) => a.plantName.localeCompare(b.plantName))
            .map(x => x.plantName).join(', ')}`;

        result += `\nPlants in storage: `;

        if (this.storage.length == 0) {
            result += `The storage is empty.`
        } else {
            for (let i = 0; i < this.storage.length; i++) {
                result += `${this.storage[i].plantName} (${this.storage[i].quantity})`;

                if (i < this.storage.length - 1) {
                    result += `, `;
                }
            };
        }
        return result;
    }
}
const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 100));
console.log(myGarden.addPlant('cucumber', 30));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.ripenPlant('orange', 4));
