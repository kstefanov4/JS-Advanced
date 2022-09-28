function solve() {
    // let metaElement = document.createElement('meta');
    // metaElement.setAttribute('charset', 'UTF-8');
    // document.getElementsByTagName('head')[0].appendChild(metaElement);

    document.querySelector('button').addEventListener('click', onClick);

    
    let attributes = ['Binary', 'Hexadecimal'];
    let menuTo = document.getElementById('selectMenuTo');

    for (let i = 0; i < attributes.length; i++) {
        let optionValue = document.createElement('option');
        optionValue.setAttribute('selected', '')
        optionValue.setAttribute('value', attributes[i])
        optionValue.textContent = attributes[i];
        menuTo.appendChild(optionValue);
    }

    document.querySelectorAll('#selectMenuTo option')[0].remove();


    function onClick() {
        let input = document.getElementById('input').value;
        let sel = document.getElementById("selectMenuTo");
        let text = sel.options[sel.selectedIndex].text;
        
        if (text == 'Binary') {
            document.getElementById('result').value = '';
            document.getElementById('result').value = (input >>> 0).toString(2);

        } else if (text == 'Hexadecimal') {
            document.getElementById('result').value = '';
            document.getElementById('result').value = Math.abs(input).toString(16).toUpperCase();
        }

        function binary(input) {
            return (input >>> 0).toString(2);
        }

        function hexadecimal(input) {
            return input.toString(16);
        }
    }

}
