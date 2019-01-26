//Напишите функцию createSpanInBlockByID(blockID) которая будет создавать элемент 'span' в блоке id=blockID

function createSpanBlockByClass(name) {
  var id = document.getElementById(name);

  if (id.getElementsByTagName('span').length === 0) {
    var span = document.createElement('span');
    id.appendChild(span);
  }
}

createSpanBlockByClass('third-task');
