function solve(number){
    if  (typeof(number) == 'number'){
        console.log((Math.pow(number,2) * Math.PI).toFixed(2));
    }else{
        console.log(`We can not calculate the circle area, because we receive a ${typeof(number)}.`);
    }
}

solve(5)
solve('name')