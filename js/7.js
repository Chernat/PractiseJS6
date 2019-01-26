// Покрасьте все буквы текста в заданном элементе в разные случайные цвета. Список цветов должен хранится в массиве.
// Две соседние буквы не должны иметь одинаковый цвет.

coloredLetter('Радуга');

function coloredLetter(elem) {
  var colors = colorArr(elem);
  var newWord = document.createElement('div');
  newWord.id = 'seventh-task';
  newWord.style.fontSize = '30px';
  newWord.style.textTransform = 'uppercase';

  for (var i = 0; i < elem.length; i++) {
    var span = document.createElement('span');
    span.innerText = elem[i];
    span.style.color = colors[i];
    newWord.appendChild(span);
  }

  document.body.insertBefore(newWord, document.getElementById('eighth-task'));
}

function colorArr(elem) {
  var colorArray = [];
  var letters = '0123456789ABCDEF';

  for (var i = 0; i < elem.length; i++) {
    var color = '#';
    for (var j = 0; j < 6; j++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    colorArray.push(color);
  }

  return colorArray;
}
