function focused() {
   let elements = document.querySelectorAll('input');

   for (const element of elements) {
        element.addEventListener('focus', onFocus);
        element.addEventListener('blur', onBlur);
   }

   function onFocus(event){
    event.target.parentElement.className ='focused';
   }

   function onBlur(event){
    event.target.parentElement.className ='blur';
   }
}
