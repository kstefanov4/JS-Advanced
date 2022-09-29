function attachEventsListeners() {

    let buttons = Array.from(document.querySelectorAll('[type="button"]'));


    for (const button of buttons) {

        button.addEventListener('click', convert);
    }
    let seconds = 0;

    function convert(event) {
        let periodText = event.target.parentElement.children[0].innerText;
        let periodNum = Number(event.target.parentElement.children[1].value);

        if (periodText == 'Days:') {
            seconds = periodNum * 86400;
        } else if (periodText == 'Hours:') {
            seconds = periodNum * 3600;
        } else if (periodText == 'Minutes:') {
            seconds = periodNum * 60;
        } else if (periodText == 'Seconds:') {
            seconds = periodNum;
        }
        
        document.getElementById('days').value = (seconds / 86400).toString();
        document.getElementById('hours').value = (seconds / 3600).toString();
        document.getElementById('minutes').value = (seconds / 60).toString();
        document.getElementById('seconds').value = (seconds).toString();
        
    }


}
