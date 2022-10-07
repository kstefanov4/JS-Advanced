class Company{
    constructor(){
        this.departaments = {};
    }

    addEmployee(name, salary,position, departament){
        [name,salary,position,departament].forEach(e => {

        if (e =="" || e == undefined || e == null){
            throw new Error('Invalid input!');
        }
        });

        if (Number(salary) < 0){
            throw new Error('Invalid input!');
        }

        if (!this.departaments.hasOwnProperty(departament)){
            this.departaments[departament] = [];
        }
        this.departaments[departament].push({name, salary,position})

        return `New employee is hired. Name: ${name}. Position: ${position}`
    };
    
    bestDepartment(){
        let bestDepartament = '';
        let averageSalary = 0;

        for (const key in this.departaments) {
            let sum = 0;
            let employees = 0;
            this.departaments[key].forEach(e => {
                sum += e.salary;
                employees++;
            });

            if (sum / employees > averageSalary){
                averageSalary = sum / employees;
                bestDepartament = key;
            }
        }
        
        this.departaments[bestDepartament].sort((a,b) => a.name.localeCompare(b.name))
        .sort((a,b) => b.salary -a.salary);
        
        let output = '';
        output += `Best Department is: ${bestDepartament}\n`;
        output += `Average salary: ${averageSalary.toFixed(2)}\n`;
        for(let i = 0; i < this.departaments[bestDepartament].length; i++){
            
            if (i == this.departaments[bestDepartament].length -1){
                output += `${this.departaments[bestDepartament][i].name} ${this.departaments[bestDepartament][i].salary} ${this.departaments[bestDepartament][i].position}`;
            }else{
                output += `${this.departaments[bestDepartament][i].name} ${this.departaments[bestDepartament][i].salary} ${this.departaments[bestDepartament][i].position}\n`;
            }
        }
        
        return output;
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
