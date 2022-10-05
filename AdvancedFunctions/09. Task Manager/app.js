function solve() {
    let button = document.getElementById('add');
    
    button.setAttribute('type', 'button');
    
    button.addEventListener('click', action, false);
    
    let orangeSection = document.getElementsByTagName('section')[1].children[1];
    let yellowSection = document.getElementsByTagName('section')[2].children[1];
    let greenSection = document.getElementsByTagName('section')[3].children[1];

   
    function action() {
        let task = document.getElementById('task').value;
        let description = document.getElementById('description').value;
        let date = document.getElementById('date').value;

        let article = document.createElement('article');

        let h3 = document.createElement('h3');
        h3.textContent = task;

        let descriptionP = document.createElement('p');
        descriptionP.textContent = `Description: ${description}`;

        let dateP = document.createElement('p');
        dateP.textContent = `Due Date: ${date}`;

        let div = document.createElement('div');
        div.className = 'flex';

        let orangeButton = document.createElement('button');
        orangeButton.className = 'orange';
        orangeButton.textContent = 'Finish';
        orangeButton.addEventListener('click', orangeButtonClicked)
        
        let greenButton = document.createElement('button');
        greenButton.className = 'green';
        greenButton.textContent = 'Start';
        greenButton.addEventListener('click', greenButtonClicked)
        
        let redButton = document.createElement('button');
        redButton.className = 'red';
        redButton.textContent = 'Delete'
        redButton.addEventListener('click', ondDelete)

        div.appendChild(greenButton);
        div.appendChild(redButton);

        article.appendChild(h3);
        article.appendChild(descriptionP);
        article.appendChild(dateP);
        article.appendChild(div);

        orangeSection.appendChild(article);

        function greenButtonClicked(event){

            yellowSection.appendChild(article);
            greenButton.parentElement.appendChild(orangeButton);
            greenButton.remove();
        }
    
        function orangeButtonClicked(event){
            greenSection.appendChild(article);
            event.originalTarget.parentElement.remove();
        }

        function ondDelete(){
            article.remove();
        }

        document.getElementById('task').value = '';
        document.getElementById('description').value = '';
        document.getElementById('date').value = '';
    }
       
}
