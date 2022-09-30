function solve(data, criteria) {

    let employees = JSON.parse(data);
    let result = [];

    for (const employee of employees) {

        if (filter(employee, criteria)) {
            result.push(employee);
        }
    }

    for (let i = 0; i < result.length; i++) {
        console.log(`${i}. ${result[i]["first_name"]} ${result[i]["last_name"]} - ${result[i]["email"]}`);
    }

    function filter(obj, criteria1) {

        if (criteria1 == 'all') {
            return true;
        }

        let criteriaKey = criteria1.split('-')[0];
        let criteriaValue = criteria1.split('-')[1];

        return Object.entries(obj).some(([key, value]) => key == criteriaKey && value == criteriaValue);
    }

}

solve(`[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Johnson",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }, {
    "id": "4",
    "first_name": "Evanne",
    "last_name": "Johnson",
    "email": "ev2@hostgator.com",
    "gender": "Male"
  }]`,
    'last_name-Johnson'

);
solve(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`,
    'gender-Female');