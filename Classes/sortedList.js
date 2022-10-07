class List{
    constructor(){
        this.array = [];
        this.size = 0;
    }

    add(num){
        this.array.push(Number(num));
        this.size++;
    };
    remove(index){
        if (index < 0 || index > this.array.length){
            throw new console.error("Index out of range");
        }
        this.array.splice(index,1);
        this.size--;
    }
    get(index){
        this.array.sort((a,b) => a - b)
        return this.array[index];
    }
}

let list = new List();
//console.log(list)
list.add(8);
//console.log(list)
list.add(9);
//console.log(list)
list.add(7);
//console.log(list)
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));
