function solve(array,rotate){
    
    for(let i = 0; i < rotate; i++){
        array.unshift(array.pop());
    }
    console.log(array.join(' '))
}
solve(['1',

'2',

'3',

'4'],

2)
solve(['Banana', 'Orange', 'Coconut', 'Apple'], 15)