function addItem() {
    let input = document.getElementById('newItemText').value;

    let liElement = document.createElement('li');
    let aElement = document.createElement('a');
    aElement.textContent = '[Delete]';
    aElement.href = '#';
    aElement.onclick = function(){aElement.parentElement.remove()};
    liElement.textContent = input;
    liElement.appendChild(aElement);
    document.getElementById('items').appendChild(liElement);
    document.getElementById('newItemText').value = '';
}
