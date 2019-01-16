function createSpanBlockByClass(clas) {
  var currentClass = document.getElementsByClassName(clas);
  var newSpan = document.createElement('span');
  newSpan.className = 'new-span';
  for (var i = 0; i < currentClass.length; i++) {
    currentClass[i].appendChild(newSpan);
  }
}

createSpanBlockByClass('span-block');
