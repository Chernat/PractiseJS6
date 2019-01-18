replaceElementBy('span-1', 'span')

function replaceElementBy(blockCurrent, blockToReplace) {
  document.replaceElementBy(document.createElement(blockToReplace), blockCurrent);
}
