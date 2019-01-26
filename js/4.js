// Создайте функцию createCloneNode(block) которая будет клонировать передаваемый ей элемент и добавять его в конец страницы!

createCloneNode('fourth-task');

function createCloneNode(block) {
  var cloneBlock = document.getElementById(block).cloneNode(true);
  cloneBlock.className = 'cloned-block';
  document.body.insertBefore(cloneBlock, document.getElementById('fifth-task'));
}
