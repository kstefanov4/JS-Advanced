function solve(array){

    let result = 0;
    for(let i = 0; i < array[0].length; i++){
        for(let j = 0; j < array.length-1; j++){
            if(array[j][i] == array[j+1][i]){
                result ++;
            }
        }
        
    }
    for(let i = 0; i < array[0].length-1; i++){
        for(let j = 0; j < array.length; j++){
            if(array[j][i] == array[j][i+1]){
                result ++;
            }
        }
        
    }
    console.log(result);
}

solve([['2', '3', '4', '7', '0'],

['4', '0', '5', '3', '4'],

['2', '3', '5', '4', '2'],

['9', '8', '7', '5', '4']]);

solve([['test', 'yes', 'yo', 'ho'], ['well', 'done', 'yo', '6'], ['not', 'done', 'yet', '5']]);