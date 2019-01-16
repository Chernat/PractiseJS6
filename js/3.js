function createSpanBlockByClass(name) {
  var classArr = document.getElementsByClassName(name);
  for (var i = 0; i < classNameArr.length; i++) {
    if (classArr[i].getElementsByTagName('span').length === 0) {
      var timeSpan = document.createElement('span');
      timeSpan.className = 'new-span--' + (i + 1);
      classArr[i].appendChild(timeSpan);
    }
  }
}

createSpanBlockByClass('span-block');

// немного по другому cделал, вмеcто выбора по id, cделал по клаccу.
