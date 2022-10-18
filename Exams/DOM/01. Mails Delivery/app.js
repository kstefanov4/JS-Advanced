function solve() {
    document.getElementById('add').addEventListener('click', add);
    document.getElementById('reset').addEventListener('click', reset);

    function add(event) {
        event.preventDefault();

        let input = {
            recipient: document.getElementById('recipientName'),
            title: document.getElementById('title'),
            message: document.getElementById('message')
        };

        let lists = {
            mailsList: document.getElementById('list'),
            sentMails: document.getElementsByClassName('sent-list')[0],
            deletedMails: document.getElementsByClassName('delete-list')[0]
        };

        let recipient = input.recipient.value;
        let title = input.title.value;
        let message = input.message.value;

        if (recipient == '' || title == '' || message == '') {
            return;
        }

        let li = document.createElement('li');
        li.innerHTML = `<h4>Title: ${title}</h4>
        <h4>Recipient Name: ${recipient}</h4>
        <span>${message}</span>
        <div id="list-action">
            <button type="submit" id="send">Send</button>
            <button type="submit" id="delete">Delete</button>
        </div>`;
        lists.mailsList.appendChild(li);

        reset();

        li.getElementsByTagName('button')[0]
            .addEventListener('click', send);

        li.getElementsByTagName('button')[1]
            .addEventListener('click', mailDelete);

        function send() {
            li.innerHTML = `<span>To: ${recipient}</span>
            <span>Title: ${title}</span>
            <div class="btn">
                <button type="submit" class="delete">Delete</button>
            </div>`;
            lists.sentMails.appendChild(li);

            li.getElementsByClassName('delete')[0]
                .addEventListener('click', mailDelete);
        }

        function mailDelete() {
            li.innerHTML = `<span>To: ${recipient}</span>
            <span>Title: ${title}</span>`;
            lists.deletedMails.appendChild(li);

        }
    }

    function reset() {
        document.getElementById('recipientName').value = '';
        document.getElementById('title').value = '';
        document.getElementById('message').value = '';
    }
}
solve()