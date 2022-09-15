function solve(input){
    let array = [...input];
    array.sort((a,b) => a.length - b.length || a.localeCompare(b));

    console.log(array.join('\n'))
}

solve(['alpha', 
'beta', 
'gamma']
)
solve(['Isacc', 
'Theodor', 
'Jack', 
'Harrison', 
'George']
)