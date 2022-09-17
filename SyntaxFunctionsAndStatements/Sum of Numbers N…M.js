function solve(text1, text2){
    let num1 = Number(text1);
    let num2 = Number(text2);
    let sum = 0;

    for (let i = num1; i <= num2; i++){
        sum += i;
    }

    console.log(sum)
}

solve('1', '5')
solve('-8', '20')