function solve(input) {
    let resultArray = {};

    for (const inputString of input) {
        let [town, product, price] = inputString.split(' | ');
        price = Number(price);

        if (resultArray[product]) {
            
            if (resultArray[product].price <= price) {
                continue;
            }

        }
        resultArray[product] = { town, price };
    }

    for (const obj in resultArray) {
        console.log(`${obj} -> ${resultArray[obj].price} (${resultArray[obj].town})`)
    }

    
}

// solve(['Sofia City | Audi | 100000',
//     'Sofia City | BMW | 100000',
//     'Sofia City | Mitsubishi | 10000',
//     'Sofia City | Mercedes | 10000',
//     'Sofia City | NoOffenseToCarLovers | 0',
//     'Mexico City | Audi | 1000',
//     'Mexico City | BMW | 99999',
//     'Mexico City | Mitsubishi | 10000',
//     'New York City | Mitsubishi | 1000',
//     'Washington City | Mercedes | 1000']
// );

solve(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']
);