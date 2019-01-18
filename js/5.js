addChildrenTo('span-1', 5, 'li');

function addChildrenTo(block, count, type) {
  for (var i = 0; i < count; i++) {
    document.getElementById(block).appendChild(document.createElement(type));
  }
}
