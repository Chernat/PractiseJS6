function createCloneNode(block) {
  if (block === 'span' || 'div' || 'p') {
    for (var i = 0; i < document.getElementsByTagName(block).length; i++) {
      var cloneBlock = document.getElementsByTagName(block)[i].cloneNode(true);
      document.body.appendChild(cloneBlock);
    }
  }
}

createCloneNode('div');
