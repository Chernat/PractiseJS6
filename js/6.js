// Напишите функцию replaceElementBy(blockCurrent, blockToReplace) которая будет  заменять blockCurrent на blockToReplace и выводить сообщение в консоль после успешного проведения операции!

var blockCurrent = document.getElementById('sixth-task');
var blockToReplace = document.createElement('div');
blockToReplace.className = 'new-block';

replaceElementBy(blockCurrent, blockToReplace);

function replaceElementBy(a, b) {
  a.parentNode.replaceChild(b, a);
}
