function onLoad() {
    document.getElementById('submit').addEventListener('click',createStudent);
    loadAllStudents();
}

async function loadAllStudents(){
    let response = await fetch('http://localhost:3030/jsonstore/collections/students');
    let data = await response.json();
    let list = document.getElementsByTagName('tbody')[0];
    list.innerHTML = ''
    Object.values(data).forEach(x => {

        let firstName = x.firstName;
        let lastName = x.lastName;
        let facultyNumber = x.facultyNumber;
        let grade = x.grade;
        
        let tr = document.createElement('tr');
        tr.innerHTML = `<th>${firstName}</th>
        <th>${lastName}</th>
        <th>${facultyNumber}</th>
        <th>${grade}</th>`;
        list.appendChild(tr);
    });
}

async function createStudent(e){
    e.preventDefault();
    let inputs = document.getElementsByTagName('input');
    let firstName = inputs[0].value;
    let lastName = inputs[1].value;
    let facultyNumber = inputs[2].value;
    let grade = inputs[3].value;

    if (!firstName || !lastName || facultyNumber == '' || !facultyNumber || !grade){
return
    }

    let body = {firstName,lastName,facultyNumber,grade};
try{
    let response = await fetch('http://localhost:3030/jsonstore/collections/students',{
        method: 'POST',
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(body)
    });
}catch(e){
    alert(e)
}
    loadAllStudents();
}

onLoad();