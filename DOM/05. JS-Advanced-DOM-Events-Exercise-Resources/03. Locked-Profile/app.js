function lockedProfile() {
   Array.from(document.getElementsByTagName('button'))
   .forEach(e => e.addEventListener('click',action));

    function action(event){
        let parentElement = event.target.parentElement;

        if (parentElement.querySelector('input[type="radio"][value="unlock"]').checked == true){
            if(parentElement.getElementsByTagName('button')[0].textContent == 'Hide it'){
                parentElement.getElementsByTagName('div')[0].style.display = 'none';
                parentElement.getElementsByTagName('button')[0].textContent = 'Show more'
                return;
            }

            parentElement.getElementsByTagName('div')[0].style.display = 'inline-block';
            
            if (parentElement.getElementsByTagName('div')[0].style.display == 'inline-block'){
                parentElement.getElementsByTagName('button')[0].textContent = 'Hide it'
            }
        }
    }
}
