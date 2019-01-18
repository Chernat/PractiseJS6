createCloneNode('span-1');

function createCloneNode(block) {
  var cloneBlock = document.getElementById(block).cloneNode(true);
  document.body.appendChild(cloneBlock);
}
