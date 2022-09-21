function sumTable() {
    let elements = Array.from(document.querySelectorAll('td'));
    let sum = 0;
    for (let i = 1; i < elements.length - 2; i += 2) {
        let number = Number(elements[i].innerText);
        sum += number;
    }
    document.getElementById('sum').textContent = sum;
}