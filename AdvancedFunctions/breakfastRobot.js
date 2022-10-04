function solution(){

    let ingredients = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }

    let recipes = {
        apple: {carbohydrate: 1, flavour: 2},
        lemonade: {carbohydrate: 10, flavour: 20},
        burger: {carbohydrate: 5, fat : 7, flavour: 3},
        eggs: {protein: 5, fat : 1, flavour: 1},
        turkey: {protein: 10, carbohydrate:10, fat : 10, flavour: 10}
    }

    let commands = {
        restock: (input) => {
            ingredients[input[0]] += Number(input[1]);
            return 'Success';
        },
        prepare: ([recipe, quantity] = input) => {
            let currentRecipe = recipes[recipe];
            //let success = true;

            for (const key in currentRecipe) {
                let neededIngredients = currentRecipe[key] * Number(quantity);

                if(ingredients[key] < neededIngredients){
                    return `Error: not enough ${key} in stock`;
                }

                ingredients[key] -= neededIngredients;
            }
            return 'Success';
        },
        report: () => {
            return`protein=${ingredients.protein} carbohydrate=${ingredients.carbohydrate} fat=${ingredients.fat} flavour=${ingredients.flavour}`;
        }
    }

    return (input) => {
        let inputArray = input.split(' ');
        let key = inputArray.shift();
        let restInput = [...inputArray]

        return commands[key](restInput);

    }

}

let manager = solution (); 
console.log (manager ("restock flavour 50")); // Success 
console.log (manager ("prepare lemonade 4")); // Error: not enough carbohydrate in stock 
console.log (manager ("restock carbohydrate 10")); 
console.log (manager ("restock flavour 10")); 
console.log (manager ("prepare apple 1")); 
console.log (manager ("restock fat 10")); 
console.log (manager ("prepare burger 1")); 
console.log (manager ("report")); 

