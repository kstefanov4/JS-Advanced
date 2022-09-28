function solve() {
   let elements =Array.from(document.getElementsByClassName('add-product'));
   console.log(elements)

   for (const element of elements) {
      element.addEventListener('click', add);
   }

   let cart = [];

   function add(event) {
      let childrenList = event.target.parentElement.parentElement.children;

      let price = childrenList[3].childNodes[0].textContent;
      let productName = childrenList[1].childNodes[1].textContent;
      let object = { price, productName };

      cart.push(object);

      let currentAdded = document.getElementsByTagName('textarea')[0].value;
      currentAdded += `Added ${productName} for ${price} to the cart.\n`
      document.getElementsByTagName('textarea')[0].value = currentAdded;

   }

   document.getElementsByClassName('checkout')[0].addEventListener('click', checkout)

   function checkout() {
      let totalPrice = 0;
      let addedProducts = [];
      for (const product of cart) {
         totalPrice +=Number(product.price);
         if (addedProducts.indexOf(product.productName) < 0){
            addedProducts.push(product.productName);
         }
      }
      
      let currentAdded = document.getElementsByTagName('textarea')[0].value;
      currentAdded += `You bought ${addedProducts.join(', ')} for ${totalPrice.toFixed(2)}.`
      document.getElementsByTagName('textarea')[0].value = currentAdded;
   }

}
