function createCloneNode(block) {
  if ((block === 'span') || (block === 'div') || (block === 'p')) {
    var cloneBlock = document.getElementsByTagName(block);
    var cloneBlockItem;
    for (var i = 0; i < cloneBlock.length; i++) {
      cloneBlockItem = cloneBlock[i].cloneNode(true);
      document.body.appendChild(cloneBlockItem);
    }
  }
}

createCloneNode('div');
