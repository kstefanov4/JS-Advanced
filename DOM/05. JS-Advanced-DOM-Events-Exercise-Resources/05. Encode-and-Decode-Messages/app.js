function encodeAndDecodeMessages() {
    Array.from(document.getElementsByTagName('button'))
        .forEach(element => element.addEventListener('click', action));

    let inputText = '';
    let encodeMessage = '';


    function action(event) {
        let element = event.target.parentElement;

        inputText = element.getElementsByTagName('textarea')[0].value;

        if (element.getElementsByTagName('p')[0].textContent == 'Message') {

            if (document.getElementById('main').children[1]
                .getElementsByTagName('textarea')[0].value != '') {
                encodeMessage = '';
            }
            for (const letter of inputText) {

                let encodedLetter = letter.charCodeAt() + 1;
                encodeMessage += String.fromCharCode(encodedLetter);
            }

            document.getElementById('main').children[1]
                .getElementsByTagName('textarea')[0].value = encodeMessage;

            element.getElementsByTagName('textarea')[0].value = '';

        } else if (element.getElementsByTagName('p')[0].textContent == 'Last received message') {
            inputText = encodeMessage;
            encodeMessage = '';
            // document.getElementById('main').children[1]
            //     .getElementsByTagName('textarea')[0].value = '';
            for (const letter of inputText) {

                let encodedLetter = letter.charCodeAt() - 1;
                encodeMessage += String.fromCharCode(encodedLetter);
            }
            document.getElementById('main').children[1]
                .getElementsByTagName('textarea')[0].value = encodeMessage;
        }

    }
}
