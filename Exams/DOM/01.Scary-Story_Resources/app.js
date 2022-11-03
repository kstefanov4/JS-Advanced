window.addEventListener("load", solve);

function solve() {
  document.getElementById('form-btn').addEventListener('click', publish);

  function publish(e) {
    e.preventDefault();

    let input = {
      firstName: document.getElementById('first-name'),
      lastName: document.getElementById('last-name'),
      age: document.getElementById('age'),
      title: document.getElementById('story-title'),
      genre: document.getElementById('genre'),
      story: document.getElementById('story')
    }

    let firstName = input.firstName.value;
    let lastName = input.lastName.value;
    let age = input.age.value;
    let title = input.title.value;
    let genre = input.genre.value;
    let story = input.story.value;

    if (!firstName || !lastName || !age || !title || !story) {
      return;
    };

    let li = document.createElement('li');
    li.className = 'story-info';

    let article = document.createElement('article');

    let h4 = document.createElement('h4');
    h4.textContent = `Name: ${firstName} ${lastName}`;

    let pAge = document.createElement('p');
    pAge.textContent = `Age: ${age}`;

    let pTitle = document.createElement('p');
    pTitle.textContent = `Title: ${title}`;

    let pGenre = document.createElement('p');
    pGenre.textContent = `Genre: ${genre}`;

    let p = document.createElement('p');
    p.textContent = `${story}`;

    let saveBtn = document.createElement('button');
    saveBtn.className = 'save-btn';
    saveBtn.addEventListener('click', save);
    saveBtn.textContent = 'Save Story';

    let editBtn = document.createElement('button');
    editBtn.className = 'edit-btn';
    editBtn.addEventListener('click', edit);
    editBtn.textContent = 'Edit Story';

    let deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.addEventListener('click', deleteBtnClicked);
    deleteBtn.textContent = 'Delete Story';

    article.appendChild(h4);
    article.appendChild(pAge);
    article.appendChild(pTitle);
    article.appendChild(pGenre);
    article.appendChild(p);

    li.appendChild(article);
    li.appendChild(saveBtn);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    document.getElementById('preview-list').appendChild(li);
    document.getElementById('form-btn').disabled = true

    input.firstName.value = '';
    input.lastName.value = '';
    input.age.value = '';
    input.title.value = '';
    input.genre.value = '';
    input.story.value = '';

    function edit() {
      input.firstName.value = firstName;
      input.lastName.value = lastName;
      input.age.value = age;
      input.title.value = title;
      input.genre.value = genre;
      input.story.value = story;

      li.remove();
      document.getElementById('form-btn').disabled = false;
    };

    function save(){
      let mainElements =Array.from(document.getElementById('main').children);

      for (const element of mainElements) {
        element.remove();
      }
      let h1 = document.createElement('h1');
      h1.textContent = `Your scary story is saved!;`
      document.getElementById('main').appendChild(h1)
    }

    function deleteBtnClicked(){
      li.remove();
      document.getElementById('form-btn').disabled = false;
    }
  }
}
