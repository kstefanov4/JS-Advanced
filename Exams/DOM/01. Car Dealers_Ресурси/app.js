window.addEventListener("load", solve);

function solve() {
  let profit = 0;
  const input = {
    make: document.getElementById('make'),
    model: document.getElementById('model'),
    productionYear: document.getElementById('year'),
    fuelType: document.getElementById('fuel'),
    originalCost: document.getElementById('original-cost'),
    sellingPrice: document.getElementById('selling-price')
  }

  const list = {
    published: document.getElementById('table-body'),
    soldCars: document.getElementById('cars-list')
  }

  document.getElementById('publish').addEventListener('click', publishFunc);

  function publishFunc(event) {
    event.preventDefault();

    let make = input.make.value;
    let model = input.model.value;
    let productionYear = input.productionYear.value;
    let fuelType = input.fuelType.value;
    let originalCost = input.originalCost.value;
    let sellingPrice = input.sellingPrice.value;

    if (make === '' || model === '' || productionYear === ''
      || fuelType === '' || originalCost === '' || sellingPrice === ''
      || originalCost > sellingPrice) {
      return
    };

    let tr = document.createElement('tr');
    tr.className = 'row';
    tr.innerHTML = `<td>${make}</td>
    <td>${model}</td>
    <td>${productionYear}</td>
    <td>${fuelType}</td>
    <td>${originalCost}</td>
    <td>${sellingPrice}</td>
    <td>
      <button class="action-btn edit">Edit</button>
      <button class="action-btn sell">Sell</button>
    </td>`

    tr.querySelector('.edit').addEventListener('click',edit);
    tr.querySelector('.sell').addEventListener('click',sell);

    list.published.appendChild(tr);

    input.make.value = '';
    input.model.value = '';
    input.productionYear.value = '';
    input.fuelType.value = '';
    input.originalCost.value = '';
    input.sellingPrice.value = '';

    function edit(){
      input.make.value = make;
      input.model.value = model;
      input.productionYear.value = productionYear;
      input.fuelType.value = fuelType;
      input.originalCost.value = originalCost;
      input.sellingPrice.value = sellingPrice;

      tr.remove();
    }

    function sell(){
      let li = document.createElement('li');
      li.className = 'each-list';
      li.innerHTML = `<span>${make} ${model}</span>
      <span>${productionYear}</span>
      <span>${sellingPrice - originalCost}</span>`;
      
      list.soldCars.appendChild(li);
      tr.remove();
      
      profit += sellingPrice - originalCost;
      document.getElementById('profit').textContent = `${profit.toFixed(2)}`;
    }
  }
}
