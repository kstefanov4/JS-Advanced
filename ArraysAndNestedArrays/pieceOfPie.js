function solve(array,from,to){
    const startIndex = array.indexOf(from);
    const secondIndex = array.indexOf(to) + 1;

    return array.slice(startIndex, secondIndex);
    
}

console.log(solve(['Apple Crisp', 'Mississippi Mud Pie', 'Pot Pie', 'Steak and Cheese Pie', 'Butter Chicken Pie', 'Smoked Fish Pie'], 'Pot Pie', 'Smoked Fish Pie'));