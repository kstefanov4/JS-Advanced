function solve(num = 5){
    let string = "";

    for(let i = 0; i < num; i++){
        for(let j = 0; j < num; j++){
            string += "* "
        }
        string += "\n";
    }

    console.log(string);
}

solve(7)
