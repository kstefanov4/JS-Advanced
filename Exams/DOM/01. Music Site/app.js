window.addEventListener('load', solve);

function solve() {
    let totalLikes = 0;

    let input = {
        genre: document.getElementById('genre'),
        name: document.getElementById('name'),
        author: document.getElementById('author'),
        date: document.getElementById('date')
    };

    let lists = {
        collection: document.getElementsByClassName('all-hits-container')[0],
        saved: document.getElementsByClassName('saved-container')[0],
        like: document.getElementsByClassName('likes')[0].children[0]
    }

    document.getElementById('add-btn').addEventListener('click', add);

    function add(e) {
        e.preventDefault();

        let genre = input.genre.value;
        let name = input.name.value;
        let author = input.author.value;
        let date = input.date.value;

        if (!genre || !name || !author || !date) {
            return;
        }

        let div = document.createElement('div');
        div.classList.add('hits-info');

        let img = document.createElement('img');
        img.src = "./static/img/img.png";

        let h2Genre = document.createElement('h2');
        h2Genre.textContent = `Genre: ${genre}`;

        let h2Name = document.createElement('h2');
        h2Name.textContent = `Name: ${name}`;

        let h2Author = document.createElement('h2');
        h2Author.textContent = `Author: ${author}`;

        let h3Date = document.createElement('h3');
        h3Date.textContent = `Date: ${date}`;

        let saveBtn = document.createElement('button');
        saveBtn.classList.add('save-btn');
        saveBtn.addEventListener('click', save)
        saveBtn.textContent = "Save song";

        let likeBtn = document.createElement('button');
        likeBtn.classList.add('like-btn');
        likeBtn.addEventListener('click', like)
        likeBtn.textContent = "Like song";

        let deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', deleteFunc)
        deleteBtn.textContent = "Delete";

        div.appendChild(img);
        div.appendChild(h2Genre);
        div.appendChild(h2Name);
        div.appendChild(h2Author);
        div.appendChild(h3Date);
        div.appendChild(saveBtn);
        div.appendChild(likeBtn);
        div.appendChild(deleteBtn);

        lists.collection.appendChild(div)

        input.genre.value = '';
        input.name.value = '';
        input.author.value = '';
        input.date.value = '';

        function like() {
            totalLikes++;
            likeBtn.setAttribute('disabled', true);
            lists.like.textContent = `Total Likes: ${totalLikes}`
        }

        function save() {
            div.remove();
            lists.saved.appendChild(div);
            saveBtn.remove();
            likeBtn.remove();
        }

        function deleteFunc() {
            div.remove();
        }
    }
}