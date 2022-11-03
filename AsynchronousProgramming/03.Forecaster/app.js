function attachEvents() {
    document.getElementById('submit').addEventListener('click', getWeather);

    let conditionEnums = {
        "Sunny": '&#x2600',
        "Partly sunny": '&#x26C5',
        "Overcast": '&#x2601',
        "Rain": '&#x2614',
        "Degrees": '&#176'

    }

    async function getWeather() {

        let location = document.getElementById('location').value;


        let response = await fetch(`http://localhost:3030/jsonstore/forecaster/locations`);
        let data = await response.json();

        data.forEach(element => {
            if (element.name == location) {
                getForecasts(element.code);
            }
        });


    }

    async function getForecasts(locationCode) {
        let responseOneDay = await fetch(`http://localhost:3030/jsonstore/forecaster/today/${locationCode}`);
        let dataOneDay = await responseOneDay.json();

        let responseThreeDay = await fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${locationCode}`);
        let dataThreeDay = await responseThreeDay.json();

        renderOneDayForecast(dataOneDay);
        renderThreeDaysForecast(dataThreeDay.forecast);
    }

    function renderOneDayForecast(object) {
        document.getElementById('forecast').style.display = '';
        let cityName = object.name;
        let condition = object.forecast.condition;
        let low = object.forecast.low;
        let high = object.forecast.high;

        let div = document.createElement('div');
        div.classList.add('forecasts');

        let symbolSpan = document.createElement('span');
        symbolSpan.className = 'condition symbol';
        symbolSpan.innerHTML = conditionEnums[condition];

        let conditionSpan = document.createElement('span');
        conditionSpan.classList.add('condition');

        let nameSpan = document.createElement('span');
        nameSpan.classList.add('forecast-data');
        nameSpan.textContent = cityName;

        let degreesSpan = document.createElement('span');
        degreesSpan.classList.add('forecast-data');
        degreesSpan.innerHTML = `${low}${conditionEnums["Degrees"]}/${high}${conditionEnums["Degrees"]}`;

        let lastSpan = document.createElement('span');
        lastSpan.classList.add('forecast-info');
        lastSpan.textContent = condition;

        conditionSpan.appendChild(nameSpan);
        conditionSpan.appendChild(degreesSpan);
        conditionSpan.appendChild(lastSpan);
        div.appendChild(symbolSpan);
        div.appendChild(conditionSpan);

        document.getElementById('current').appendChild(div);
    }

    function renderThreeDaysForecast(object) {
        let div = document.createElement('div');
        div.classList.add('forecast-info');

        for (const iterator of object) {
            let condition = iterator.condition;
            let low = iterator.low;
            let high = iterator.high;

            let conditionSpan = document.createElement('span');
            conditionSpan.classList.add('upcoming');

            let symbolSpan = document.createElement('span');
            symbolSpan.classList.add('symbol');
            symbolSpan.innerHTML = conditionEnums[condition];

            let degreesSpan = document.createElement('span');
            degreesSpan.classList.add('forecast-data');
            degreesSpan.innerHTML = `${low}${conditionEnums["Degrees"]}/${high}${conditionEnums["Degrees"]}`;

            let lastSpan = document.createElement('span');
            lastSpan.classList.add('forecast-info');
            lastSpan.textContent = condition;

            conditionSpan.appendChild(symbolSpan);
            conditionSpan.appendChild(degreesSpan);
            conditionSpan.appendChild(lastSpan);
            div.appendChild(conditionSpan);

        }
        document.getElementById('upcoming').appendChild(div);

    }

    function error() {
        document.getElementById('forecast').style.display = '';
        let div = document.createElement('div');
        div.textContent = 'Error';

        document.getElementById('current').appendChild(div);

    }
}

attachEvents();