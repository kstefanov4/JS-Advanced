function solve(array){
    const result = [];

    for(let i = 0; i < array.length; i++){
        switch(array[i]){
            case'add':
                result.push(i + 1);
            break;
            case'remove':
                result.pop();
            break;
        }
    }

    
    console.log(result.length > 0 ? result.join('\n'):'Empty')
}
solve(['add',

'add',

'add',

'add'])
solve(['add', 'add', 'remove', 'add', 'add'])
solve(['remove', 'remove', 'remove'])