function extractText() {
    let elements = Array.from(document.querySelectorAll('li'));
    let result = elements.map(x => x.textContent).join('\n');
    document.getElementById('result').textContent = result;
}