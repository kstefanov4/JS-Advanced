function solve() {
    document.getElementById('add-worker').addEventListener('click', add);

    function add(event) {
        event.preventDefault();
        let budget = Number(document.getElementById('sum').textContent);

        const input = {
            firstName: document.getElementById('fname'),
            lastName: document.getElementById('lname'),
            email: document.getElementById('email'),
            dob: document.getElementById('birth'),
            position: document.getElementById('position'),
            salary: document.getElementById('salary')
        }

        let firstName = input.firstName.value;
        let lastName = input.lastName.value;
        let email = input.email.value;
        let dob = input.dob.value;
        let position = input.position.value;
        let salary = input.salary.value;

        if (firstName == '' || lastName == ''
            || email == '' || dob == '' || position == ''
            || salary == '') {
            return;
        }

        let tr = document.createElement('tr');
        tr.innerHTML = `<td>${firstName}</td>
        <td>${lastName}</td>
        <td>${email}</td>
        <td>${dob}</td>
        <td>${position}</td>
        <td>${salary}</td>
        <td><button class="fired">Fired</button> <button class="edit">Edit</button></td>`;

        tr.getElementsByTagName('button')[0].addEventListener('click', fired);
        tr.getElementsByTagName('button')[1].addEventListener('click', edit);

        document.getElementById('tbody').appendChild(tr);
        budget += Number(salary);

        input.firstName.value = '';
        input.lastName.value = '';
        input.email.value = '';
        input.dob.value = '';
        input.position.value = '';
        input.salary.value = '';

        function fired() {
            debugger
            budget -= Number(salary);
            tr.remove();
            document.getElementById('sum').innerText = `${budget.toFixed(2)}`;
        }

        function edit() {
            budget -= Number(salary);
            input.firstName.value = firstName;
            input.lastName.value = lastName;
            input.email.value = email;
            input.dob.value = dob;
            input.position.value = position;
            input.salary.value = salary;
            tr.remove();
            document.getElementById('sum').innerText = `${budget.toFixed(2)}`;
        }

        document.getElementById('sum').innerText = `${budget.toFixed(2)}`;
    }

}
solve()