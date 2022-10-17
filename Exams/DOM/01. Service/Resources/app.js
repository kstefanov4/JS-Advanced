window.addEventListener('load', solve);

function solve() {
    let input = {
        productType: document.getElementById('type-product'),
        description: document.getElementById('description'),
        clientName: document.getElementById('client-name'),
        clientPhone: document.getElementById('client-phone')
    };

    let lists = {
        receivedOrders: document.getElementById('received-orders'),
        completedOrders: document.getElementById('completed-orders')
    }

    document.querySelector("button[type='submit']").addEventListener('click', submit);

    lists.completedOrders.getElementsByTagName('button')[0].addEventListener('click', clear);

    function submit(event) {
        event.preventDefault();

        let productType = input.productType.value;
        let description = input.description.value;
        let clientName = input.clientName.value;
        let clientPhone = input.clientPhone.value;

        if (productType == "" || description == "" || clientName == "" || clientPhone == "") {
            return;
        };

        let div = document.createElement('div');
        div.classList.add('container');

        let h2 = document.createElement('h2');
        h2.textContent = `Product type for repair: ${productType}`;

        let h3 = document.createElement('h3');
        h3.textContent = `Client information: ${clientName}, ${clientPhone}`;

        let h4 = document.createElement('h4');
        h4.textContent = `Description of the problem: ${description}`;

        let startBtn = document.createElement('button');
        startBtn.classList.add("start-btn");
        startBtn.textContent = "Start repair";
        startBtn.addEventListener("click",startRepair);

        let finishBnt = document.createElement('button');
        finishBnt.classList.add("finish-btn");
        finishBnt.addEventListener("click",finishRepair);
        finishBnt.setAttribute("disabled", true);
        finishBnt.textContent = "Finish repair";
        

        div.appendChild(h2);
        div.appendChild(h3);
        div.appendChild(h4);
        div.appendChild(startBtn);
        div.appendChild(finishBnt);
        lists.receivedOrders.appendChild(div);

        input.productType.value = '';
        input.description.value = '';
        input.clientName.value = '';
        input.clientPhone.value = '';
    }

    function startRepair(e) {
        e.target.setAttribute("disabled",true);
        let finishBtn = e.target.parentElement.getElementsByClassName("finish-btn")[0];
        finishBtn.disabled = false;
        
    }

    function finishRepair(e) {
        let divContainer = e.target.parentElement;
        lists.completedOrders.appendChild(divContainer);
        let btns = divContainer.querySelectorAll("button");
        btns[0].remove();
        btns[1].remove();
       
    }

    function clear() {
        let elementsForDeleting = Array.from(lists.completedOrders.getElementsByTagName('div'));

        for (const element of elementsForDeleting) {
            element.remove();
        }
    }
}