function solve(array){
    const coppyArray = array;
    let firstNum = Number(array.pop());
    let secondNum = Number(coppyArray.shift());

    let sum = firstNum + secondNum;

    console.log(sum);
}

solve(['20', '30', '40'])
solve(['5', '10'])