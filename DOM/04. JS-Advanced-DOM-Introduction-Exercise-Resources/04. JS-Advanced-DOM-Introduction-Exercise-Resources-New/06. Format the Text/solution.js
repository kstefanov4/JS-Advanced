function solve() {
  let text = document.getElementById('input').value;
  let sentensesArray = text.split('.');
  sentensesArray.pop();
  let output = document.getElementById('output');
  output.innerHTML = '';

  for (let i = 0; i < sentensesArray.length; i += 3){
    let resultArray = [];

    for (let j = 0; j < 3; j++){
      if (sentensesArray[i + j]){
        resultArray.push(sentensesArray[i + j]);
      }
    }
    
    let text = resultArray.join('. ') + '.'.trim();
    output.innerHTML += `<p>${text}</p>`;
  }
}
