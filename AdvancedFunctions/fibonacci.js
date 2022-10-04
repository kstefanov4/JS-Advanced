function getFibonator(){
    let firsNum = 0;
    let secondNum = 1;
    
    return () => {
        let sum = firsNum + secondNum;
        firsNum = secondNum;
        secondNum = sum;
        return firsNum;
    }
}

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
