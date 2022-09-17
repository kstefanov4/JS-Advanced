function cityTaxes(name,population, treasury){
    return {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes(){
            Math.floor(this.treasury += this.population * this.taxRate);
        },
        applyGrowth(percentage){
            Math.floor(this.population += this.population * percentage / 100);
        },
        applyRecession(percentage){
            Math.floor(this.population -= this.population * percentage / 100);
        }
    }
}


const city =
  cityTaxes('Tortuga',
  7000,
  15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);

