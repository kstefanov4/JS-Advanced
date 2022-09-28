function deleteByEmail() {
    let list = document.querySelectorAll('#customers tbody tr td');

    let searchedEmail = document.getElementsByName('email')[0].value;

    let result = false;

    for (const element of list) {
        if (element.textContent == searchedEmail){
            element.parentElement.remove();
            result = true;
            //document.getElementsByName('email')[0].value = '';
        }
    }

    if (result){
        document.getElementById('result').textContent = 'Deleted.'
    }else{
        document.getElementById('result').textContent = 'Not found.'
    }
}