function create(words) {
   let section = document.getElementById('content');
   //console.log(section)

   for (const paragraph of words) {

      let div = document.createElement('div');
      let p = document.createElement('p');
      p.textContent = paragraph;
      p.style.display = 'none';
      div.appendChild(p);
      section.appendChild(div);
   }
   let sectionChildren = Array.from(section.children);
   console.log(sectionChildren)

   for (const child of sectionChildren) {
      child.addEventListener('click', showText);
   }
   function showText(event) {
      console.log(event.target.children[0].style.display = '')
   }
}
