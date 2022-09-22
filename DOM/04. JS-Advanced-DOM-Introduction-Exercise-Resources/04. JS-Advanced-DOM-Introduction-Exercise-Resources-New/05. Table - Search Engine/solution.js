function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let elements = document.querySelectorAll('tbody tr');
      let searchedText = document.getElementById('searchField').value;
      
      for (const element of elements) {
         element.classList.remove('select');
         if (element.innerHTML.includes(searchedText)){
            element.className = 'select';
            document.getElementById('searchField').value = '';
         }
         
      }
   }
}