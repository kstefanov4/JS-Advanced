window.addEventListener("load", solve);

function solve() {

  const input = {
    title: document.getElementById('post-title'),
    category: document.getElementById('post-category'),
    text: document.getElementById('post-content')
  }

  const list = {
    review: document.getElementById('review-list'),
    uploaded: document.getElementById('published-list')
  }

  document.getElementById('publish-btn').addEventListener('click', publish);
  document.getElementById('clear-btn').addEventListener('click',clear);

  function publish() {

    let title = input.title.value;
    let category = input.category.value;
    let text = input.text.value;

    if (title == '' || category == '' || text == ''){
      return;
    }

    let li = document.createElement('li');
    li.className = 'rpost';
    li.innerHTML = `<article>
    <h4>${title}</h4>
    <p>Category: ${category}</p>
    <p>Content: ${text}</p>
    </article>
    <button class="action-btn edit">Edit</button>
    <button class="action-btn approve">Approve</button>`;
    list.review.appendChild(li);

    input.title.value = '';
    input.category.value = '';
    input.text.value = '';

    li.querySelector('.edit').addEventListener('click', edit);
    li.querySelector('.approve').addEventListener('click', approve);

    function edit() {
      input.title.value = title;
      input.category.value = category;
      input.text.value = text;

      li.remove();
    }

    function approve() {
      li.innerHTML =`<article>
      <h4>${title}</h4>
      <p>Category: ${category}</p>
      <p>Content: ${text}</p>
      </article>`;
      list.uploaded.appendChild(li);
    }
  }
  function clear(){
    let forDelete = Array.from(list.uploaded.children);

    for (const li of forDelete) {
      li.remove();
      
    }
  }
}
