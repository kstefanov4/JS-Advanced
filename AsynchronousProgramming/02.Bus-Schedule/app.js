function solve() {
    let departButton = document.getElementById("depart");
    let arriveButton = document.getElementById('arrive');
    let info = document.getElementById('info');
    let span = document.createElement('span');
    span.className = 'info';
    span.textContent = '';

    let nextStop;
    let nextStopName;

    async function depart() {
        console.log('Depart TODO...');
        departButton.setAttribute("disabled", true);
        arriveButton.disabled = false;

        try {

            if (info.textContent == 'Not Connected') {
                info.textContent = '';
                span.textContent = 'Next stop Depot';
                info.appendChild(span);

                nextStopName = `Depot`;
                return;

            } else if (nextStopName == 'Depot') {
                let response = await fetch(`http://localhost:3030/jsonstore/bus/schedule`);
                let data = await response.json();
                nextStop = Object.keys(data)[0];
            }

            let url = 'http://localhost:3030/jsonstore/bus/schedule/' + nextStop;
            let departResponse = await fetch(url);
            let departData = await departResponse.json();
            nextStop = departData.next;


            span.textContent = 'Next stop ' + departData.name;
            info.appendChild(span);

            nextStopName = departData.name;
        } catch (e) {
            errorFunction();
        }

    }

    function arrive() {
        console.log('Arrive TODO...');
        departButton.disabled = false;
        arriveButton.disabled = true;

        span.textContent = 'Arriving at ' + nextStopName;
        info.appendChild(span);

    }

    function errorFunction() {
        departButton.prop("disabled", true);
        arriveButton.prop("disabled", true);

        span.textContent = 'Error';
        info.appendChild(span);
    }

    return {
        depart,
        arrive
    };
}

let result = solve();
