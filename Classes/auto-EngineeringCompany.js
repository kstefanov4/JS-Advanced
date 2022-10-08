function solve(input){
    let inputArray = [...input];
    let carBrands = new Map();

    class Car{
        constructor(model, producedCars){
            this.model = model;
            this.producedCars = producedCars;
        }
    }

    for (const line of inputArray) {
        let brand = line.split(' | ')[0];
        let model = line.split(' | ')[1];
        let carsNum = line.split(' | ')[2];

        if (!carBrands.has(brand)){
            carBrands.set(brand,[]);
        }

        for (let i = 0; i < carBrands.get(brand).length; i++){
            //const [k,v] of carBrands.get(brand)) {
            if (carBrands.get(brand)[i].key == model){
                carBrands.set(brand, carBrands.get(brand)[i].producedCars + carsNum )        
            }
        }
        carBrands.set(brand, [...carBrands.get(brand),new Car(model,carsNum)])
    }

    console.log(carBrands);
}

solve(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']
);