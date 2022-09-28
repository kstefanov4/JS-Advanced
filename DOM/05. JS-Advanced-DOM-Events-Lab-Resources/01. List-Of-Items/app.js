function addItem() {
    let input = document.getElementById('newItemText').value;

    let newLi = document.createElement('li');
    newLi.textContent = input;
    document.getElementById('items').appendChild(newLi);
}