function solve() {
   document.getElementById('btnSend').addEventListener('click', onClick);

   function onClick() {
      let inputText = JSON.parse(document.querySelector("#inputs textarea").value);
      let allRestaurants = getAllRestaurants(inputText);
      let theBestRestaurant = getTheBestRestaurant(allRestaurants);

      outputs(theBestRestaurant);
   }

   function getAllRestaurants(inputText) {
      let restaurants = {};

      for (const record of inputText) {
         let restaurantName = record.split(' - ')[0];
         let workers = [...record.split(' - ')[1].split(', ')];

         for (const workerInfo of workers) {
            let worker = {};
            let name = workerInfo.split(' ')[0];
            let salary = workerInfo.split(' ')[1];
            worker['name'] = name;
            worker['salary'] = salary;

            if (!(restaurantName in restaurants)) {
               restaurants[restaurantName] = [];
            }

            restaurants[restaurantName].push(worker);
         }

      }
      return restaurants;
   }

   function getTheBestRestaurant(restaurants) {
      let theBestRestaurant = {
         averageSalary: 0,
         name: '',
         salary: 0,
         workers: {}
      };

      for (const key in restaurants) {
         let salarySum = 0;
         let theBestSalary = 0;

         for (const worker of restaurants[key]) {
            let currentSalary = Number(worker.salary);
            salarySum += currentSalary;

            if (theBestSalary < currentSalary) {
               theBestSalary = currentSalary;
            }
         }

         let currentAverage = salarySum / restaurants[key].length;
         if (theBestRestaurant.averageSalary < currentAverage) {

            theBestRestaurant.averageSalary = currentAverage.toFixed(2);
            theBestRestaurant.salary = theBestSalary.toFixed(2);
            theBestRestaurant.name = key;
            theBestRestaurant.workers = restaurants[key];
         }
      }
      return theBestRestaurant;
   }

   function outputs(theBestRestaurant) {
      document.querySelector('#outputs #bestRestaurant p').textContent = `Name: ${theBestRestaurant.name} Average Salary: ${theBestRestaurant.averageSalary} Best Salary: ${theBestRestaurant.salary}`;

      let theBestWorkersOutputText = '';

      for (const worker of theBestRestaurant.workers.sort((a, b) => b.salary - a.salary)) {
         theBestWorkersOutputText += `Name: ${worker.name} With Salary: ${worker.salary} `;
      }

      document.querySelector("#outputs #workers p").textContent = theBestWorkersOutputText.trim();
   }
}
