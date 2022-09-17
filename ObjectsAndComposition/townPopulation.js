function solve(input){
    const register = {};

    for (const inputString of input) {
        var cityName = inputString.split(' <-> ')[0];
        var population = Number(inputString.split(' <-> ')[1]);

        if (register[cityName] != undefined) { 
            population += register[cityName]; 
        }
        register[cityName] = population;
    }

    for (let town in register) {
        console.log(`${town} : ${register[town]}`);
    }
    
}

solve(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']
);