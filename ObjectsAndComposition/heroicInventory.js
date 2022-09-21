function solve(input){
    let resultArray = [];
    for (const singleString of input) {
        let [name, level, items] = singleString.split(' / ');
        level = Number(level);
        items = items ? items.split(', ') : [];

        let hero = {name, level,items};
        resultArray.push(hero);
    }
    
    console.log(JSON.stringify(resultArray));
}
