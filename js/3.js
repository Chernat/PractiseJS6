//Напишите функцию createSpanInBlockByID(blockID) которая будет создавать элемент 'span' в блоке id=blockID

function createSpanBlockByClass(idElem) {
  var elem = document.getElementById(idElem);

  if (elem.getElementsByTagName('span').length === 0) {
    var span = document.createElement('span');
    elem.appendChild(span);
  }
}

createSpanBlockByClass('third-task');
