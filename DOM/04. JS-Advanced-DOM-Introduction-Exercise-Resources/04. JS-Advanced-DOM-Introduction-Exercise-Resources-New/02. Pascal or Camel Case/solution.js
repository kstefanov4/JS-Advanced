function solve() {
  //"this is an example", "Camel Case"
  //"secOND eXamPLE", "Pascal Case"

  let text = document.getElementById('text').value;
  let convention = document.getElementById('naming-convention').value;
  let words = text.split(' ').map(x => x.toLowerCase());
  let result = '';

  for (let i = 0; i < words.length; i++) {

    if (convention == 'Camel Case') {
      if (i == 0) {
        result += words[i];
      } else {
        result += words[i][0].toUpperCase() + words[i].substring(1);
      }
    } else if (convention == 'Pascal Case') {
      result += words[i][0].toUpperCase() + words[i].substring(1);
    }else{
      result = 'Error!';
    }

  }
  document.getElementById('result').textContent = result;
}