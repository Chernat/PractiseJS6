// Напишите функцию replaceElementBy(blockCurrent, blockToReplace) которая будет  заменять blockCurrent на blockToReplace и выводить сообщение в консоль после успешного проведения операции!

var blockCurrent = document.getElementById('span-1');
var blockToReplace = document.createElement('span');
blockToReplace.className = 'new-block';

replaceElementBy(blockCurrent, blockToReplace);

function replaceElementBy(a, b) {
  a.parentNode.replaceChild(b, a);
}
