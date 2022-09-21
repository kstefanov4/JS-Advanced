function editElement(element,searchText, replaceText) {
    element.textContent = element.textContent
    .replace(searchText,replaceText);
}