function search() {
   let elements =Array.from(document.querySelectorAll('#towns li'));
   let searchedText = document.getElementById('searchText').value;
   
   let matchesCount = 0;

   for (const element of elements) {
      let text = element.innerText;
      element.style.textDecoration = '';
      element.style.fontWeight = '';

      if (text.includes(searchedText)){
         matchesCount++;
         element.style.textDecoration = 'underline'; 
         element.style.fontWeight = 'bold';
      }
   }

   document.getElementById('result').textContent = `${matchesCount} matches found`;
}
