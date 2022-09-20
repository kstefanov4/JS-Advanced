function solve(input){
    let resultArray = [];
    for (const singleString of input) {
        let array = singleString.split(' / ');
        let name = array[0];
        let level = Number(array[1]);
        let items = array[2].split(', ');

        let hero = {name, level,items};
        resultArray.push(hero);
    }
    
    console.log(JSON.stringify(resultArray));
}

solve(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']
);