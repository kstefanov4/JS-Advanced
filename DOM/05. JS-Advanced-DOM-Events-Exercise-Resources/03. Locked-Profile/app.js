function lockedProfile() {
   let buttons =Array.from(document.getElementsByTagName('button'));

    for (const button of buttons) {
        button.addEventListener('click', action);

    }

    function action(event){
        
        if (event.target.parentElement.children[4].checked == true){
            if(event.target.parentElement.children[10].textContent == 'Hide it'){
                event.target.parentElement.children[9].style.display = 'none';
                event.target.parentElement.children[10].textContent = 'Show more'
                return;
            }

            console.log(event.target.parentElement)
            event.target.parentElement.children[9].style.display = 'inline-block';
            
            if (event.target.parentElement.children[9].style.display == 'inline-block'){
                event.target.parentElement.children[10].textContent = 'Hide it'
            }
        }
    }
}
