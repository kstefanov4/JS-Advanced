async function getInfo() {
    let stopId = document.getElementById('stopId').value;

    let url = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`;

    try {
        let response = await fetch(url);
        let data = await response.json();
        document.getElementById('stopId').value = '';

        document.getElementById('stopName').textContent = data.name;
        document.getElementById('buses').innerHTML = '';
        for (const bus of Object.entries(data.buses)) {

            let li = document.createElement('li');
            li.innerText = `Bus ${bus[0]} arrives in ${bus[1]} minutes`;
            document.getElementById('buses').appendChild(li);
        }

    } catch (e) {
        document.getElementById('stopName').textContent = 'Error'
    }
}