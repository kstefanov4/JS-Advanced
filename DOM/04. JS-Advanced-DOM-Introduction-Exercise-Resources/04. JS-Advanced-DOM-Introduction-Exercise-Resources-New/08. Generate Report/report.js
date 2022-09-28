function generateReport() {
    let tHeadElements = Array.from(document.querySelectorAll('th input'));

    let tableInfo = Array.from(document.querySelectorAll('tbody tr'));

    let indexes = [];
    let result = [];

    for (let element of tHeadElements) {
        if (element.checked) {
            let index = tHeadElements.indexOf(element);
            indexes.push(index);
        }
    }

    let columnNames = Array.from(document.querySelectorAll('thead tr th'));

    for (const row of tableInfo) {
        let object = {};

        for (const index of indexes) {

            object[columnNames[index].textContent.toLowerCase().trim()] = row.children[index].textContent

        }
        result.push(object);
    }
    document.getElementById('output').value = JSON.stringify(result);
}
